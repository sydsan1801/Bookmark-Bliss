import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import { FaSignOutAlt } from 'react-icons/fa';
import {authActions} from "../../store/auth"
import { useDispatch, useSelector } from 'react-redux';


const Sidebar=({data})=>{
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const role=useSelector((state)=>state.auth.role);
  
  return (
    <div className='bg-zinc-800 p-4 rounded flex flex-col items-center justify-between h-auto lg:h-[100%]'>
      <div className='items-center justify-center flex flex-col'>
        <img src={data.avatar} alt="logo" className='h-[12vh] rounded-full' />
        <p className='mt-3 text-primary font-semibold text-xl'>{data.username}</p>
        <p className='mt-1 text-zinc-100 '>{data.email}</p>
        <div className='w-full mt-4 h-[1px] bg-zinc-500 hidden lg:block'></div>
      </div>

      {role==="user" && (
        <div className='w-full   flex-col items-center justify-center hidden lg:flex '>
        <Link to='/profile' className='text-zinc-100 font-semibold w-full py-2 text-center hover:bg-primary rounded transition-all'>
            Favourites
        </Link>

        <Link to='/profile/orderHistory' className='text-zinc-100 font-semibold w-full py-2 text-center hover:bg-primary  rounded transition-all'>
            Order History
        </Link>
        
        <Link to='/profile/settings' className='text-zinc-100 font-semibold w-full py-2 text-center hover:bg-primary  rounded transition-all'>
            Settings
        </Link>
      </div>
      )}

      


      {role==="admin" && (
        <div className='w-full flex-col items-center justify-center hidden lg:flex '>
        <Link to='/profile' className='text-zinc-100 font-semibold w-full py-2 text-center hover:bg-primary rounded transition-all'>
            All Orders
        </Link>

        <Link to='/profile/add-book' className='text-zinc-100 font-semibold w-full py-2 text-center hover:bg-primary  rounded transition-all'>
            Add Books
        </Link> 
      </div>
      )}
      <button className='bg-primary w-3/6 lg:w-full mt-4 lg:mt-0 text-white font-semibold flex items-center justify-center py-2 rounded hover:bg-white hover:text-primary transition-all text-center' onClick={()=>{
        dispatch(authActions.LogOut());
        dispatch(authActions.changeRole("user"));
        localStorage.clear("id");
        localStorage.clear("token");
        localStorage.clear("role");
        navigate("/")
      }}>
        Log Out <FaSignOutAlt className='ms-4 ' />
      </button>
    </div>
  )
}

export default Sidebar
