import { createSlice } from "@reduxjs/toolkit";

const appConfig =createSlice({
    name:'gpt',
    initialState:{
        lang:'en'
    },
    reducers:{
        changeLang:(state,action)=>{
                state.lang=action.payload;
        }
    }
})
export const{changeLang}=appConfig.actions;

export default appConfig.reducer