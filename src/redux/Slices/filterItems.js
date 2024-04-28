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
    items:products,
    
}
export const filteredItems=createSlice({
name:"filteredItems",
initialState,
reducers:{
    filterItems:(state,action)=>{
  state.items=products.filter(item=>item.category.toLowerCase()==action.payload.toLowerCase())
    },
    handleFilterAll:(state,action)=>{
       state.items=products
    },
    filterBetweenPrice:(state,action)=>{    
      const { min, max, category } = action.payload;
      if (category.toLowerCase() === "all") {
        state.items = products.filter(item => item.price >= min && item.price <= max);
      } else {
        state.items = products.filter(item => item.category.toLowerCase() === category.toLowerCase() && item.price >= min && item.price <= max);
      }
    },
    calculateRemainingQuantity:(state,action)=>{
        const {id,quantity}=action.payload
    let item=state.items.find(item=>item.id==id)
    let tquantity=item.totalQuantity-quantity
    item.totalQuantity=tquantity
      
    },
    addMoreQuantity:(state,action)=>{
      const {id,quantity}=action.payload
      let item=state.items.find(item=>item.id==id)
      let tquantity=item.totalQuantity+quantity
      item.totalQuantity=tquantity

    }
}
})




 export const {filterItems,handleFilterAll,filterLowtoHigh,filterHightoLow,filterBetweenPrice,calculateRemainingQuantity} = filteredItems.actions
 export default filteredItems.reducer;

