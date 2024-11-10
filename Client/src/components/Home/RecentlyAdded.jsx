import React, { useEffect, useState } from 'react'
import axios from "axios";
import BookCard from '../BookCard/BookCard';
import Loader from '../Loader/Loader';
const RecentlyAdded = () => {
  const [Data,setData]=useState()
  useEffect(()=>{
    const fetch=async()=>{
      const response=await axios.get("https://bookmark-bliss.vercel.app/api/v1/get-recent-books");
      // console.log(response.data.data)
      setData(response.data.data)
    };
    fetch()
  },[])
  
  return (
    <div className='mt-8 px-4 '>
        <h4 className='text-3xl text-red-500
         font-semibold md:mt-20 sm:mt-20 text-center'>Recently Added Books</h4>
         {!Data && ( <div className='flex items-center justify-center my-8'>
            <Loader/>{" "}
         </div>
      
         )}
        <div className='my-8 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3   gap-4'>
          {/* if data available use for loop */}
          {Data && Data.map((items,i)=>(<div key={i}><BookCard data={items}/>{" "}</div>))}
        </div>
    </div>
  )
}

export default RecentlyAdded