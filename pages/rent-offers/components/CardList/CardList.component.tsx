import React from 'react'
import { Apartment } from '../../../../services/models/models';
import Card  from '../Card/Card.component';

const CardList: React.FC<{apartmentsList: Array<Apartment>}> = ({apartmentsList}) => {
        return (
            <div className='d-flex justify-content-center flex-wrap'>
                {apartmentsList.map((apartment: Apartment, i: number) => {
                    return (
                            <Card
                                key={i}
                                title={apartment.title}
                                price={apartment.price}
                                publishedTime={apartment.updated_time}
                                district={apartment.district}
                                imageSrc={apartment.url_images[0]}
                                discription={apartment.description}
                                spaceType={apartment.type_space}
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