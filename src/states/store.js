import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import userReducer from './userSlice'
export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        user:userReducer,
    },
    middleware: getDefaultMiddlewere=>
        getDefaultMiddlewere().concat(apiSlice.middleware)
})