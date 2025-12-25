import React from "react";
import userImg from "../assets/user.png";

const Topbar = ({ onMenuClick }) => {
  return (
    <div className="bg-[#F2EDED] px-3 flex items-center justify-between h-16">

      {/* ─── LEFT: Mobile Only (Hamburger + Text) ─── */}
      {/* 'md:hidden' ensures this entire block doesn't exist on Desktop, preserving alignment */}
      <div className="flex items-center gap-2 md:hidden">
        <button
          onClick={onMenuClick}
          className="p-2 -ml-2 rounded-full hover:bg-gray-200 text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="font-bold text-[16.5px] text-black tracking-tight">
          Codename.com
        </span>
      </div>

      {/* ─── CENTER: Desktop Only (Search Bar) ─── */}
      {/* 'hidden md:flex' hides it on mobile. 'flex-1' lets it fill space on desktop */}
      <div className="hidden md:flex flex-1 justify-center max-w-xl ">
        <div className="relative w-full h-10">
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

      {/* ─── RIGHT: Shared (Icons & User Pill) ─── */}
      <div className="flex items-center gap-3">

        {/* Search Icon (Mobile Only) */}
        <button className="md:hidden p-2 rounded-full hover:bg-gray-200 text-gray-700">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {/* User + Hamburger Pill (Visible on ALL screens) */}
        {/* On desktop, this helps trigger the sidebar if needed, or acts as profile menu */}
        <div
          onClick={onMenuClick}
          className="flex h-10 items-center gap-2 bg-white border border-gray-200 
                     rounded-full px-2 cursor-pointer hover:bg-gray-100 shadow-sm"
        >
          {/* Small Hamburger */}
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>

          {/* User Avatar */}
          <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-100">
            <img src={userImg} alt="User" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Red Plus Button */}
        <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center 
                        cursor-pointer hover:bg-red-600 shadow-sm flex-shrink-0">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>

      </div>
    </div>
  );
};

export default Topbar;