import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loader from '../Loader/Loader'
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Settings = () => {
  const [Value,SetValue]=useState({address:""})
  const [ProfileData,SetProfileData]=useState()
  const headers={
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`
  }
  const change=(e)=>{
    const {name,value}=e.target;
    SetValue({...Value,[name]:value})
  }

  useEffect(()=>{
  const fetch=async()=>{
    const response=await axios.get("http://localhost:1000/api/v1/get-user-information",{headers})
    // console.log(response)
    SetProfileData(response.data)
    // update Address 
    SetValue({address:response.data.address});
  }
  fetch()
  },[])


  const submitAddress=async()=>{
    try{
      const response=await axios.put("http://localhost:1000/api/v1/update-address",{Value},{headers})
      toast.success(response.data.message)
    }
    catch(error){
      if(response.error){
        toast.error(response.error.data.message)
      }
    }
  }

  return (
    <>
      {!ProfileData && <div className='h-[100%] flex  items-center justify-center '><Loader/></div>}
      {ProfileData && (
        <div className='h-[100%] p-0 md:p-4 text-zinc-100'>
          <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-3'>Settings</h1>

          <div className='flex gap-12'>
            <div className=''>
              <label htmlFor="">Username</label>
              <p className='p-2 rounded bg-zinc-800 mt-2 font-semibold'>{ProfileData.username}</p>
            </div>

            <div className=''>
              <label htmlFor="">Email</label>
              <p className='p-2 rounded bg-zinc-800 mt-2 font-semibold'>{ProfileData.email}</p>
            </div>

          </div>

          <div className='mt-4 flex flex-col'>
              <label htmlFor="Address"></label>
              < textarea name="address" rows='7' className='p-2 rounded bg-zinc-800 mt-2 font-semibold' value={Value.address} onChange={change}/>
          </div>

          <div className='mt-4 flex justify-end'>
            <button className='bg-primary text-zinc-900 font-semibold px-3 py-2 rounded hover:bg-yellow-300 active:scale-90 transition-all transform duration-300' onClick={submitAddress}>
              Update
            </button>
          </div>
          <ToastContainer/>
        </div>
      )}

    </>

  )
}

export default Settings