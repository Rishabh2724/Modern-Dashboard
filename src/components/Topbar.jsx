import React from 'react'
import userImg from '../assets/user.png' // adjust path if needed

const Topbar = () => {
  return (
    <div className="bg-[#F2EDED] border-b border-gray-200 px-3   flex items-center justify-between h-16">

      {/* Center: Search */}
      <div className="flex-1 flex justify-center max-w-xl">
        <div className="relative w-full max-w-xl h-10">
          <input
            type="text"
            placeholder='Try searching "insights"'
            className="w-full h-10 pl-10 pr-4 bg-gray-50 border border-gray-200 
                       rounded-[40px] focus:outline-none focus:ring-2 
                       focus:ring-pink-500 focus:border-transparent 
                       text-[13px] placeholder:text-[12px] 
                       placeholder:font-normal placeholder:text-gray-400"
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Right: Menu + User + Add */}
      <div className="flex items-center gap-3">

        {/* Menu + User (merged pill, same height as search) */}
        <div className="h-10 flex items-center gap-2 bg-white border border-gray-200 
                        rounded-full px-2 cursor-pointer hover:bg-gray-100">

          {/* Hamburger (smaller) */}
          <svg
            className="w-4 h-4 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          {/* User avatar (bigger) */}
          <div className="w-7 h-7 rounded-full overflow-hidden">
            <img
              src={userImg}
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Plus button */}
        <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center 
                        cursor-pointer hover:bg-red-600">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>

      </div>
    </div>
  )
}

export default Topbar
