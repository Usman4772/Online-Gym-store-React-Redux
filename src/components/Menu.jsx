import React from 'react'
import { MdCancel } from 'react-icons/md'
import { useContext } from 'react'
import { GlobalContext } from '../context'
import { NavLink } from 'react-router-dom'


function Menu() {
    const {setShowMenu}=useContext(GlobalContext)
  return (
    <div className='w-[100vw] h-[55vh] z-50 bg-white fixed  top-[15vh] left-0 flex items-center justify-center flex-col gap-4 text-xl'>
    <MdCancel className='absolute right-4 top-4 text-2xl cursor-pointer ' onClick={()=>setShowMenu(false)}></MdCancel>
    <NavLink className='list-none relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-customYellow' to={"/"}  onClick={()=>setShowMenu(false)}>Home</NavLink>
    <NavLink className='list-none relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-customYellow' to={"/shop"} onClick={()=>setShowMenu(false)}>Shop</NavLink>
    <NavLink className='list-none relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-customYellow' to={"/about"} onClick={()=>setShowMenu(false)}>About us</NavLink>
    <NavLink className='list-none relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-customYellow' to={"/contact-us"} onClick={()=>setShowMenu(false)}>Contact Us</NavLink>
    </div>
  )
}

export default Menu