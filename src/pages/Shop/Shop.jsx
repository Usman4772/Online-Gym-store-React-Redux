import React, { useContext,useRef,useEffect, useState } from 'react'
import ShopItems from './ShopItems';
import { GlobalContext } from '../../context';
import { useDispatch, useSelector } from 'react-redux';
import { filterItems, handleFilterAll } from '../../redux/Slices/filterItems';
import RangeSlider from '../../components/RangeSlider';



function Shop() {
  const filterTabsRef=useRef(null)
  const products=useSelector(state=>state.products)
  const uniqueCategories = [...new Set(products.map(item => item.category))];
  const [category,setCategory]=useState("all")
  const {searchSidebar}=useContext(GlobalContext)
  const dispatch=useDispatch()


  useEffect(()=>{
    filterTabsRef.current.firstElementChild.classList.add("selected")

  },[])

function handleFilterStyles(target){
    const allChildren=Array.from(filterTabsRef.current.children);
    allChildren.forEach(child=>{
      if(child.textContent.toLocaleLowerCase()===target.textContent.toLocaleLowerCase()){
        child.classList.add("selected")
      }else{
        child.classList.remove("selected")
      }
    })

  }
  function handleFilterShopItems(category,e){
    setCategory(category)
dispatch(filterItems(category))
  //setting Class
    let target=e.target
handleFilterStyles(target)



  }
  function handleAllItems(category,e){

    setCategory(category)
    handleFilterStyles(e.target)
    dispatch(handleFilterAll())
  }
return (
   <div>
   {searchSidebar?null: 
    <div className='w-screen min-h-screen flex justify-start items-start px-8 py-8 relative top-[15vh] md:top-[20vh]'>
   <div className='w-[40%] md:w-[20%] z-40 h-max flex items-start justify-start py-8 flex-col gap-1 sticky top-[20vh]'>
   <div className='w-full h-max flex items-start justify-start py-8 flex-col gap-4'>
   <h2 className='text-xl font-semibold '>Product Categories</h2>
   <div className='w-full h-[50%] flex justify-center items-start flex-col gap-4' ref={filterTabsRef}>
   <button className='selected' onClick={(e)=>handleAllItems("all",e)}>All ({products.length})</button>
   {
     uniqueCategories.map((category,i)=>{
       return <button key={i} className='hover:text-customYellow' onClick={(e)=>handleFilterShopItems(category,e)}>{category}</button>
     })
   }    
   </div>
   </div>
<div className='w-full h-max flex items-center justify-center px-4 flex-col'>
<h2 className='text-md font-semibold '>Filter by Price:</h2>
<RangeSlider category={category}></RangeSlider>
   </div>
   </div> 
<ShopItems ></ShopItems>
   </div>}

   </div>

  )
}

export default Shop