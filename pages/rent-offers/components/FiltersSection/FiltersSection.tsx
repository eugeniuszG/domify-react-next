import Chip from "@mui/material/Chip"
import Divider from "@mui/material/Divider"
import Slider from "@mui/material/Slider"
import { useEffect } from "react"
import { ApartmentFilter } from '../../../../services/apartment.service';
import styles from './FiltersSection.module.css'


const FiltersSection = (
    {   isApartemnt, isRoom, districts, rooms, isApplyDirty, 
        isReset, District, currentPage, priceRange, Rooms,
        setApplyState, setResetState, setPriceRange, setApartmentBoolean, setRoomBoolean,
        setRooms, setDistricts, setLoading, setPage, setApartmentsList
    }: any) => {

    useEffect(() => {
        if((isApartemnt || isRoom) && districts.length > 0 && rooms.length > 0) {
            setApplyState(true);
        } else {
            setApplyState(false);
        }

        if((isApartemnt || isRoom) || districts.length > 0 || rooms.length > 0) {
            setResetState(true);
        } else {
            setResetState(false);
        }
    }, [isRoom, isApartemnt, rooms, districts, isApplyDirty, isReset])

    const handlePriceRangeChange = (event: Event, newValue: number | number[]) => {
        setPriceRange(newValue as number[]);
    };

    const handleApartmentDelete = () => {
        setApartmentBoolean(false)
    };

    const handleApartmetChip = () => {
        setApartmentBoolean(true);
    };

    const handleRoomChip = () => {
        setRoomBoolean(true);
    };
    const handleRoomDelete = () => {
        setRoomBoolean(false);
    };

    const handleOneRoomChip = (e: React.MouseEvent) => {
        let span = e.target as HTMLElement;
        if(rooms.includes(+span.innerHTML) === false ) {
            setRooms([...rooms, +span.innerHTML]);    
        }
    };

    const handleDistrictChip = (e: React.MouseEvent) => {
        let span = e.target as HTMLElement;
        setDistricts([...districts, span.innerText])
    };

    const handleDistrictDelete = (e: any) => {
        let choosedDistrict = e.nativeEvent.path[2].innerText as string;
        if(Object.values(District).includes(choosedDistrict)) {
            setDistricts(districts.filter((district: string) => district !== choosedDistrict))
        }
    }

    const handleRoomsDelete = (e: any) => {
        let choosedRoom = +e.nativeEvent.path[2].innerText as number;
        setRooms(rooms.filter((numbers: number) => {
            return numbers !== choosedRoom;
        }));
    }

    const handleReset = () => {
        setPriceRange([1000, 2500]);
        setApartmentBoolean(false);
        setRoomBoolean(false);
        setRooms([]);
        setDistricts([]);
    }

    const handleApply = () => {
        setPage(1);
        setLoading(true);
        let filters = getFiltersFromState();
        ApartmentFilter(currentPage, filters)
        .then(res => {
            if (res.status === 200) {
                setApartmentsList(res.data.items?.slice(0, 120));
            }
        })
        .then(() => {setLoading(false)});
    }

    const getFiltersFromState = () => {
        return {
            type_space: isApartemnt ? 'APARTMENT' : isRoom ? 'SINGLE_ROOM' : 'ALL_TYPE',
            district: districts,
            price_min: priceRange ? priceRange[0] : 0,
            price_max: priceRange ? priceRange[1] : 1000,
            number_rooms: rooms,
        }
    }

    return (
        <div className={`${styles["filters-container"]} ${"col-3"}`}>
        <div className='p-4 mx-auto'>
            <div className={`${styles["flter-section-header"]} ${"text-center"}`}>Type of apartment</div>
            <div className= {styles['list-chip-elements']}>
                <span className='m-2'>
                    {isApartemnt ? 
                        <Chip label="Apartment" onClick={handleApartmetChip} color='success'  onDelete={handleApartmentDelete}/> 
                        :
                        <Chip label="Apartment" onClick={handleApartmetChip} />
                    }
                </span>
                <span className='m-2'>
                    {isRoom ? 
                        <Chip label="Room" onClick={handleRoomChip} color='success' onDelete={handleRoomDelete}/>
                        :
                        <Chip label="Room" onClick={handleRoomChip}/>
                    }
                </span>
            </div>
        </div>
        <Divider />
        <div className='p-4'>
            <div className={`${styles["flter-section-header"]} ${"text-center"}`}>Price</div>
            <Slider
                className='d-flex justify-content-center'
                getAriaLabel={() => 'Price Range'}
                value={priceRange}
                size="small"
                onChange={handlePriceRangeChange}
                valueLabelDisplay="auto"
                defaultValue={1000} 
                step={100} 
                min={0} 
                max={10000}
                sx={{
                    width: 270,
                    color: 'success.main',
                    margin: 'auto'
                  }}
            />
            <div className={styles["list-chip-elements"]}>
                <Chip label={priceRange ? priceRange[0] : 0}/>
                <div className='px-3 pt-1'>-</div> 
                <Chip label={priceRange ? priceRange[1] : 1000}/>
            </div>
        </div>
        <Divider />
        <div className='p-4 text-center'>
            <div className={styles["flter-section-header"]}>Number of rooms</div>
            <div className={styles["list-chip-elements"]}>
                {Rooms?.map((room: number, i: number) => {
                    return (
                        <span style={{padding: '4px', marginTop: '4px'}} key={i}>
                            {rooms.includes(room) ? 
                                <Chip label={room} onClick={handleOneRoomChip} color='success'  onDelete={handleRoomsDelete}/> 
                                :
                                <Chip label={room} onClick={handleOneRoomChip} />
                            }
                        </span>
                    )
                })}
            </div>
        </div>
        <Divider />
        <div className='p-4 text-center'>
            <div className={styles["flter-section-header"]}>Districts</div>
            <div className={styles["list-chip-elements"]}>
                {District 
                    ? Object.values(District).map((district: any, index) => {
                        return (
                            <span style={{padding: '4px', marginTop: '4px'}} key={index}>
                                {districts.includes(district) ? 
                                    <Chip label={district} onClick={handleDistrictChip} color='success' onDelete={handleDistrictDelete}/> 
                                    :
                                    <Chip label={district} onClick={handleDistrictChip}/>
                                }
                            </span>
                        )
                    }
                ) : null }
            </div>
        </div>
        <Divider />
        <div className='mx-auto mb-2 d-flex justify-content-center' style={{paddingTop: '12px'}}>
            <button onClick={handleReset} disabled={isReset === false} type='button' className={`${styles["btn-reset"]} ${'mx-3'}`} >reset</button>
            <button onClick={handleApply} disabled={isApplyDirty === false} type='button' className={`${styles["btn-apply"]}`}>apply</button>
        </div>
    </div>
    )
}

export default FiltersSection;