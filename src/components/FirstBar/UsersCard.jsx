import React from "react"
import armin from "../../assets/user1.png"
import eren from "../../assets/user2.png"
import mikasa from "../../assets/user3.png"

import { Settings, Download, ExternalLink } from "lucide-react"

const UsersBar = () => {
  return (
    <div className="w-full flex flex-row items-center min-w-0 h-12">

      {/* LEFT */}
      <div className="flex flex-row items-center gap-2">

        {/* + button */}
        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-base text-gray-600 hover:bg-gray-100">
          +
        </button>

        <UserPill img={armin} name="Armin A." />
        <UserPill img={eren} name="Eren Y." />
        <UserPill img={mikasa} name="Mikasa A." />

        {/* Codename logo */}
        {/* Codename logo — pill style */}
        <div className="w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
            <span className="text-[10px] font-semibold leading-none">C</span>
        </div>
        </div>

      </div>

      {/* RIGHT */}
      <div className="ml-auto flex flex-row items-center gap-2">
        <IconButton><Settings size={16} /></IconButton>
        <IconButton><Download size={16} /></IconButton>
        <IconButton><ExternalLink size={16} /></IconButton>
      </div>
    </div>
  )
}

const UserPill = ({ img, name }) => (
  <div className="flex flex-row items-center gap-2 px-3 py-1 border border-gray-200 rounded-full bg-white hover:bg-gray-50 cursor-pointer">
    <img
      src={img}
      alt={name}
      className="w-5 h-5 rounded-full object-cover"
    />
    <span className="text-xs font-medium text-gray-800 whitespace-nowrap">
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
