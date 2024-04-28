import React, { useContext, useEffect, useState } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import { ArrowLeftOutlined } from '@ant-design/icons'
import HomeItems from './HomeItems'
import Footer from '../../components/Footer'
import { GlobalContext } from '../../context'
import FeatureProducts from './FeatureProducts'

let images=[
    {
url:'https://fitnessdepot.pk/wp-content/uploads/2020/09/website-banner-women-cardio.jpg',
id:1
},
    {
url:'https://fitnessdepot.pk/wp-content/uploads/2020/09/Old-1-Copy.jpg',
id:2
},
    {
url:'https://fitnessdepot.pk/wp-content/uploads/2020/09/website-banner-upright-bike.jpg',
id:3
},
    {
url:'https://fitnessdepot.pk/wp-content/uploads/2020/09/website-banner-tradmill.jpg',
id:4
}
]
function Home() {
const [currentIndex,setCurrentIndex]=useState(1)
const {searchSidebar}=useContext(GlobalContext)
function handleNext(){
    if(currentIndex<images.length){
        setCurrentIndex(prev=>prev+1)
    }else{
        setCurrentIndex(1)
    }
}
function handlePrevious(){
    if(currentIndex!==1){
        setCurrentIndex(prev=>prev-1)
    }else{
        setCurrentIndex(images.length)
    }
}
useEffect(()=>{
 let interval= setInterval(()=>{
        if(currentIndex<images.length){

            handleNext()
        }else{
            setCurrentIndex(1)
        }
    },3000)

 return ()=>{
    clearInterval(interval)
 }   
})
  return (
<div>
{searchSidebar?null:<div className='w-screen min-h-screen flex items-center justify-center flex-col relative top-[15vh] md:top-[20vh] gap-12'>   
<div className='w-full h-[50vh] md:h-[80vh] bg-bgblack flex items-center justify-between px-16 relative '>
<ArrowLeftOutlined className='text-white md:text-3xl text-md' onClick={handlePrevious}></ArrowLeftOutlined>
{images.map(image=>{
    return <img src={image.url} id={image.id} className={currentIndex===image.id?"block w-[80%] md:w-[50%]":"hidden"} key={image.id}></img>
   })}
   <ArrowRightOutlined className='text-white  text-md md:text-3xl' onClick={handleNext}></ArrowRightOutlined>
   <div className='absolute bottom-24 md:left-2/4 left-[40%]  flex gap-4 justify-center'>{images.map((_,index)=>{
   return  <div className='w-3 h-3 rounded-[50%] bg-gray-600 cursor-pointer' style={currentIndex==index+1?{backgroundColor:"yellow"}:{backgroundColor:"gray"}} key={index} onClick={()=>setCurrentIndex(index+1)}></div>
   })}</div>


</div>

<HomeItems></HomeItems>
<FeatureProducts></FeatureProducts>
<Footer></Footer>
</div>}
</div>
  )
}

export default Home