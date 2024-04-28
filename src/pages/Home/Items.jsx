import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Items() {

  const filteredItems=useSelector(state=>state.homeFilteredItems.items)
    return (
    <div className='w-screen flex py-8 h-max flex-col items-center justify-center'>
    <div className='w-screen min-h-[50vh] flex items-center justify-center gap-4 flex-wrap '>
    {
        filteredItems.map((item,i)=>{
            return <NavLink to={`/details/${item.id}`} key={i} >
            <div className='w-[200px] md:w-[300px] h-[220px] flex items-center gap-2 justify-start flex-col cursor-pointer hover:text-customYellow overflow-hidden relative' >
{item.onSale?<div className='w-[4rem] h-[4rem] bg-customYellow flex items-center justify-center text-black absolute right-0 top-0 text-center' style={{borderRadius:"50%"}}>Sale {item.discount}%</div>:null}
            <img src={item.image} className='h-[50%] md:w-[50%]  object-contain rounded-lg'></img>
            <h3 className='w-full break-words text-center' >{item.name}</h3>
            <h2 className='text-red-800 text-md flex gap-4'>Rs{item.onSale?<div className='flex gap-2'><span style={{textDecoration:"line-through"}}>{item.price}</span> {item.discountedPrice}</div>:item.price}</h2>             
            <h3 className='text-md text-red-800'><span className='font-semibold text-black'>Quantity:</span> {item.totalQuantity}</h3>
            </div>
            </NavLink>
        })
    }
    </div>
    <button className='py-3 px-6 mb-8 flex justify-center items-center rounded bg-[#e2e3dfd4] text-bgblack hover:bg-customYellow  cursor-pointer absolute bottom-[-3rem]'><NavLink to={"/shop"}>Shop All</NavLink></button>
    </div>
  )
}

export default Items