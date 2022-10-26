import { createSlice, createAsyncThunk, AnyAction, AsyncThunk } from '@reduxjs/toolkit'
import { axios } from '../../services/axios'
import { Apartment } from '../../services/models/models';
import { RootState } from '../../store/store';
import { UserFilter } from '../../store/types';

interface Pagination {
    page: number,
    size: number,
    total: number
}

interface ApartmentsState {
    loadingState: loadingState,
    apartmentsList: Array<Apartment>,
    pagination?: Pagination,
    error?: any
}

type loadingState = 'loading' | 'idle' | 'error' | 'success';

export interface ApartmentPayload {
    page: number,
    limit: number
}

interface ApartmentFilteredPayload {
    page: number,
    limit: number,
    userFilter: UserFilter
}


const initialState: ApartmentsState = {
    apartmentsList: [],
    loadingState: 'idle',
    error: null,
}

export const fetchApartmets = createAsyncThunk(
    'apartments/fetchApartments', 
    async ({page, limit}: ApartmentPayload) => {
        const response = await axios.get(`/apartament?order_by=true&page=${page}&size=${limit}`);
        return response.data
    }
)

export const fetchApartmetsFiltered = createAsyncThunk(
    'fetchApartmentsFiltered',
    async ({page, limit, userFilter}: ApartmentFilteredPayload) => {
        const response = await axios.post(`/apartament/filter?page=${page}&size=${limit}`, userFilter); 
        return response.data
    }
)

export const apartmentsSlice = createSlice({
  name: 'apartments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchApartmets.pending, (state, action) => {
        state.loadingState = 'loading'
      })
      .addCase(fetchApartmets.fulfilled, (state, action) => {
        state.loadingState = 'success'
        console.log(action.payload);
        state.apartmentsList = state.apartmentsList.concat(action.payload.itmes)
        state.pagination = {
            ...state.pagination,
            page: action.payload.page as number,
            size: action.payload.size as number,
            total: action.payload.total as number,
        }
      })
      .addCase(fetchApartmets.rejected, (state, action) => {
        state.loadingState = 'error'
        state.error = action.error.message
      })
  },
})


export const selectApartmetns = (state: RootState) => state.apartments.apartmentsList;
export const selectLoadingState = (state: RootState) => state.apartments.loadingState;