import React, { useContext } from 'react'
import { MdCancel } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../context'
import { clearAll } from '../redux/Slices/searchSlice'

function SearchedCart() {
  const searchedItems=useSelector(state=>state.searchFilter.items)  
  const {setSearchSidebar}=useContext(GlobalContext)
  const dispatch=useDispatch()

  return (
    <div className='w-screen h-screen bg-[#22222276] relative'>
    <div className=' w-full md:w-[30vw] h-[80vh] absolute right-0 top-[20vh] bg-white flex items-center justify-start flex-col py-8 gap-3'>
    <div className='w-full h-[20%] relative flex justify-between items-center px-8 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-customYellow'>
    <button className='bg-customYellow text-black py-1 px-3 cursor-pointer rounded' onClick={()=>dispatch(clearAll())}>Clear All</button>
    <h2 className='font-semibold text-md'>Searched Results</h2>
    <MdCancel className='cursor-pointer' onClick={()=>setSearchSidebar(false)}/>
    </div>
    <div className='w-full h-[100%]  overflow-scroll flex items-start justify-start flex-col gap-4 py-5'>
{searchedItems && searchedItems.length>0?searchedItems.map((item,i)=>{
    return <NavLink key={i} to={`/details/${item.id}`} onClick={()=>dispatch(clearAll())}>
    <div className='w-full h-[15%] flex items-center justify-between px-4'>
  <img src={item.image} className='w-[3rem]'/>
  <h3>{item.name}</h3>
    </div>
    </NavLink>
}):<div className='w-full h-full flex justify-center items-center'>No Search Results Found</div>}
    </div>
    
    
    </div>
    
    </div>
  )
}

export default SearchedCart