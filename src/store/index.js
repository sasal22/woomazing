import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./userSlice";
import clothesSlice from "./clothesSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer:{
        user:userSlice,
        clothesSlice,
        cartSlice
    }
})