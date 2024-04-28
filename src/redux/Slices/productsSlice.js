import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../../data";

const initialState=data


export const productsSlice=createSlice({
name:"products",
initialState,
reducers:{}
})




export default productsSlice.reducer;