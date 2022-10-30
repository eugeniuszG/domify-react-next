import React, { useEffect, useState } from 'react';
import CardList from './components/CardList/CardList.component';
import Pagination from '@mui/material/Pagination';
import styles from './index.module.css'
import { LoaderSimple } from '../../components/Loader/Loader.component';
import { NextPage } from 'next';
import FiltersSection from './components/FiltersSection/FiltersSection'
import { RootState } from '../../store/store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ApartmentPayload, fetchApartmets } from './apartmentsSlice';

const RentOffersWrapper: NextPage = () => {
    const [currentPage, setPage] = useState(1);
    const [isFilterUsed, setFiltersUsedBoolean] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const selector = useAppSelector;

    const payload: ApartmentPayload = {
        page: currentPage,
        // hardcoded for now
        limit: 6
    }

    const fetchedApartmentsList = selector((state: RootState) => state.apartments.apartmentsList);
    const loadingState = selector((state: RootState) => state.apartments.loadingState);
    const serverPagination = selector((state: RootState) => state.apartments.pagination);
    const numberOfPages = serverPagination?.total ? (Math.round(serverPagination?.total / payload.limit)) : 20;


    useEffect(() => {
        if (isFilterUsed == false) {
            dispatch(fetchApartmets(payload));
        }
    }, [currentPage])

    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        newPage: number,
      ): void => {
        setPage(newPage);
      };

    return (
        <div className={`${styles["padding-zero"]} ${"container-fluid"}`} style={{height: 'auto'}}>
            <div className={styles['divider']}></div>
            <div className='row' style={{minHeight: '90vh', zIndex: 100}}>
                <FiltersSection
                    currentPage={currentPage}
                    isFilterUsed={isFilterUsed}
                    pageSetter={setPage}
                    isFiltersSetter={setFiltersUsedBoolean}
                />
                <div style={{minHeight:"100%", paddingRight: 0}} className='col-9 position-relative'>
                    <div style={{paddingBottom: "5rem"}}>
                        { loadingState === "loading" ? 
                            <div style={{"top":"40%"}} className='position-absolute start-50 translate-middle'>
                                <LoaderSimple/>
                            </div> : 
                            <div className={styles['list-offers-container']}>
                                { fetchedApartmentsList.length ? 
                                    <CardList apartmentsList={fetchedApartmentsList}/> :
                                    <div style={{"top":"40%"}} className='position-absolute start-50 translate-middle'>
                                        Sorry, no data :(
                                    </div>
                                }
                            </div>
                        }
                        <div style={{
                            position: 'absolute', 
                            bottom: 0, 
                            width: "100%", 
                            height: "4.5rem", 
                            left:"35%"}}>
                            <Pagination 
                                onChange={handlePageChange}
                                page={currentPage}
                                count={numberOfPages} 
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