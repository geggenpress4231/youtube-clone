import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
function Navbar() {
  return (
    <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky'>
      <div className='flex gap-8 items-center text-2xl text-white'>
        <div>
          <GiHamburgerMenu/>
        </div>
        <div className='flex gap-0.5 items-center justify-center'>
          <BsYoutube className='text-4xl text-red-500'/>
          <span className='pb-1 text-2xl font-bold'>YouTube</span>
          

        </div>
        <div className='flex items-center justify-center gap-5'>
          <form>
            <div className='flex bg-zinc-900 items-cente h-10 px-4 pr-2 rounded-3xl'>
                <div className='flex gap-5 items-center pr-5'>
                  <input type="text" placeholder='Search' className='w-96 bg-zinc-900 focus:outline-none border-none'/>
                </div>
                <button className='h-10 w-16 flex items-center justify-center bg-zinc-800'>
                  <AiOutlineSearch className=' text-xl rounded-r-3xl'/>
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Navbar