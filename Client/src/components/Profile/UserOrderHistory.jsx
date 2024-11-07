import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'

const UserOrderHistory = () => {
  const [OrderHistory,setOrderHistory]=useState()
  const headers={
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`
  }
  
  useEffect(()=>{
    const fetch=async()=>{
      const response=await axios.get("http://localhost:1000/api/v1/get-order-history",{headers})
      // console.log(response.data)
      setOrderHistory(response.data.data)
    }
    fetch()
  },[])
  return (
    <>
    {!OrderHistory && <div className='flex items-center justify-center h-[100%]'><Loader/></div>}
    {OrderHistory && OrderHistory.length===0 && (
      <div className='h-[80vh] p-4 textzinc-100'>
        <div className='h-[100%] flex flex-col items-center justify-center'>
          <h1 className='text-5xl font-semibold text-zinc-500 mb-8'>
            No Order History
          </h1>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0OwP1I21B7qoOgE7wl_W7YFE3kN1VfZDtfZQn8hUok4xclNfPOTIQiFdeeGUKaaLtLk&usqp=CAU" alt="" className='h-[50vh] mb-8 rounded-full' />
        </div>
      </div>
    )}

    {OrderHistory && OrderHistory.length>0 && (
      <div className='h-[100%] p-0 md:p-4 text-zinc-100'>
        <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>Your Order History</h1>
        <div className='mt-4 bg-zinc-800 w-full rounded py-2 flex gap-2'>
          <div className='w-[3%]'>
            <h1 className='text-center text-red-500 font-semibold '>Sr.</h1>
          </div>

          <div className='w-[22%]'>
            <h1 className='text-red-500 font-semibold '>Books</h1>
          </div>

          <div className='w-[45%]'>
            <h1 className='text-red-500 font-semibold '>Description</h1>
          </div>

          <div className='w-[9%]'>
            <h1 className='text-red-500 font-semibold '>Prices</h1>
          </div>

          <div className='w-[16%]'>
            <h1 className='text-red-500 font-semibold '>Status</h1>
          </div>

          <div className='w-none md:w-[5%] hidden md:block'>
            <h1 className='text-red-500 font-semibold '>Date</h1>
          </div>
        </div>

        {OrderHistory.map((items,i)=>(
          <div className='bg-zinc-800 w-full rounded py-2 flex gap-4 hover:bg-zinc-900 hover:cursor-pointer'>
            <div className='w-[3%]'>
              <h1 className='text-center'>{i+1}</h1>
            </div>

             <div className='w-[25%]'>
              <Link to={`/view-book-details/${items.book._id}`}
              className='hover:text-blue-300'>{items.book.title}</Link>
            </div>

            <div className='w-[45%]'>
              <h1 className=''>{items.book.desc.slice(0,50)}...</h1>
            </div>

            <div className='w-[9%]'>
              <h1 className=''>₹ {items.book.price}</h1>
            </div>

            <div className='w-[16%]'>
              <h1 className='font-semibold text-green-500'>{items.status==="Order Placed" 
              ? (<div className='text-yellow-500'>{items.status}</div>) 
              :items.status==="Canceled" ? (<div className='text-red-500'>{items.status}</div>) : (items.status) }</h1>
            </div>

            <div className='w-none md:w-[5%] hidden md:block'>
              <h1 className='text-sm text-zinc-400'>{items.createdAt.slice(0,10)}</h1>
            </div>

          </div>


        ))}
      </div>
    )}
    </>
  )
}

export default UserOrderHistory