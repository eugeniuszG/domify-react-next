import { Apartment } from "../services/models/models";

export const GET_APARTMENTS_PENDING = "GET_APARTMENTS";
export const GET_APARTMENTS_SUCCESS = "GET_APARTMENTS_SUCCESS";
export const GET_APARTMENTS_FAIL = "GET_APARTMENTS_FAIL";

export const GET_APARTMENTS_FILTERED = "GET_APARTMENTS_FILTERED";
export const GET_APARTMENTS_FILTERED_SUCCESS = "GET_APARTMENTS_FILTERED_SUCCESS";
export const GET_APARTMENTS_FILTERED_FAIL = "GET_APARTMENTS_FILTERED_FAIL";


export interface GET_APARTMENTS_PENDING {
    type: typeof GET_APARTMENTS_PENDING
}

export interface GET_APARTMENTS_SUCCESS {
    type: typeof GET_APARTMENTS_SUCCESS
    payload: Array<Apartment>
}

export interface GET_APARTMENTS_FAIL {
    type: typeof GET_APARTMENTS_FAIL
}

export interface GET_APARTMENTS_FILTERED {
    type: typeof GET_APARTMENTS_FILTERED,
}


export interface UserFilter {
    type_space: Type,
    price_min: number,
    price_max: number,
    number_rooms: Array<number>
    district: Districts
}

export enum Type {
    APARTMENT,
    SINGLE_ROOM,
    ALL_TYPE
}

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

export type ApartmentDispatchTypes = 
    GET_APARTMENTS_PENDING | 
    GET_APARTMENTS_SUCCESS | 
    GET_APARTMENTS_FAIL |
    GET_APARTMENTS_FILTERED;
