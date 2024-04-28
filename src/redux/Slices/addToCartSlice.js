import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[]
}


export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const {image,name,price,id,quantity,totalQuantity}=action.payload
const item={image,name,initialPrice:price,id,quantity,total:price,totalQuantity}
state.cartItems.push(item)
        },
        removeItem:(state,action)=>{
            state.cartItems=state.cartItems.filter(item=>item.id!==action.payload)

        },
        updateCart:(state,action)=>{
            const {quantity,total,id}=action.payload
            const cartToUpdate = state.cartItems.find(item =>item.id === id);
            cartToUpdate.quantity=quantity
            cartToUpdate.total=total

        },
        clearCart:(state,action)=>{
            state.cartItems=[]
        }
    }
})


export const {addToCart,removeItem,updateCart,clearCart} =cartSlice.actions
export default cartSlice.reducer;