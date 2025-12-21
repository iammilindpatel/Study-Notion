import {createSlice} from "@reduxjs/toolkit"
import { useState } from "react";


const initialState = {
    // accountType: localStorage.getItem(accountType) ?(localStorage.getItem(accountType)) : "student",
    accountType: localStorage.getItem("accountType") || "student",
};


const profileSlice = createSlice({
    name:"profile",
    initialState: initialState,
    reducers: {
        setAccountTypeRedux(state, value) {
            const type = value.payload.toLowerCase();
            state.accountType = type;
            // state.accountType = value.payload.toLowerCase();
            localStorage.setItem(("accountType"),type);
        },
    },
});

export const {setAccountTypeRedux} = profileSlice.actions;
export default profileSlice.reducer;    