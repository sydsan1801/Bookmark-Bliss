import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [Values,setValues]=useState({username:"",email:"",password:"",passwordConfirm:"",address:""})

  const navigate=useNavigate();
  const change=(e)=>{
    const {name,value}=e.target;
    setValues({...Values,[name]:value})
  }

  const submit=async()=>{
    try{
      if(Values.username==="" || Values.password==="" || Values.passwordConfirm==="" || Values.address===""){
        toast.error("All fields are required")
      }
      else{
        const response=await axios.post("https://bookmark-bliss.vercel.app/api/v1/sign-up",Values)
        toast.success(response.data.message);
        navigate("/Login")
      }
    }
     catch(error){
      toast.error(error.response.data.message)
    }
  }
  return (
    <div className='px-12 py-8 bg-zinc-900 h-auto flex items-center justify-center '>
      <div className='bg-zinc-800 rounded-lg px-8 w-full md:w-3/6 lg:w-2/6 '>
      <p className='text-zinc-200 text-2xl font-semibold mt-4 text-center'>Sign Up</p>
        <div className='mt-4'>
          <div>
            <label htmlFor="" className='text-zinc-400 '>Username</label>
            <input type="text" className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' placeholder='username' name='username' required value={Values.username} onChange={change}/>
          </div>

          <div className='mt-4'>
            <label htmlFor="" className='text-zinc-400 '>Email</label>
            <input type="email" className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' placeholder='Email' name='email' required value={Values.email} onChange={change}/>
          </div>

          <div className='mt-4'>
            <label htmlFor="" className='text-zinc-400'>Password</label>
            <input type="password" className='w-full mt-2 p-2 bg-zinc-900 text-zinc-100 outline-none' placeholder='Password' name='password' required value={Values.password} onChange={change}/>
          </div>

          <div className='mt-4'>
            <label htmlFor="" className='text-zinc-400'>Confirm Password</label>
            <input type="password" className='w-full mt-2 p-2 bg-zinc-900 text-zinc-100 outline-none' placeholder='Confirm Password' name='passwordConfirm' required value={Values.passwordConfirm} onChange={change}/>
          </div>

          <div className='mt-4'>
            <label htmlFor="" className='text-zinc-400'>Address</label>
            <textarea type="text" row='5' className='w-full mt-2 p-2 bg-zinc-900 text-zinc-100 outline-none' name="address" placeholder='Address' required value={Values.address} onChange={change}/>
          </div>

          <div className='mt-4'>
            <button className='w-full bg-blue-500 text-white font-semibold py-2 rounded  active:scale-90 transition-all duration-300 transform' onClick={submit}>SignUp</button>
          </div>

          <p className='text-zinc-500 flex items-center justify-center mt-4 font-semibold mb-4'>Already have an account ? &nbsp;
            <Link to='/login' className="hover:text-blue-500">
              <u>LogIn</u>
            </Link>
            <ToastContainer/>
          </p>
        </div>
        </div>
    </div>
  )
}

export default SignUp