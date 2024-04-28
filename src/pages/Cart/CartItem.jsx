import React, {  useEffect, useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateCart } from '../../redux/Slices/addToCartSlice';

function CartItem({item,calculateTotal}) {
  const items=useSelector(state=>state.cart.cartItems)
    const [quantity,setQuantity]=useState(1)
    const [initialPrice,setInitialPrice]=useState(0)
    const [totalQuantity,setTotalQuantity]=useState(0)
  const dispatch=useDispatch()
useEffect(()=>{
  calculateItemTotal(quantity)

if(quantity===0){
  setQuantity(1)
}

},[quantity])

useEffect(()=>{
setInitialPrice(item.initialPrice)
setTotalQuantity(item.totalQuantity)
},[])

useEffect(()=>{
  calculateTotal()
  
},[items])
function handleRemoveItem(id){
        dispatch(removeItem(id))
    }
function calculateItemTotal(quantity){
  if(initialPrice){
    let total=quantity*initialPrice;
    dispatch(updateCart({quantity,total,id:item.id}))
    calculateTotal()

  }
}

  return (
    <div className='w-full h-[5rem] bg-white flex justify-between items-center px-2 md:px-4 rounded'>
    <img src={item.image} className='w-[3rem] object-cover' />
    <h3>{item.name}</h3>
    <div className='flex items-center justify-center'>
    <input type='number' className='itemsInput py-1 px-4' value={item.quantity} onChange={(e)=>setQuantity(e.target.value)} ></input>
    <h3 className='text-md px-4'>/{totalQuantity}</h3>
    </div>
    <div className='text-blue-800'>Rs {item.total}</div>
    <MdOutlineCancel className='cursor-pointer hover:text-customYellow text-[2rem]' onClick={()=>handleRemoveItem(item.id)}></MdOutlineCancel>
    </div>
  )
}

export default CartItem