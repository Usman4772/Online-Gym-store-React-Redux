import { createContext, useReducer, useState } from "react";

export const GlobalContext=createContext(null)

export default function GlobalContextWrapper({children}){
 const [searchBox,setSearchBox]=useState(false)
 const [homeItems,setHomeItems]=useState([])
const [shopItems,setShopItems]=useState([])
const [quantity,setQuantity]=useState(1)
const [searchData,setSearchData]=useState(null)
const [searchSidebar,setSearchSidebar]=useState(false)
const [showMenu,setShowMenu]=useState(false)
const [showPopup,setShowPopup]=useState(false)




 return <GlobalContext.Provider value={{searchBox,setSearchBox,homeItems,setHomeItems,shopItems,setShopItems,quantity,setQuantity,searchData,setSearchData,searchSidebar,setSearchSidebar,showMenu,setShowMenu,showPopup,setShowPopup}}>{children}</GlobalContext.Provider>
}


