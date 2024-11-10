import React, { useState } from 'react'
import axios from "axios"
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const AddBooks = () => {
    const [Data,setData]=useState({
    url:"",
    title:"",
    author:"",
    price:"",
    desc:"",
    language:"",
})

    const headers={
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,
    // bookid:id
    }

    const change=(e)=>{
    const {name,value}=e.target
    setData({...Data,[name]:value})
    }
    

const submit=async()=>{
    // console.log(Data);
    try{
        if(Data.url==="" || Data.title==="" || Data.author==="" || Data.price === ""|| Data.desc === ""|| Data.language){
            toast.error("All fields are required")
        }
        
            const response=await axios.post("https://bookmark-bliss.vercel.app/add-book",Data,{headers})
            setData({url:"",title:"",author:"",price:"",desc:"",language:""})
            toast.success(response.data.message)
            // console.log(response.data.response)
        
    }
    catch(error){
        toast.error(error.response.data.message)
    }

}
  return (
    <div className='h-[100%] p:0 md:p-4'>
        <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>Add Book</h1>
        <div className='p-4 bg-zinc-800 rounded'>
            <div>
                <label htmlFor="" className='text-zinc-400'>Image</label>
                <input type="text" className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none ' placeholder='url of image' name='url' required value={Data.url} onChange={change}/>
            </div>

            <div className='mt-4'>
                <label htmlFor="" className='text-zinc-400'>Title Of The Book</label>
                <input type='text' className='w-full mt-2 outline-none text-zinc-100 p-2 bg-zinc-900' placeholder='title of the book' value={Data.title} onChange={change} name='title' required/>
            </div>

            <div className='mt-4'>
                <label htmlFor="" className='text-zinc-400'>Author Of The Book</label>
                <input type='text' className='w-full mt-2 outline-none text-zinc-100 p-2 bg-zinc-900' placeholder='author of the book' value={Data.author} onChange={change} name='author' required/>
            </div>

            <div className='mt-4 flex gap-4'>
                <div className='w-3/6'>
                    <label htmlFor="" className='text-zinc-400'>Price</label>
                    <input type='number' className='w-full mt-2 outline-none text-zinc-100 p-2 bg-zinc-900' placeholder='Price' value={Data.price} onChange={change} name='price' required/>
                </div>

                <div className='w-3/6'>
                    <label htmlFor="" className='text-zinc-400'>Language</label>
                    <input type='text' className='w-full mt-2 outline-none text-zinc-100 p-2 bg-zinc-900' placeholder='Language' value={Data.language} onChange={change} name='language' required/>
                </div>
            </div>

            <div className='mt-4'>
                <label htmlFor="" className='text-zinc-400'>Description</label>
                <textarea rows='5'  className='w-full mt-2 outline-none text-zinc-100 p-2 bg-zinc-900' placeholder='description of the book' value={Data.desc} onChange={change} name='desc' required/>
            </div>

            <button className='mt-4 px-3 py-2 bg-blue-500 text-white font-semiboldrounded hober:bg-blue-600 active:scale-90 transition-all duration-300 transform' onClick={submit}>Add Book</button>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default AddBooks