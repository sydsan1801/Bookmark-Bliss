import React, { useEffect, useState } from 'react'
import axios from "axios"
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader/Loader'
import { FaUserLarge } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import SeeUserData from '../SeeUserData';

const AllOrders = () => {
  const [AllOrders,SetAllOrders]=useState()
  const [Options,setOptions]=useState(-1)
  const [Values, setValues] = useState({status:""})
  const [userDiv, setuserDiv] = useState("hidden")
  const [userDivData, setuserDivData] = useState()
  const headers={
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,
  }
  useEffect(()=>{
    try{
      const fetch=async()=>{
        const response=await axios.get("http://localhost:1000/api/v1/get-all-orders",{headers})
        // console.log(response.data.data)
        SetAllOrders(response.data.data)

      }
      fetch()
    }
    catch(error){

    }
  },[AllOrders]);

  const change=(e)=>{
    const {value}=e.target;
    setValues({status:value})
  }

  const submitChanges = async (i) => {
  const id = AllOrders[i]._id;
  try {
    const response = await axios.put(
      `http://localhost:1000/api/v1/update-status/${id}`,
      Values,
      { headers }
    );
    toast.success(response.data.message);
    console.log(response);
  } catch (error) {
    console.error("Error updating order status:", error);
    toast.error("Failed to update order status.");
  }
};

  
  AllOrders && AllOrders.splice(AllOrders.length-1,1);
  return (
    <>
    {!AllOrders && <div className='flex items-center justify-center h-[100%]'><Loader/></div> }

    {AllOrders && AllOrders.length>0 && (
      <div className='h-[100%] p-0 md:p-4 text-zinc-100'>
        <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>All Orders</h1>

        <div className='mt-4 bg-zinc-800 w-full rounded py-2 flex gap-2'>
          
          <div className='w-[3%]'>
            <h1 className='text-center text-primary font-semibold '>Sr.</h1>
          </div>

          <div className='w-[40%] md:w-[22%]'>
            <h1 className='text-primary font-semibold '>Books</h1>
          </div>

          <div className='w-0 md:w-[45%] hidden md:block'>
            <h1 className='text-primary font-semibold '>Description</h1>
          </div>

          <div className='w-[17%] md:w-[9%]'>
            <h1 className='text-primary font-semibold '>Prices</h1>
          </div>

          <div className='w-[30%] md:w-[16%]'>
            <h1 className=' text-primary font-semibold '>Status</h1>
          </div>

          <div className='w-[10%] md:w-[5%]  '>
            <h1 className='text-primary font-semibold '><FaUserLarge/></h1>
          </div>
        </div>

        {AllOrders.map((items,i)=>(
          <div className='bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 hover:bg-zinc-900 hover:cursor-poniter' key={i}>

            <div className='w-[3%]'>
              <h1 className='text-center'>{i+1}</h1>
            </div>

            <div className='w-[40%] md:w-[22%]'>
              <Link to={`/view-book-details/${items.book._id}`} className='hover:text-blue-500'>
              {items.book.title}</Link>
            </div>

            <div className='w-0 md:w-[45%] hidden md:block'>
              <h1 className=''>{items.book.desc.slice(0,50)}...</h1>
            </div>

          <div className='w-[17%] md:w-[9%]'>
            <h1 className=''>₹ {items.book.price}</h1>
          </div>

          <div className='w-[30%] md:w-[16%]'>
            <h1 className=''>
              <button className='hover:scale-105 transition-all duration-300' onClick={()=>{setOptions(i)}}>{items.status==="Order Placed" ? (<div className='text-yellow-500'>{items.status}</div>) : items.status ==="Canceled" ? (<div className='text-red-500'>{items.status}</div>) :  (<div className='text-green-500'>{items.status}</div>)}</button>

              <div className={`${Options===i ? "flex" : "hidden"} flex mt-4`}>
                <select name="status" id="" className='bg-gray-800' onChange={change} value={Values.status}>
                  {["Order Placed","Out For Delivery","Delivered","Canceled"].map((items,i)=>(
                    <option value={items} key={i}>{items}</option>
                  ))}
                </select>
                <button className='text-green-500 hover:text-pink-600 mx-2 ' onClick={()=>{setOptions(-1); submitChanges(i)}}><FaCheck/></button>
              </div>
            </h1>
          </div>

          <div className='w-[10%] md:w-[5%]'>
            <button className='text-xl hover:text-orange-500 ' onClick={()=>{setuserDiv("fixed");setuserDivData(items.user)}}><IoOpenOutline /></button>
          </div>
          
          </div>
        ))}
      <ToastContainer/>
      </div>
    )}

    {userDivData && (
      <SeeUserData userDivData={userDivData} userDiv={userDiv} setuserDiv={setuserDiv}/>
    )}
    </>
  )
}

export default AllOrders