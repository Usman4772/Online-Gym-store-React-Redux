import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
function FeatureProducts() {
  const items=useSelector(state=>state.featured)

  return (
    <div >
    <div className='w-screen flex py-8 h-max flex-col items-center justify-center gap-4'>
    <h1 className='text-4xl font-bold'>Featured Now</h1>
    <div className='w-screen min-h-[50vh] flex items-center justify-center gap-2 md:gap-4 flex-wrap '>
    {
        items.items && items.items.length>0?items.items.map((item,i)=>{
            return <NavLink to={`/details/${item.id}`} key={i} >
            <div className='w-[250px] md:w-[300px] h-[240px] flex items-center gap-2 justify-start flex-col cursor-pointer hover:text-customYellow overflow-hidden relative'>
{item.onSale?<div className='w-[4rem] h-[4rem] bg-customYellow flex items-center justify-center text-black absolute right-0 top-0 text-center' style={{borderRadius:"50%"}}>Sale {item.discount}%</div>:null}
            <img src={item.image} className='h-[50%] w-[50%] object-contain rounded-lg'></img>
            <h3 className='w-full break-words text-center' >{item.name}</h3>
            <h2 className='text-red-800 text-md flex gap-4'>Rs{item.onSale?<div className='flex gap-2'><span style={{textDecoration:"line-through"}}>{item.price}</span> {item.discountedPrice}</div>:item.price}</h2>             
            </div>
            </NavLink>
        })
   :null}
    </div>
    </div>
    </div>
  )
}

export default FeatureProducts