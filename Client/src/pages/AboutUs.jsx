import React from 'react'
import { FaBookmark, FaUsers } from 'react-icons/fa'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AboutUs = () => {
  return (
    <div className='bg-zinc-900 min-h-screen px-12 py-8'>
      {/* Heading Section */}
      <div className='text-center mb-12'>
        <h1 className='text-5xl font-semibold text-zinc-500'>
          About Bookmark Bliss
        </h1>
        <p className='text-xl text-zinc-400 mt-4'>
          Your ultimate destination for discovering, bookmarking, and buying books that ignite your passion.
        </p>
      </div>

      {/* Our Story Section */}
      <div className='mb-16'>
        <h2 className='text-3xl text-zinc-200 font-semibold mb-4'>
          Our Story
        </h2>
        <p className='text-zinc-300 text-lg'>
          At **Bookmark Bliss**, we believe that every book holds the potential to transform lives. Whether you’re looking to expand your knowledge, escape into a new world, or find inspiration, our platform connects you with the books that matter most to you.
        </p>
        <p className='text-zinc-300 text-lg mt-4'>
          Bookmark Bliss started with a simple idea: to build a seamless experience for book lovers — one that goes beyond just shopping. We want to make discovering books and keeping track of your reading list as enjoyable as reading itself. From curated recommendations to an intuitive user interface, our app is designed to enhance every aspect of your book journey.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className='mb-16'>
        <h2 className='text-3xl text-zinc-200 font-semibold mb-4'>
          Our Mission
        </h2>
        <p className='text-zinc-300 text-lg'>
          Our mission is simple: to provide a blissful experience for readers by offering a space where they can discover, organize, and purchase their favorite books. We strive to create a community of passionate readers and bring the joy of reading to people everywhere, at any time.
        </p>
        <p className='text-zinc-300 text-lg mt-4'>
          Whether you're browsing for your next read, curating your personal library, or diving into the latest bestsellers, **Bookmark Bliss** is here to make your reading experience more delightful and effortless than ever before.
        </p>
      </div>

      {/* Our Values Section */}
      <div className='mb-16'>
        <h2 className='text-3xl text-zinc-200 font-semibold mb-4'>
          Our Values
        </h2>
        <ul className='text-zinc-300 text-lg list-disc pl-8'>
          <li><strong>Passion for Books</strong>: We’re driven by a love for books and a commitment to connecting people with stories that inspire, educate, and entertain.</li>
          <li><strong>Seamless Experience</strong>: We design our app with you in mind — easy to use, fast, and enjoyable every step of the way.</li>
          <li><strong>Community-First</strong>: Our readers are our family. We create an environment where book lovers can connect, share recommendations, and discover new favorites together.</li>
          <li><strong>Innovation</strong>: We’re always looking for new ways to enhance your book journey, from personalized recommendations to exciting new features.</li>
        </ul>
      </div>

      {/* Meet The Team Section */}
      <div className='mb-16'>
        <h2 className='text-3xl text-zinc-200 font-semibold mb-4'>
          Meet The Team
        </h2>
        <div className='flex flex-col md:flex-row md:gap-8 justify-center items-center'>
          <div className='bg-zinc-800 p-6 rounded-lg shadow-md text-center mb-8 md:mb-0'>
            <FaUsers className='text-6xl text-primary mx-auto' />
            <h3 className='text-2xl text-zinc-200 mt-4'>Saniya Sayyed</h3>
            <p className='text-zinc-400 mt-2'>Founder & CEO</p>
            <p className='text-zinc-400 text-sm mt-2'>Saniya is the visionary behind Bookmark Bliss. A lifelong reader, he started this platform to bring joy and discovery to readers everywhere.</p>
          </div>
          <div className='bg-zinc-800 p-6 rounded-lg shadow-md text-center mb-8 md:mb-0'>
            <FaUsers className='text-6xl text-primary mx-auto' />
            <h3 className='text-2xl text-zinc-200 mt-4'>Jane Smith</h3>
            <p className='text-zinc-400 mt-2'>Chief Product Officer</p>
            <p className='text-zinc-400 text-sm mt-2'>Jane leads the design and development of the Bookmark Bliss app, ensuring a seamless and delightful experience for all our users.</p>
          </div>
          <div className='bg-zinc-800 p-6 rounded-lg shadow-md text-center'>
            <FaUsers className='text-6xl text-primary mx-auto' />
            <h3 className='text-2xl text-zinc-200 mt-4'>Michael Lee</h3>
            <p className='text-zinc-400 mt-2'>Head of Customer Support</p>
            <p className='text-zinc-400 text-sm mt-2'>Michael is dedicated to providing exceptional customer service, ensuring that every user’s experience is positive and stress-free.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className='text-center'>
        <h2 className='text-3xl text-zinc-200 font-semibold mb-4'>
          Get In Touch
        </h2>
        <p className='text-zinc-300 text-lg'>
          If you have any questions or would like to connect with us, feel free to reach out via email:
        </p>
        <p className='text-primary text-xl mt-4'>
          <a href="">support@bookmarkbliss.com</a>
        </p>
      </div>

      {/* Toast Container for notifications */}
      <ToastContainer />
    </div>
  )
}

export default AboutUs
