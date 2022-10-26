import React, { useEffect, useState } from 'react';
import CardList from './components/CardList/CardList.component';
import Pagination from '@mui/material/Pagination';
import styles from './index.module.css'
import { LoaderSimple } from '../../components/Loader/Loader.component';
import { ApartmentService, ApartmentFilter } from '../../services/apartment.service';
import { NextPage } from 'next';
import FiltersSection from './components/FiltersSection/FiltersSection'
import { District, Rooms } from '../../utils/constants';
import { RootState } from '../../store/store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ApartmentPayload, fetchApartmets, selectApartmetns, selectLoadingState } from './apartmentsSlice';

const RentOffersWrapper: NextPage = () => {
    const [apartmentsList, setApartmentsList] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [pagesNumber, setMaxNumberPage] = useState<number>(20);
    const [priceRange, setPriceRange] = useState<number[]>([1000, 2500]);
    const [isApartemnt, setApartmentBoolean] = useState<boolean>(false)
    const [isRoom, setRoomBoolean] = useState<boolean>(false)
    const [rooms, setRoms] = useState<number[]>([]);
    const [districts, setDistricts] = useState<string[]>([]);
    const [isApplyDirty, setApplyState] = useState<boolean>(false);
    const [isReset, setResetState] = useState<boolean>(false);
    const [currentPage, setPage] = useState(1);


    const dispatch = useAppDispatch();
    const selector = useAppSelector;

    const payload: ApartmentPayload = {
        page: currentPage,
        // hardcoded for now
        limit: 6
    }


    useEffect(() => {
        console.log('run useEffect')
        const dispatched = dispatch(fetchApartmets(payload));
    }, [])

    const fetchedApartmentsList = selector((state: RootState) => state.apartments.apartmentsList)




    const handlePageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page);
        if(currentPage !== page) {
            setLoading(true);
            await ApartmentService({page: currentPage, limit: 6}).then(res => {
                if (res.status === 200) {
                    setApartmentsList(res.data.items);
                    setLoading(false);
                }
            });
        }
    };

    return (
        <div className={`${styles["padding-zero"]} ${"container-fluid"}`} style={{height: 'auto'}}>
            <div className={styles['divider']}></div>
            <div className='row' style={{minHeight: '90vh', zIndex: 100}} >
                <FiltersSection
                    isApartemnt={isApartemnt}
                    isRoom={isRoom}
                    districts={districts}
                    rooms={rooms}
                    isApplyDirty={isApplyDirty}
                    isReset={isReset}
                    District={District}
                    currentPage={currentPage}
                    priceRange={priceRange}
                    Rooms={Rooms}
                    setApplyState={setApplyState}
                    setResetState={setResetState}
                    setPriceRange={setPriceRange}
                    setApartmentBoolean={setApartmentBoolean}
                    setRoomBoolean={setRoomBoolean}
                    setRooms={setRoms}
                    setDistricts={setDistricts}
                    setLoading={setLoading}
                    setPage={setPage}
                    setApartmentsList={setApartmentsList}
                ></FiltersSection>
                <div style={{minHeight:"100%", paddingRight: 0}} className='col-9 position-relative'>
                    <div style={{paddingBottom: "5rem"}}>

                        {
                            
                        }

                        {loading 
                            ? 
                            <div style={{"top":"40%"}} className='position-absolute start-50 translate-middle'><LoaderSimple/></div>
                            : 
                            <div className={styles['list-offers-container']}>
                                {apartmentsList ? <CardList apartmentsList={apartmentsList}/>
                                :
                                <div style={{"top":"40%"}} className='position-absolute start-50 translate-middle'>Sorry no data</div>
                                }
                                
                            </div>
                        }
                        <div style={{position: 'absolute', bottom: 0, width: "100%", height: "4.5rem", left:"35%"}}>
                            <Pagination 
                                onChange={handlePageChange}
                                page={currentPage}
                                //ask api for number pages
                                count={pagesNumber} 
                                variant="outlined" 
                                color="standard"
                            />
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default RentOffersWrapper;