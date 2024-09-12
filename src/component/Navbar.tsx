import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";

function Navbar() {
  return (
    <div className='flex justify-between px-6 h-14 items-center bg-[#212121] opacity-95 sticky text-white'>
      {/* Left Section: Hamburger and YouTube Logo */}
      <div className='flex gap-8 items-center text-2xl'>
        {/* Hamburger Icon */}
        <div>
          <GiHamburgerMenu className="text-white text-2xl" />
        </div>

        {/* YouTube Logo and Text */}
        <div className='flex gap-1 items-center justify-center'>
          <BsYoutube className='text-4xl text-red-600' />
          <span className='pb-1 text-xl font-bold'>YouTube</span>
        </div>
      </div>

      {/* Center Section: Search Bar and Microphone Icon */}
      <div className='flex items-center justify-center gap-3'>
        {/* Search Bar */}
        <form>
          <div className="flex bg-zinc-900 items-center h-10 w-[500px] rounded-full ">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-zinc-900 text-white px-4 py-2 focus:outline-none border-none rounded-l-full"
            />
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-full">
              <AiOutlineSearch className="text-xl text-white" />
            </button>
          </div>
        </form>

        {/* Microphone Icon */}
        <div className='p-2 bg-zinc-800 rounded-full'>
          <FaMicrophone className="text-white text-2xl" />
        </div>
      </div>

      {/* Right Section: Video Add, Notifications, and Profile */}
      <div className='flex gap-6 items-center text-xl text-white'>
        {/* Video Add Icon */}
        <RiVideoAddLine className="text-2xl" />

        {/* Notification Bell with Badge */}
        <div className='relative'>
          <BsBell className="text-2xl" />
          <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>9+</span>
        </div>

        {/* Profile Picture */}
        <img
          src='https://static.vecteezy.com/system/resources/previews/024/089/970/original/lohri-celebration-kite-flying-free-png.png'
          alt='profile-logo'
          className='h-9 w-9 rounded-full'
        />
      </div>
    </div>
  );
}

export default Navbar;
