import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from './MovieSlice'
import userReducer from './userSlice'
const appStore= configureStore({
    reducer: {
        user:userReducer,
        movie:MovieReducer
    }
})

export default appStore