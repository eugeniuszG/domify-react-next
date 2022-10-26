import { combineReducers } from "redux";
import { apartmentsSlice } from "../pages/rent-offers/apartmentsSlice";

export default combineReducers({
    apartments: apartmentsSlice.reducer
});