import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../redux/product/productSlice";
import generalReducer from "../redux/general/generalSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        general: generalReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch