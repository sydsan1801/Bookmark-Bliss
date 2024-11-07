import React, { useEffect, useState } from 'react'
import axios from "axios"
import BookCard from '../BookCard/BookCard'
const Favourites = () => {
    const [FavouritesBooks,setFavouritesBooks]=useState()
    const headers={
        id:localStorage.getItem("id"),
        authorization:`Bearer ${localStorage.getItem("token")}`
    }
    useEffect(()=>{
        const fetch=async()=>{
        const response=await axios.get("http://localhost:1000/api/v1/get-favourite-books",{headers})
        setFavouritesBooks(response.data.data)
    }
    fetch()
    },[FavouritesBooks])
  return (
    <>
        {FavouritesBooks && FavouritesBooks.length===0 && (<div className='text-5xl h-[90%] font-semibold flex flex-col items-center justify-center text-zinc-500 text-center'>No Favourite Books
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOPVCfv_P4StjbbA2nEznIYrX5L6Dl80n-wA&s" alt="Image" className='h-[20vh] my-8'/>
        </div>)}

        <div className='grid lg:grid-cols-3 lg:gap-4 md:grid-cols-2 '>
        {FavouritesBooks && FavouritesBooks.map((items,i)=>(
            <div key={i}><BookCard data={items} favourite={true}/></div>
        ))}
    </div>
    </>
    
  )
}

export default Favourites