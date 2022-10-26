import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./rootReducer";

export const store = configureStore(
    { 
        reducer: rootReducer,
        // middleware: [thunk]
    }
)

// assigning store to next wrapper
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch