import React from "react"
import armin from "../../assets/user1.png"
import eren from "../../assets/user2.png"
import mikasa from "../../assets/user3.png"

import { Settings, Download, ExternalLink } from "lucide-react"

const UsersBar = () => {
  return (
    <div className="w-full flex flex-row items-center h-12 gap-2">

      {/* ─── LEFT: SCROLLABLE USER LIST ─── */}
      {/* flex-1: Takes remaining space
          min-w-0: Allows it to shrink below content size
          overflow-x-auto: Enables horizontal scrolling for users if space is tight 
          no-scrollbar: Hides the scrollbar for a clean look */}
      <div className="flex-1 flex flex-row items-center gap-2 overflow-x-auto no-scrollbar min-w-0">

        {/* + button */}
        <button className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-base text-gray-600 hover:bg-gray-100">
          +
        </button>

        <UserPill img={armin} name="Armin A." />
        <UserPill img={eren} name="Eren Y." />
        <UserPill img={mikasa} name="Mikasa A." />

        {/* Codename logo - Hidden on mobile to save space */}
        <div className="hidden md:flex flex-shrink-0 w-7 h-7 rounded-full border border-gray-200 bg-white items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
                <span className="text-[10px] font-semibold leading-none">C</span>
            </div>
        </div>

      </div>

      {/* ─── RIGHT: FIXED ICONS (ALWAYS VISIBLE) ─── */}
      {/* flex-shrink-0: ensures these NEVER get pushed off screen or squashed */}
      <div className="flex flex-row items-center gap-1 md:gap-2 flex-shrink-0">
        <IconButton><Settings size={16} /></IconButton>
        <IconButton><Download size={16} /></IconButton>
        <IconButton><ExternalLink size={16} /></IconButton>
      </div>

    </div>
  )
}

/* ─── COMPONENTS ─── */

const UserPill = ({ img, name }) => (
  // flex-shrink-0 ensures the pill doesn't get squashed, it will just scroll out of view if needed
  <div className="flex-shrink-0 flex flex-row items-center gap-0 md:gap-2 p-1 md:px-3 md:py-1 border border-gray-200 rounded-full bg-white hover:bg-gray-50 cursor-pointer transition-all">
    <img
      src={img}
      alt={name}
      className="w-5 h-5 rounded-full object-cover"
    />
    {/* Name hidden on mobile */}
    <span className="hidden md:block text-xs font-medium text-gray-800 whitespace-nowrap">
      {name}
    </span>
  </div>
)

const IconButton = ({ children }) => (
  <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100">
    {children}
  </button>
)

export default UsersBar

