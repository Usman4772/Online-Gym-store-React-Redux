import React, { useEffect, useState } from 'react'
import { CheckCircleFilled } from '@ant-design/icons'
import { MdOutlineCancel } from "react-icons/md";
// 2BDE3F

function Toast() {
  const [showToast,setShowToast]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
setShowToast(false)
    },2000)
  })
  return (
    <div>
{showToast?<div className=' w-full md:w-[30vw] min-h-[20vh] flex items-center justify-start py-8 flex-col gap-4  absolute right-0 top-0 z-40'>
<div className={showToast?"toast show":"toast"} style={{boxShadow:"0 0 2px black"}}>
<CheckCircleFilled className='text-[#2BDE3F] text-2xl'/>
<div>
<h3 className='text-md font-semibold'>Success</h3>
<p className='text-sm text-gray-600'>Item Successfully Added</p>
</div>
<MdOutlineCancel className='text-xl cursor-pointer' onClick={()=>setShowToast(false)}></MdOutlineCancel>
</div>
</div>:null}
</div>
  )
}

export default Toast