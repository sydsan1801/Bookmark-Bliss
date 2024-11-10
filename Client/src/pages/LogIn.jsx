import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {authActions} from "../store/auth"
import { useDispatch } from 'react-redux';
const Login = () => {
  const [Values,setValues]=useState({
    username:"",
    password:"",
  })
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const submit=async()=>{
    try{
      if (Values.username==="" || Values.password===""){
        toast.error("All fields are required")
      }
      
        const response=await axios.post("https://bookmark-bliss.vercel.app/sign-in",Values);
        toast.success(response.data.message)
        navigate("/")
        // console.log(response.data.data)
        dispatch(authActions.login())
        dispatch(authActions.changeRole(response.data.data.role))
        localStorage.setItem("id",response.data.data.id)
        localStorage.setItem("token",response.data.data.token)
        localStorage.setItem("role",response.data.data.role)
        
    }
 
    catch (error) {
      // Check if error.response is defined to avoid accessing undefined properties
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        // Handle unexpected errors
        toast.error("An unexpected error occurred. Please try again later.");
      }
    }
  }

  const change=(e)=>{
    const {name,value}=e.target
    setValues({...Values,[name]:value})
  }
  return (
    <div className='min-h-screen  px-12 py-8 bg-zinc-900  flex items-center justify-center '>
      <div className='bg-zinc-800 rounded-lg px-8 w-full md:w-3/6 lg:w-2/6 '>
      <p className='text-zinc-200 text-2xl font-semibold mt-4 text-center'>Login</p>
        <div className='mt-4'>
          <div>
            <label htmlFor="" className='text-zinc-400 '>Username</label>
            <input type="text" className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' placeholder='username' name='username' required value={Values.username} onChange={change}/>
          </div>

          <div className='mt-4'>
            <label htmlFor="" className='text-zinc-400'>Password</label>
            <input type="password" className='w-full mt-2 p-2 bg-zinc-900 text-zinc-100 outline-none' placeholder='Password' name='password' required value={Values.password} onChange={change}/>
          </div>
     
          <div className='mt-4'>
            <button className='w-full bg-blue-500 text-white font-semibold py-2 rounded  active:scale-90 transition-all duration-300 transform' onClick={submit}>Login</button>
          </div>

          <p className='text-zinc-500 flex items-center justify-center mt-4 font-semibold mb-4'>Dont have an account ? &nbsp;
            <Link to='/SignUp' className="hover:text-blue-500">
              <u>SignUp</u>
            </Link>
            
          </p>
        </div>
        </div>
        <ToastContainer/>
    </div>

  )
}

export default Login

