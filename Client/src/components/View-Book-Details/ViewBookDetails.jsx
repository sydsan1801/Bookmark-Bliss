import React, { useEffect, useState } from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'
import axios from "axios"
import Loader from '../Loader/Loader'
import {GrLanguage} from "react-icons/gr"
import {FaHeart} from "react-icons/fa"
import {FaShoppingCart} from "react-icons/fa"
import {FaEdit} from "react-icons/fa"
import {MdOutlineDelete} from "react-icons/md"
import {useSelector} from "react-redux"
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const ViewBookDetails = () => {
    const {id}=useParams()
    // console.log(id)
    const navigate=useNavigate()
    const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)
    const role=useSelector((state)=>state.auth.role)
    // console.log(isLoggedIn,role)

    const [Data,setData]=useState()
    useEffect(()=>{
        const fetch=async()=>{
            const response=await axios.get(`http://localhost:1000/api/v1/get-book-by-id/${id}`);
            setData(response.data.data)
        }
        fetch()
    },[])

    const headers={
        id:localStorage.getItem("id"),
        authorization:`Bearer ${localStorage.getItem("token")}`,
        bookid:id,
    }
    const handleFavourite=async()=>{
        try{
            const response=await axios.put("http://localhost:1000/api/v1/add-book-to-favourite",{},{headers})
            toast.success(response.data.message)
        }
        catch(error){
            // console.log(error)
            if (error.response){
                toast.error(error.response.data.message)
            }
            else{
                toast.error("An unexpected error occured")
            }
        }
    }

    const handleCart=async()=>{
        try{
            const response=await axios.put("http://localhost:1000/api/v1/add-to-cart",{},{headers})
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
    
    const DeleteBook=async()=>{
        try{
            const response=await axios.delete("http://localhost:1000/api/v1/delete-book",{headers})
            toast.success(response.data.message)
            navigate("/all-books")
            // console.log(response.data.message)
        }
        catch(error){
            if(error.response){
                toast.error(error.response.data.message)
            }
            else{
                toast.error("Unexpected Error Occured")
            }
        }
    }

    
  return (
    
    <>
    {Data && (
        <div className='px-4  md:px-12 py-12 bg-zinc-900 flex-col  flex gap-4 lg:flex-row  '>
        {/* Image div */}
        <div className=' text-white  w-full lg:w-3/6  '>
           
            <div className='bg-zinc-800 rounded p-12 flex items-center justify-around  lg:flex-row flex-col'>
                <img src={Data.url} alt="Book Image" className='rounded h-[50vh] md:h-[60vh] lg:h-[70vh] ' />

                {isLoggedIn===true && role==="user" && 
                <div className='flex flex-col md:flex-row  lg:flex-col  gap-4 items-center lg:justify-around justify-between mt-8 lf:mt-0'>
                    <button className='bg-white lg:rounded-full text-3xl p-3 text-red-500 lg:h-[7vh] lg:w-[7vh] flex items-center justify-center active:scale-90 transition-all duration-300 transform shadow-md' onClick={handleFavourite}>
                        <FaHeart/>
                        <span className='ms-4 block lg:hidden'>Favourites</span>
                    </button>

                    <button className='bg-blue-500 mt-8 md:mt-0  lg:rounded-full text-3xl p-3  text-white lg:h-[7vh] lg:w-[7vh] flex items-center justify-center active:scale-90 transition-all duration-300 transform' onClick={handleCart}>
                        <FaShoppingCart/>
                        <span className='ms-4 block lg:hidden  '>Add to cart</span>
                    </button>
                </div>} 

                {isLoggedIn===true && role==="admin" && 
                <div className='flex flex-col md:flex-row  lg:flex-col  gap-4 items-center lg:justify-around justify-between mt-8 lf:mt-0'>
                    <Link to={`/update-book/${id}`} className='bg-blue-500 lg:rounded-full text-3xl p-3 lg:h-[7vh] lg:w-[7vh] flex items-center justify-center text-white active:scale-90 transition-all duration-300 transform'><FaEdit/><span className='ms-4 block lg:hidden'>Edit</span></Link>
                    <button className='bg-red-500 mt-8 md:mt-0 lg:rounded-full text-3xl p-3  text-white lg:h-[7vh] lg:w-[7vh] flex items-center justify-center active:scale-90 transition-all duration-300 transform' onClick={DeleteBook}><MdOutlineDelete/><span className='ms-4 block lg:hidden '>Delete Book</span></button>
                </div>} 
<ToastContainer/>
            </div>
        </div>

        
        <div className='p-4 w-full lg:w-3/6 '>
             <h1 className='text-4xl text-primary font-semibold'>{Data.title}</h1>
             <p className='text-zinc-400 mt-1'>by {Data.author}</p>
             <p className='text-zinc-300 mt-4 text-xl lg:text-2xl '>{Data.desc}</p>
             <p className='flex mt-4 items-center justify-center text-zinc-400 text-xl'>
                <GrLanguage className="me-3"/>{Data.language}</p>
             <p className=''></p>
             <p className='mt-4 text-zinc-100 text-3xl font-semibold'>
                Price : ₹ {Data.price}{}
             </p> 
        </div>
    </div>
    )}

    {!Data && (
        <div className='h-screen bg-zinc-900 flex items-center justify-center'><Loader/></div>
    )}
    
    </>
  )
}

export default ViewBookDetails