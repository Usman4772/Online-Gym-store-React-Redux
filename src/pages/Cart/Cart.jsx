import React, { useEffect, useState ,useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GlobalContext } from '../../context';
import CartItem from './CartItem';
import { clearCart } from '../../redux/Slices/addToCartSlice';
import { calculateRemainingQuantity } from '../../redux/Slices/filterItems';
function Cart() {
  const [total,setTotal]=useState(0)
  const {searchSidebar}=useContext(GlobalContext)
  const items=useSelector(state=>state.cart.cartItems)
  const dispatch=useDispatch()
useEffect(()=>{
  if(items.length<=0){
    setTotal(0)
  }
})

useEffect(()=>{
  if(items.length>0){
  calculateCartTotal()
}
},[])
function calculateCartTotal(){
  let res=items.reduce((total,item)=>{
  total+=item.total
  return total
  },0)
  setTotal(res)
}
  
function handleCheckout(){
  if(items.length>0){
    dispatch(clearCart())

items.forEach(item=>{ 
dispatch(calculateRemainingQuantity({id:item.id,quantity:item.quantity}))
})

    alert("Thanks for purchasing your total bill was :Rs:"+total )
  }else{
    alert("Please Add something to cart first")
  }


}
  return (
    <div>
{searchSidebar?null:  <div className='w-screen min-h-screen flex justify-start items-start py-8  flex-col gap-8 bg-gray-50 relative top-[20vh]'>
<h1 className='font-semibold text-[#0c0c0c] text-3xl font-mono px-12 w-full flex justify-center md:justify-start'>Shopping cart</h1>
<div className='w-screen min-h-max flex justify-center items-center md:justify-start md:items-start  py-8 gap-12  px-12 bg-white flex-col md:flex-row' style={{boxShadow:"0 0 2px black"}}>
<div className=' w-screen md:w-[70vw] min-h-max py-8 flex justify-start items-start flex-col bg-gray-100 md:px-4 gap-4 rounded-lg'>
{items && items.length>0?items.map((item,i)=><CartItem key={i+7} item={item}  calculateTotal={calculateCartTotal}/>):<div className='w-full h-full flex justify-center items-center'>No Items Found</div>}
</div>
<div className=' w-full md:w-[20vw] h-[15rem] relative  flex justify-start items-center py-4 flex-col gap-8 rounded-lg' style={{boxShadow:"0 0 1px black"}}>
<h1 className='font-semibold font-sans text-xl'>Cart Totals </h1>

<div className='text-red-800'>Rs :{total}</div>
<button className='py-2 px-4 rounded bg-customYellow absolute bottom-4 cursor-pointer text-sm text-gray-800' onClick={handleCheckout}>CHECKOUT</button>

</div>
</div>
    </div>}
    </div>
  )
}

export default Cart