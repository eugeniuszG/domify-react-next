import { axios } from "./axios";
import { UserFilter } from "./models/models";

export function ApartmentService ({page, limit}: any): Promise<any> {
    try {
        return axios.get(`/apartament?order_by=true&page=${page}&size=${limit}`);
    } catch (error) {
        throw error;
    }
}

export function ApartmentFilter (page: number, limit: number, userFilter: UserFilter): Promise<any> {
    try {
        return axios.post(`/apartament/filter?page=${page}&size=${limit}`, userFilter); 
    } catch (error) {
        throw error;
    }
}