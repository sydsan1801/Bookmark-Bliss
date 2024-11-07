import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader/Loader'
import axios from "axios"
import {AiFillDelete} from "react-icons/ai"
import {toast, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const [Cart, setCart] = useState()
  const [Total, setTotal] = useState()
  
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`
  }

  // Get user cart
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:1000/api/v1/get-user-cart", { headers })
      setCart(response.data.data)
    }
    fetch();
  }, [Cart])

  // Remove items from cart
  const deleteItem = async (bookid) => {
    try {
      const response = await axios.put(`http://localhost:1000/api/v1/remove-from-cart/${bookid}`, {}, { headers })
      toast.success(response.data.message)
    }
    catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error("An unexpected error occurred")
      }
    }
  }

  // Calculate Total
  useEffect(() => {
    if (Cart && Cart.length > 0) {
      let total = 0
      Cart.map((items) => {
        total += items.price
      })
      setTotal(total)
      total = 0
    }
  }, [Cart])
  
  const navigate = useNavigate()

  // Place Order Function
  const PlaceOrder = async () => {
    try {
      const response = await axios.post(`http://localhost:1000/api/v1/place-order`, { order: Cart }, { headers })
      toast.success(response.data.message)
      navigate("/profile/orderHistory")
    }
    catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error("An unexpected error occurred")
      }
    }
  }

  return (
    <div className='bg-zinc-900 min-h-screen px-12 py-8'>
      {!Cart && (<div className='w-full h-[100%] flex items-center justify-center'><Loader/></div>)}
      
      {Cart && Cart.length === 0 && (
        <div className='h-screen'>
          <div className='h-[100%] flex items-center justify-center flex-col'>
            <h1 className='text-5xl lg:text-6xl font-semibold text-zinc-400'>
              Empty Cart
            </h1>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFgA7NRRmBHloPjJDcnWlRw5Vhph5ZwpbyXQ&s" 
              alt="Empty Cart" 
              className='lg:h-[30vh] mt-5 rounded' 
            />
          </div>
        </div>
      )}

      {/* Display Cart Items-->Books */}
      {Cart && Cart.length > 0 && (
        <>
          <h1 className='text-5xl font-semibold text-zinc-500 mb-8'>Your Cart</h1>
          {Cart.map((items, i) => (
            <div className='w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center' key={i}>
              <img src={items.url} alt="/" className='h-[20vh] md:h-[10vh] object-cover' />

              <div className='w-full md:w-auto'>
                <h1 className='text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0'>{items.title}</h1>
                <p className='text-zinc-300 mt-2 hidden lg:block'>
                  {items.desc.slice(0, 100)}...
                </p>

                <p className='text-zinc-300 mt-2 hidden lg:hidden md:block'>
                  {items.desc.slice(0, 65)}...
                </p>

                <p className='text-zinc-300 mt-2 block md:hidden'>
                  {items.desc.slice(0, 100)}...
                </p>
              </div>
            
              <div className='flex mt-4 w-full md:w-auto items-center justify-between'>
                <h2 className='text-zinc-100 text-3xl font-semibold flex'>₹ {items.price}</h2>
                <button 
                  className='bg-red-100 text-red-700 border border-red-700 rounded p-2 ms-12 active:scale-90 transition-all duration-300 transform shadow-md' 
                  onClick={() => deleteItem(items._id)}
                >
                  <AiFillDelete/>
                </button>
              </div>
            </div>
          ))}
        </>
      )}
      
      {/* Display Total Amount */}
      {Cart && Cart.length > 0 && (
        <div className='mt-4 w-full flex items-center justify-end'>
          <div className='p-4 bg-zinc-800 rounded'>
            <h1 className='text-3xl text-zinc-200 font-semibold'>
              Total Amount
            </h1>
            <div className='mt-3 flex items-center justify-between text-xl text-zinc-200 font-semibold'>
              <h2>{Cart.length} books</h2>
              <h2 className='text-primary'> ₹ {Total}</h2>
            </div>

            <div className='w-[100%] mt-4'>
              <button 
                className='bg-zinc-100 rounded px-4 py-2 flex justify-center w-full font-semibold hover:bg-zinc-200 active:scale-90 transition-all duration-300 transform shadow-md' 
                onClick={PlaceOrder}
              >
                Place Your Order
              </button>
            </div>
          </div>
        </div>
      )}
      
      <ToastContainer />
    </div>
  )
}

export default Cart
