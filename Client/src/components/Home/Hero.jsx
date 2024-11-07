import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className=' md:h-[75vh] flex flex-col  md:flex-row gap-4 items-center justify-center'>
        <div className='w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center'>
            <h1 className='text-primary text-4xl lg:text-6xl font-semibold lg:text-left text-center'>From Bestsellers to Hidden Gems: We’ve Got Your Next Read!</h1>

            <p className='mt-4 text-xl lg:text-left text-center'>Explore a curated selection that caters to every taste. Whether you're seeking the latest blockbuster or an overlooked treasure, our extensive library has something for everyone. Dive in and let your next literary adventure begin!</p>

            <div className='mt-8'>
            <Link to='/all-books' className='lg:text-2xl text-xl font-semibold text-zinc-200 border border-primary px-10 py-2 hover:bg-zinc-800 hover:text-primary rounded-full active:scale-90 transition-all duration-300 transform '>Shop Bestsellers</Link>
            </div>
        </div>

        <div className='w-full  lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center '>
          <img src="https://miro.medium.com/max/10944/1*S81O15rjKfG-BFdnNC6-GQ.jpeg " alt="" />
        </div>

    </div>
  )
}

export default Hero