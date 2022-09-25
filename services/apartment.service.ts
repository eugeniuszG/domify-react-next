import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API;

export function ApartmentService ({page, limit}: any): Promise<any> {
    return axios.get(`${API_URL}/apartament?order_by=true&page=${page}&size=${limit}`);
}

export function ApartmentFilter (page: number, userFilter: any): Promise<any> {
    let size = 6;
    return axios.post(`${API_URL}/apartament/filter?page=${page}&size=${size}`, userFilter, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
        }
    });
}