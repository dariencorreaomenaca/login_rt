import {  configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/auth.slices";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";



export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch | any;

export const userAppDispatch = () => useDispatch<AppDispatch>;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;