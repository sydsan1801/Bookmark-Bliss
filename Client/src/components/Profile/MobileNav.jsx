import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
const MobileNav = () => {
  const role=useSelector((state)=>state.auth.role);
  return (
    <>
    {role==="user" && (
      <div className=' lg:hidden w-full flex flex-col items-center justify-between mt-4 gap-3'>
        <Link to='/profile' className='text-zinc-100 font-semibold w-full  text-center hover:bg-primary rounded transition-all'>
            Favourites
        </Link>

        <Link to='/profile/orderHistory' className='text-zinc-100 font-semibold w-full  text-center hover:bg-primary  rounded transition-all'>
            Order History
        </Link>
        
        <Link to='/profile/settings' className='text-zinc-100 font-semibold w-full  text-center hover:bg-primary  rounded transition-all'>
            Settings
        </Link>
    </div>
    )}

    {role==="admin" && (
        <div className=' lg:hidden  w-full flex  items-center justify-between mt-4  '>
        <Link to='/profile' className='text-zinc-100 font-semibold w-full py-2 text-center hover:bg-primary rounded transition-all'>
            All Orders
        </Link>

        <Link to='/profile/add-book' className='text-zinc-100 font-semibold w-full py-2 text-center hover:bg-primary  rounded transition-all'>
            Add Books
        </Link> 
      </div>
      )}
    </>
  )
}

export default MobileNav