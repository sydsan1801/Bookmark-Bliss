import React from 'react'
import { RxCross1 } from "react-icons/rx";
const SeeUserData = ({userDivData,userDiv,setuserDiv}) => {
  return (
    <>
      <div className={`${userDiv} top-0 left-0 h-screen w-full bg-zinc-800 opacity-80`}></div>{" "}
      <div className={`${userDiv} top-0 left-0 h-screen w-full flex items-center justify-center text-zinc-800`}>
        <div className='bg-white rounded p-4 w-[80%] md:w-[50%] lg:w-[40%]'>
          <div className='flex items-center justify-between'>
            <h1 className='text-3xl md:text-2xl font-semibold text-center text-red-800'>User Information</h1>
            <button onClick={()=>setuserDiv("hidden")} className='hover:text-red-800 text-xl'>
              <RxCross1/>
            </button>
          </div>

          <div className='mt-2 font-semibold'>
            <label htmlFor="" className=''>Username:{" "}
              <span >{userDivData.username}</span>
            </label>
          </div>

          <div className='mt-4 font-semibold'>
            <label htmlFor="">Email:{" "}
              <span>{userDivData.email}</span>
            </label>
          </div>

          <div className='mt-4 font-semibold'>
            <label htmlFor="">Address:{" "}
              <span>{userDivData.address}</span>
            </label>
          </div>

        </div>
      </div>
    </>
  )
}

export default SeeUserData