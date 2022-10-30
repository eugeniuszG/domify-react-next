export interface Apartment {
    id: number,
    uuid: string,
    type_space: Type,
    source_website: Source,
    source_url_offer: string,
    url_images: Array<string>,
    is_sent_for_facebook: string,
    is_sent_for_telegram: string,
    is_agency: boolean,
    title: string,
    district: Districts,
    price: string,
    number_rooms: number
    description: string,
    publish_time: string,
    updated_time: string
}

export interface UserFilter {
    type_space: Type,
    price_min: number,
    price_max: number,
    number_rooms: Array<number>
    district: Array<Districts>
}


export type Type = "APARTMENT" | "SINGLE_ROOM" | "ALL_TYPE"

export type Source =
    "OLX" |
    "OTODOM" |
    "GUMTREE" |
    "MORIZON"

export enum Districts {
    "Mokotów",
    "Praga-Południe",
    "Ursynów",
    "Wola",
    "Bielany",
    "Targówek",
    "Śródmieście",
    "Bemowo",
    "Białołęka",
    "Ochota",
    "Wawer",
    "Praga-Północ",
    "Ursus",
    "Żoliborz",
    "Włochy",
    "Wilanów",
    "Rembertów",
    "Wesoła"
}