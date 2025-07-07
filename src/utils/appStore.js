import { configureStore } from "@reduxjs/toolkit";
import UserReducers from "./Slices/UserSlice";

const AppStore = configureStore({
    reducer:{
        user: UserReducers
    }
})

export default AppStore;