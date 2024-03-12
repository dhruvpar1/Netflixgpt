import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from './MovieSlice'
import userReducer from './userSlice'
import gptReducer from './gptSlice'
import appConfig from './appConfigSlice'
const appStore= configureStore({
    reducer: {
        user:userReducer,
        movie:MovieReducer,
        gpt:gptReducer,
        config:appConfig,
    }
})

export default appStore