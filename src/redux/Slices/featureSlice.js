import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../../data";
let products=[]
data.map(item=>{
  if(item.featured){
      products.push(item)
  }
})

let initialState={
    items:products
}

export const featureSlice=createSlice({
    name:"feature",
    initialState,
    reducers:{}
}) 

export default featureSlice.reducer