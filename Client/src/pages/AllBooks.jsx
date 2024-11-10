import React, { useEffect, useState } from 'react'
import Loader from "../components/Loader/Loader.jsx"
import axios from "axios"
import BookCard from '../components/BookCard/BookCard.jsx'

const AllBooks = () => {
  const [Data,setData]=useState()
  useEffect(()=>{
    const fetch=async()=>{
      const response=await axios.get("https://bookmark-bliss.vercel.app/get-all-books")
      setData(response.data.data)
    };
    fetch()
  },[])
  return (
    <div className='bg-zinc-900 px-12 py-8 h-auto'>
      {" "}
      <h4 className='text-3xl text-red-500
         font-semibold md:mt-20 sm:mt-20 text-center'>All Books</h4>
         {!Data && ( <div className='w-full h-screen flex items-center justify-center'><Loader/></div>
      
         )}
        <div className='my-8 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3   gap-4'>
          {/* if data available use for loop */}
          {Data && Data.map((items,i)=>(<div key={i}><BookCard data={items}/>{" "}</div>))}
        </div>
    </div>
  )
}

export default AllBooks


