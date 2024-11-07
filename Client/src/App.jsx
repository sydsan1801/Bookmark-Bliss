
// import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home.jsx'
import AllBooks from './pages/AllBooks.jsx'
import LogIn from './pages/LogIn'
// import './App.css'
import {Routes,Route} from "react-router-dom"
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import ViewBookDetails from './components/View-Book-Details/ViewBookDetails.jsx'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from './store/auth.js'
import Favourites from './components/Profile/Favourites.jsx'
import UserOrderHistory from './components/Profile/UserOrderHistory.jsx'
import Settings from './components/Profile/Settings.jsx'
import AllOrders from './pages/Admin/AllOrders.jsx'
import AddBooks from './pages/Admin/AddBooks.jsx'
import UpdateBook from './pages/Admin/UpdateBook.jsx'
// import VerifyOtp from './pages/VerifyOtp.jsx'
import { UserProvider } from '../context/userContext.jsx'
import AboutUs from './pages/AboutUs.jsx'
function App() {
  const dispatch=useDispatch();
  const role=useSelector((state)=>state.auth.role)
  useEffect(()=>{
    if(
      localStorage.getItem("id")&&
      localStorage.getItem("token")&&
      localStorage.getItem("role")
    ){
      dispatch(authActions.login())
      dispatch(authActions.changeRole(localStorage.getItem("role")))
    }
  },[])
  return (
    <>
   
    <Navbar/>
    <UserProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all-books' element={<AllBooks/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>

        <Route path='/profile' element={<Profile/>}>
          {role==="user" ? (<Route index element={<Favourites/>}/>) : (<Route index element={<AllOrders/>}/>)}
          
          {role==="admin" && (<Route path='/profile/add-book' element={<AddBooks/>}/>)}
          <Route path='/profile/orderHistory' element={<UserOrderHistory/>}/>
          <Route path='/profile/settings' element={<Settings/>}/>
        </Route>

        <Route path='/update-book/:id' element={<UpdateBook/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/view-book-details/:id' element={<ViewBookDetails/>}/>
        {/* <Route path='/verify-otp' element={<VerifyOtp/>}/> */}
      </Routes>
      </UserProvider>
    <Footer/>

      
      
      
      
    </>
  )
}

export default App
