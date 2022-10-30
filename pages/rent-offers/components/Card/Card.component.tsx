import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import moment from 'moment';
import { otodomLogo, oloxLogo } from '../../../../utils/constants';
import styles from './Card.module.css'
import { Districts } from '../../../../services/models/models';
import { Source, Type } from '../../../../services/models/models';

const Card: React.FC<{
    title: string, 
    price: string, 
    publishedTime: string, 
    district: Districts,
    imageSrc: string,
    discription: string,
    spaceType: Type,
    numberRooms: number,
    source_url_offer: string
    source_website: Source
}> = ({title, price, publishedTime, district, imageSrc, discription, spaceType, numberRooms, source_website, source_url_offer}) => {
   
    const handleRedirectionToOffer = () => {
        window.open(source_url_offer, '_blank');
    }

    return (
        <div onClick={handleRedirectionToOffer} className={styles['card-wrapper']}>
            <div style={{ 
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '100%',
                height: '270px',
                borderRadius: '15px',
                backgroundColor: '#f5f5f5',
            }}
            ></div>

            <div className='px-2 pb-2 pt-2'>
                <div className='d-flex justify-content-between px-2'>
                    <span className={styles['published-time']}>{ moment(publishedTime).fromNow() }</span>
                    <span className={styles['price-label']}>{ price } zł</span>
                </div>
                <Stack className='mt-2' direction="row" spacing={2}>
                    <Chip label={ district } variant="outlined"/>
                    <Chip label={ spaceType === "SINGLE_ROOM" ? 'pokój' : `${numberRooms === 1 ?  numberRooms + ' pokój' :  numberRooms + ' pokoi'}` } variant="outlined" />
                </Stack>
                <h5 className={`${'mt-3'} ${styles.title}`}>{ title }</h5>
                <p className={styles['description']}>{ discription?.substring(0, 72) }...</p>
                <div className='pt-2' style={{
                    backgroundImage: `url(${source_website === "OTODOM" ? otodomLogo : oloxLogo})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom left',
                    width: '37px',
                    height: '20px',
                    paddingTop: '6px',
                }}>
                </div>
            </div>
        </div>
    )
}

export default Card;