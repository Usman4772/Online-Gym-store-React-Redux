import React, { useContext, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { filterSearchItems } from "../redux/Slices/searchSlice";
import { HiMenuAlt1 } from "react-icons/hi";

function Nav() {
  const [searchValue,setSearchValue]=useState("")
  const { searchBox, setSearchBox } = useContext(GlobalContext);
  const {setSearchSidebar}=useContext(GlobalContext)
  const dispatch=useDispatch()
  const items=useSelector(state=>state.cart.cartItems)
  const {setShowMenu}=useContext(GlobalContext)
  function handleSearchItems(value,e){
    e.preventDefault()
 if(value=="")return
dispatch(filterSearchItems(value))
  setSearchSidebar(true)
  setSearchValue("")
  }
  return (
    <div className="w-screen h-[15vh] md:h-[20vh] bg-bgblack flex justify-between px-4 md:px-16 items-center fixed top-0 z-50">
      <img
        src="https://fitnessdepot.pk/wp-content/uploads/2020/06/logo-04-05.png"
        className="w-[5rem] md:w-[14rem]"
      ></img>
      <ul className="w-6/12 h-full md:flex items-center justify-center gap-12 text-white hidden ">
        <NavLink className="cursor-pointer hover:text-customYellow" to={"/"}>
          Home
        </NavLink>
        <NavLink
          className="cursor-pointer hover:text-customYellow"
          to={"/shop"}
        >
          Shop
        </NavLink>
        <NavLink
          className="cursor-pointer hover:text-customYellow"
          to={"/about"}
        >
          About Us
        </NavLink>
        <NavLink
          className="cursor-pointer hover:text-customYellow"
          to={"/contact-us"}
        >
          Contact Us
        </NavLink>
      </ul>
      <div className="text-white flex justify-center items-center gap-8 md:gap-4 text-2xl">
      {/*show hide SearchBox*/}
        {searchBox ? (
          <div className="w-[15rem] md:w-[20rem] relative flex items-center justify-center gap-2 me-4 ">
            <form className="relative flex items-center justify-center gap-4" onSubmit={(e)=>handleSearchItems(searchValue,e)}>
              <input
                type="text"
                className="w-52 h-[5vh] px-4 rounded text-sm text-black pe-8"
                placeholder="Search here..."
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
              ></input>
              <button className="cursor-pointer absolute right-2 text-sm text-black"  type="submit"><SearchOutlined ></SearchOutlined></button>
              
            </form>
            <MdOutlineCancel
              className="text-white  cursor-pointer hover:text-customYellow"
              onClick={() => {
                setSearchBox(false)
                setSearchSidebar(false)
              }}
            ></MdOutlineCancel>
          </div>
        ) : (
          <SearchOutlined
            className="cursor-pointer "
            onClick={() =>{
              setSearchBox((prev) => !prev)
              setSearchSidebar(true)
            }}
          ></SearchOutlined>
        )}

      {searchBox?null:  <div className="relative">
      <div className="absolute w-4 h-4 bg-customYellow flex justify-center items-center top-[-4px] right-[-4px] text-sm text-black">
        {items.length}
      </div>
      <NavLink to={"/cart"}>
      <ShoppingCartOutlined
        className="cursor-pointer"
      ></ShoppingCartOutlined>
      </NavLink>
    </div>}
       {searchBox?null: <HiMenuAlt1 className="text-2xl md:hidden" onClick={()=>setShowMenu(prev=>!prev)} />}
      </div>
  

    </div>
  );
}

export default Nav;
