import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../../data'
import Description from './Description'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/Slices/addToCartSlice';
import { GlobalContext } from '../../context'
import Toast from './Toast'
function Details() {
  const [details,setDetails]=useState({})
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState("")
  const {searchSidebar,setSearchSidebar}=useContext(GlobalContext)
  const [showToast,setShowToast]=useState(false)
    const dispatch=useDispatch()
    const {id}=useParams()
    const items=useSelector(state=>state.cart.cartItems)
const {setShowPopup}=useContext(GlobalContext)
 useEffect(()=>{ 
  handleShowDetails()
  setSearchSidebar(false)
  
    },[id])     
function handleShowDetails(){
  try{
  setLoading(true)
let itemData=data.filter(item=>item.id==id)
if(itemData){
  setDetails(itemData[0])
  setLoading(false)
}
  }
  catch(e){
    setLoading(false)
    setError("Something Went Wrong!!!")
  }
}
function handleAddToCart(details){

if(!isAlreadyPresentInCart()){
  dispatch(addToCart({image:details.image,name:details.name,price:details.price,id:details.id,quantity:1,totalQuantity:details.totalQuantity}))
  setShowToast(true)
}else{
  setShowPopup(true)
}

}

function isAlreadyPresentInCart(){
  return items.some(item => item.id === details.id);
}


if(loading)return <div>Loading...</div>
if(error)return <div>{error}</div>
  return (
   <React.Fragment>
   {searchSidebar?null: <div className='w-screen min-h-screen flex justify-start items-start flex-col py-8 relative top-[20vh]'>
   {showToast?<Toast></Toast>:null}
       <div className='w-screen min-h-[50vh] bg-white flex justify-center items-center gap-24 py-8 flex-col md:flex-row'>
   <img src={details.image} className='w-[30vw]  flex items-center justify-center bg-black'></img>
   
       <div className='w-[50%] h-[80vh] items-center justify-center flex-col '>
       <h2 className='w-full text-2xl relative font-semibold text-bgblack py-12 after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-customYellow after:bottom-4 after:right-0'>{details.name}</h2>
       <h3 className='text-md font-semibold'>Category: <span className='text-sm font-light'>{details.category}</span></h3>
       <h2 className='text-red-800 text-md flex gap-4'>Rs{details.onSale?<div className='flex gap-2'><span style={{textDecoration:"line-through"}}>{details.price}</span> {details.discountedPrice}</div>:details.price}</h2>   
       <div className='w-full h-[20%] flex justify-center items-center gap-8 '>
       <button className='w-[10rem] h-[3rem] flex items-center justify-center cursor-pointer bg-customYellow text-bgblack text-sm mt-4 rounded' onClick={()=>handleAddToCart(details)}>ADD TO CART</button>
       </div>
       </div>
       </div>
   
   <Description description={details.description}></Description>
   
   
   
       </div>}
   </React.Fragment>
  )
}

export default Details