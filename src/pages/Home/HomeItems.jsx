import React, { useEffect,useRef } from 'react'
import Items from './Items';

import { useDispatch, useSelector } from 'react-redux';
import { filterAll, filterHomeitems } from '../../redux/Slices/filterHomeItems';

function HomeItems() {
  const filterTabsRef=useRef(null)
  const products=useSelector(state=>state.products)
  const uniqueCategories = [...new Set(products.map(item => item.category))];
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
  function handleFilterHomeItems(category,e){
dispatch(filterHomeitems(category))
    //setting Class
 let target=e.target
handleFilterStyles(target)



  }
  function handleAllItems(e){
    handleFilterStyles(e.target)
  dispatch(filterAll())
  }
  return (
    <div className='w-screen min-h-[100vh] py-12 flex items-center justify-center flex-col gap-12 relative mt-4'>
    <h1 className='text-4xl font-bold'>Our Products</h1>
    <div className='w-screen h-[5%] flex items-center justify-center gap-8 ' ref={filterTabsRef}>
    <button className='' onClick={handleAllItems}>All</button>
    {
      uniqueCategories.map((category,i)=>{
        return <button key={i} className='hover:text-customYellow md:text-[16px] text-[10px]' onClick={(e)=>handleFilterHomeItems(category,e)}>{category}</button>
      })
    }    
    </div>
    <Items></Items>
    </div>
  )
}

export default HomeItems