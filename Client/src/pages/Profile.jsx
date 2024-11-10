import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Profile/Sidebar'
import {Outlet} from "react-router-dom"
import axios from "axios"
import Loader from '../components/Loader/Loader'
import MobileNav from '../components/Profile/MobileNav'
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const Profile = () => {
  const [Profile,setProfile]=useState()
  const headers={
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,
  }
  useEffect(()=>{
    const fetch = async () => {
      try {
        const response = await axios.get("https://bookmark-bliss.vercel.app/api/v1/get-user-information", { headers });
        // console.log(response.data);
        setProfile(response.data)

      } catch (error) {
        toast.error("Error fetching user information:", error);
      }
    };
    fetch()
  },[])
  return (
    <div className='bg-zinc-900 px-2 py-8 md:px-12 flex flex-col md:flex-row  gap-4 text-white'>
      {!Profile && <div className='w-full h-[100%] flex items-center justify-center'><Loader/></div>}
      {Profile && (
        <>
      <div className='w-full md:w-1/6 h-auto  lg:h-screen'>
        <Sidebar data={Profile}/>
        <MobileNav/>
      </div>
      <div className='w-full md:w-5/6'>
        <Outlet/>
      </div>
      </>
      )}
      <ToastContainer/>
    </div>
  )
}

export default Profile