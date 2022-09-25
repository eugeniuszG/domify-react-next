import React from 'react'
import Card  from '../Card/Card.component';
import styels from './CardList.module.css'

const CardList = (props :any) => {
        return (
            <div className='d-flex justify-content-center flex-wrap'>
                {props.apartmentsList?.map((apartment?: any) => {
                    return (
                            <Card
                                key={apartment.id}
                                title={apartment.title}
                                price={apartment.price}
                                publishedTime={apartment.updated_time}
                                district={apartment.district}
                                imageSrc={apartment.url_images[0]}
                                discription={apartment.description}
                                numberRooms={apartment.number_rooms}
                                source_url_offer={apartment.source_url_offer}
                                source_website={apartment.source_website}
                            ></Card>
                    )
                })}
            </div>
        )
}

export default CardList;