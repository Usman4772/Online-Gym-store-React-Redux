import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
function ShopItems() {
  const filteredItems=useSelector(state=>state.filteredItems.items)
  return (
    <div className='w-[80%] min-h-[100vh] flex justify-center items-center flex-wrap gap-8'>
    {filteredItems.length>0?filteredItems.map((item,i)=>{
        return <NavLink to={`/details/${item.id}`} key={i}>
        <div className=' w-[200px]  md:w-[300px] md:h-[300px] flex items-center gap-2 justify-start flex-col cursor-pointer hover:text-customYellow overflow-hidden relative'>
        {item.onSale?<div className='w-[4rem] h-[4rem] bg-customYellow flex items-center justify-center text-black absolute right-0 top-0 text-center' style={{borderRadius:"50%"}}>Sale {item.discount}%</div>:null}
        <img src={item.image} className='h-[80%] md:h-[50%] w-full object-contain rounded-lg'></img>
        <h3 className='w-full break-words text-center' >{item.name}</h3>
        <h2 className='text-red-800 text-md flex gap-4'>Rs{item.onSale?<div className='flex gap-2'><span style={{textDecoration:"line-through"}}>{item.price}</span> {item.discountedPrice}</div>:item.price}</h2>            
        <h3 className='text-md text-red-800'><span className='font-semibold text-black'>Quantity:</span> {item.totalQuantity}</h3>
        </div>
        </NavLink>}):<div>No Items Found</div>}
 
    
    </div>
  )
}

export default ShopItems