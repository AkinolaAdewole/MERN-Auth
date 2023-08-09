import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { get } from "https";

const store = configureStore({
    redcer:{},
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware(),
    devTools:true
});

export default store;