import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../../data";

const products=data.map(item=>{
    if(item.onSale){
        let price=item.price-(item.price*item.discount/100)
        item.discountedPrice=Math.floor(price)
    }
    return item
})


const initialState={
    items:products.slice(0,6)

}

const filterHomeItemsSlice=createSlice({
    name:"filtered-home-items",
    initialState,
    initialState,
    reducers:{
        filterHomeitems:(state,action)=>{
      state.items=data.filter(item=>item.category.toLowerCase()==action.payload.toLowerCase())
        },
        filterAll:(state,action)=>{
            let items=data.slice(0,6)
           state.items=items
        },
        applyDiscount:(state,action)=>{
            const {discountedPrice,id}=action.payload;
            const itemtoUpdate = state.items.find(item =>item.id === id);
            if(itemtoUpdate){
                itemtoUpdate.discountedPrice=Math.floor(discountedPrice)
            }


        }
    }
})

export const {filterHomeitems,filterAll,applyDiscount}=filterHomeItemsSlice.actions
export default filterHomeItemsSlice.reducer