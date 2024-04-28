import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../../data";

let initialState={
    items:[]
}

const searchSlice=createSlice({
    name:"search",
    initialState,
    reducers:{
        filterSearchItems:(state,action)=>{
           
state.items=data.filter(item=>item.name.toLowerCase().includes(action.payload.toLowerCase()))

        },
        clearAll:(state,action)=>{
            state.items=[]
        }
    }
})

export const {filterSearchItems,clearAll}=searchSlice.actions
export default searchSlice.reducer