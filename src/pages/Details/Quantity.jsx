import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import { PlusOutlined } from '@ant-design/icons'
import { MinusOutlined } from '@ant-design/icons'

function Quantity() {
    const {quantity,setQuantity}=useContext(GlobalContext)
  return (
    <div className='flex items-center justify-center'>
    <MinusOutlined className='w-[2rem] h-[33px] cursor-pointer flex items-center justify-center hover:bg-customYellow hover:text-white' style={{border:"1px solid black"}} onClick={()=>setQuantity(prev=>prev-1)}/>
    <input type='number' className='itemsInput py-1 px-4' value={quantity} onChange={(e)=>setQuantity(e.target.value)}></input>
    <PlusOutlined className='w-[2rem] h-[33px] flex items-center justify-center cursor-pointer hover:bg-customYellow hover:text-white' style={{border:"1px solid black"}} onClick={()=>setQuantity(prev=>prev+1)}/>
    </div>
  )
}

export default Quantity