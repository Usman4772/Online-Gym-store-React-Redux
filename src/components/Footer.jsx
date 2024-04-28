import React from 'react'
import { InstagramOutlined } from '@ant-design/icons'
import { FacebookOutlined } from '@ant-design/icons'
import { GithubOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className='w-screen h-max py-8 flex justify-center items-center gap-8 mt-12 bg-bgblack text-white flex-wrap'>
    <div className='w-[30%] h-full flex items-center justify-center gap-4 flex-col'>
    <h1 className='text-xl font-semibold text-white'>Contact Us</h1>
    <h2 className='text-gray-500 w-full flex items-center justify-center gap-2'>Address:1st Floor, Shan Centre, 30-C, South Park Avenue, Phase 2 Extension, DHA, Karachi, Pakistan - 75500</h2>
    <h2 className='text-gray-500 w-full flex items-center justify-center gap-2'>Phone:<span className='text-customYellow'>0920087390</span></h2>
    <h2 className='text-gray-500 w-full flex items-center justify-center gap-2'>Email:<span className='text-customYellow'>email@gmail.com</span></h2>
    
    </div>
    <div className='w-[30%] h-full flex items-center justify-center gap-4 flex-col'>
    <h1 className='text-xl font-semibold text-white'>Follow Us</h1>
    <NavLink className='w-full flex gap-2 items-center justify-center text-gray-400' to={"https://github.com/Usman4772"}><GithubOutlined></GithubOutlined><span>Github</span></NavLink>
    <NavLink className='w-full flex gap-2 items-center justify-center text-gray-400' to={"https://www.facebook.com/usmam.usman.7165"}><FacebookOutlined></FacebookOutlined><span>Facebook</span></NavLink>
    <NavLink className='w-full flex gap-2 items-center justify-center text-gray-400' to={"https://www.instagram.com/mani________47/"} ><InstagramOutlined></InstagramOutlined>Instagram</NavLink>
    
    </div>
    <div className='w-[30%] h-full flex items-center justify-center gap-4 flex-col'>
   <h1 className='text-xl font-semibold text-white '>SUBSCRIBE TO OUR NEWSLETTER</h1>
<div className='w-full flex items-center justify-center flex-col gap-2'>
<input type='email' className='w-[80vw] sm:w-full h-[7vh] px-4 rounded' placeholder='Enter your email...'></input>
<button className='w-[80vw] sm:w-full py-2 flex items-center justify-center bg-customYellow text-bgblack'>SUBSCRIBE</button>
</div>
    
    </div>

    </div>
  )
}

export default Footer