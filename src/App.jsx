import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'
import Details from './pages/Details/Details'
import Contact from './pages/Contact-us/Contact-us'
import {Routes,Route} from "react-router-dom"
import About from './pages/About/About'
import { useContext } from 'react'
import { GlobalContext } from './context'
import Toast from './pages/Details/Toast'
import SearchedCart from './components/SearchedCart'
import Menu from './components/Menu'
import Popup from './pages/Details/Popup'

function App() { 
  const {searchSidebar}=useContext(GlobalContext)
  const {showMenu}=useContext(GlobalContext)
  const {showPopup}=useContext(GlobalContext)


 return (
  <div className='min-h-max relative'>
  <Nav></Nav>
  {searchSidebar?<SearchedCart></SearchedCart>:null}
{showMenu?<Menu></Menu>:null}
{showPopup?<Popup></Popup>:null}
<Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route path="/shop" element={<Shop></Shop>}></Route>
<Route path='/about' element={<About></About>}></Route>
<Route path="/cart" element={<Cart></Cart>}></Route>
<Route path="/details/:id" element={<Details></Details>}></Route>
<Route path="/contact-us" element={<Contact></Contact>}></Route>
<Route path="/toast" element={<Toast></Toast>}></Route>
</Routes>
  </div>
 )
}

export default App
