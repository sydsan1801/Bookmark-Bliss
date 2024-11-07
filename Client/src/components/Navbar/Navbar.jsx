import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenuSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
const Navbar = () => {
  const links=[
    {
      title:"Home",
      link:'/'
    },
    {
      title:'About Us',
      link:'/about-us',
    },
    {
      title:'All Books',
      link:"/all-books"
    },
    {
      title:'Cart',
      link:'/cart'
    },
    {
      title:"Profile",
      link:'/profile'
    },
    {
      title:"Admin Profile",
      link:'/profile'
    }
  ]
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)
  const role=useSelector((state)=>state.auth.role)
  // console.log(isLoggedIn)
  if (isLoggedIn===false){
    links.splice(3,4);
  }

  if (isLoggedIn ===true && role==="admin"){
    links.splice(4,1)
  }

  if (isLoggedIn ===true && role==="user"){
    links.splice(5,1)
  }
  const [MobileNav,setMobileNav]=useState("hidden")
  return (
    <>
    <nav className='z-50  relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between '>
      <div className='flex items-center'>
        <img src='https://png.pngtree.com/png-clipart/20200710/original/pngtree-books-logo-png-image_4135972.jpg' alt='logo' className='h-10 me-4 rounded-full '/>
        <h1 className='text-2xl font-semibold text-red-500'>Bookmark Bliss</h1>
      </div>

      <div className='nav-link block md:flex items-center gap-4'>
        <div className=' hidden md:flex gap-4'>
          {links.map((items,i)=>(
          <Link to={items.link}
           className='hover:text-primary transition-all duration-300' key={i}>{items.title}
          </Link>
          // <>
          // {/* {items.title==="Profile" ?<Link>
          //   to={items.link}
          //   className='hover:text-primary transition-all duration-300' key={i}
          // {items.title}<Link/> : 
          //   <Link to={items.link}
          //  className='hover:text-primary transition-all duration-300' key={i}>{items.title}
          // </Link>
          // } */}
          // </>
        ))}
        </div>

        {isLoggedIn===false && (
          <div className=' hidden md:flex gap-4'>
          <Link to="/LogIn" 
          className='px-4 py-1 bg-secondary rounded  active:scale-90 transition-all duration-300 transform hover:bg-white hover:text-zinc-800 shadow-md  font-medium text-white mx-auto text-center '>Login</Link>
          
          <Link to="/SignUp" className='px-4 py-1 bg-primary rounded   active:scale-90 transition-all duration-300 transform hover:bg-yellow-500 hover:white shadow-md  font-medium text-black mx-auto text-center'>Sign Up</Link>
        </div>
        )}

        <button className='text-white text-3xl hover:text-primary block md:hidden' onClick={()=>MobileNav === "hidden" ? setMobileNav("block") : setMobileNav("hidden")}><IoMenuSharp/></button>
        
      </div>
    </nav>

    <div className={`${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}>
           {links.map((items,i)=>(
          <Link 
          to={items.link}
           className={`${MobileNav} text-white text-4xl font-semibold   hover:text-primary mb-4 transition-all duration-300`} key={i}
           onClick={()=>MobileNav === "hidden" ? setMobileNav("block") : setMobileNav("hidden")}
           >{items.title}
          </Link>
        ))}

        
          {isLoggedIn===false && (
            <>
              <Link 
          to="/LogIn" 
          className={`${MobileNav} mb-8 px-8 py-2 text-3xl font-semibold bg-secondary rounded  active:scale-90 transition-all duration-300 transform hover:bg-white hover:text-zinc-800 shadow-md  text-white mx-auto text-center `}>Login</Link>
          
          <Link 
          to="/SignUp" 
          className={`${MobileNav} mb-8 px-8 py-2 text-3xl font-semibold bg-primary rounded   active:scale-90 transition-all duration-300 transform hover:bg-white hover:text-zinc-800 shadow-md  text-white mx-auto text-center`}>Sign Up</Link>
            </>
          )}
        
    </div>
    </>

  )
}

export default Navbar