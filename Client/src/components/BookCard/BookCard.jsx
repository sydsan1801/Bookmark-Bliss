import React from 'react'
import {Link, useParams} from "react-router-dom"
import axios from "axios"
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const BookCard = ({data,favourite}) => {
  // console.log(data)
  
  const headers={
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,
    bookid:data._id
  }
  const handleRemoveFavourites=async()=>{
    try{
      const response=await axios.put("https://bookmark-bliss.vercel.app/api/v1/remove-book-from-favourite",{},{headers})
      // console.log(response)
      toast.success(response.data.message)

    }
    catch(error){
            
            if (error.response){
                toast.error(error.response.data.message)
            }
            else{
                toast.error("An unexpected error occured")
            }
        }
  }
  return (
    <div className=' bg-zinc-800 rounded p-4 flex flex-col'>
    <Link to={`/view-book-details/${data._id}`}>
    <div className=' '>
      <div className='bg-zinc-800 rounded flex items-center justify-center'>
        <img src={data.url} alt="/" className='h-[35vh] w-[50vh] rounded flex items-center justify-center gap-4  sm:items-center md:items-center sm:h-[35h] sm:w-[30vh] sm:mt-4 ' />
      </div>
      <h2 className=' mt-4 text-xl text-white font-semibold'>{data.title}</h2>
      <p className='mt-2 text-zinc-400 font-semibold'>by {data.title}</p>
      <p className='mt-2 text-zinc-200 font-semibold text-xl'>₹ {data.price}</p>
    </div>
    </Link>

    {favourite && (
      <button className='bg-zinc-900 px-4 py-2 rounded  text-white font-semibold hover:text-zinc-900 hover:bg-white mt-4  active:scale-90 transition-all duration-300 transform ' onClick={handleRemoveFavourites}>Remove from favourite</button>
    )}
    <ToastContainer/>
    </div>
  )
}

export default BookCard