import React from 'react'

const iconWrapper =
  'w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 cursor-pointer mb-2'

const Sidebar = () => {
  return (
    <div className="bg-[#F2EDED] h-full w-full flex flex-col items-center py-4 border-r border-gray-200">

      {/* Top icons */}
      <div className="flex flex-col items-center gap-4 flex-1">

        {/* App Logo */}
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold text-lg">
          C
        </div>

        {/* Starred */}
        <div className={`${iconWrapper} mt-10`}>
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>

        {/* Recent */}
        <div className={iconWrapper}>
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* Sales list */}
        <div className={iconWrapper}>
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
          </svg>
        </div>

        {/* Goals */}
        <div className={iconWrapper}>
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* Dashboard - Active */}
        <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center cursor-pointer">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
          </svg>
        </div>
      </div>

      {/* Bottom icons */}
      <div className="flex flex-col items-center gap-4 mt-auto">

        {/* Chat */}
        {/* Chat with ring-style notification */}
<div className="relative">
  <div className={iconWrapper}>
    <svg
      className="w-5 h-5 text-gray-700"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 10h8m-8 4h5m9-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </div>

  {/* Ring / wheel notification */}
  <span className="absolute top-[2px] right-[2px] w-3 h-3 rounded-full border-[3px] border-pink-500 bg-white"></span>
</div>


        {/* Settings */}
        <div className={iconWrapper}>
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M11.983 13.988a1.988 1.988 0 100-3.976 1.988 1.988 0 000 3.976z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M20.4 12a8.4 8.4 0 01-.1 1.3l2 1.6-2 3.5-2.3-.9a8.4 8.4 0 01-2.2 1.3l-.3 2.4h-4l-.3-2.4a8.4 8.4 0 01-2.2-1.3l-2.3.9-2-3.5 2-1.6A8.4 8.4 0 013.6 12a8.4 8.4 0 01.1-1.3l-2-1.6 2-3.5 2.3.9a8.4 8.4 0 012.2-1.3l.3-2.4h4l.3 2.4a8.4 8.4 0 012.2 1.3l2.3-.9 2 3.5-2 1.6c.07.43.1.86.1 1.3z" />
          </svg>
        </div>

      </div>
    </div>
  )
}

export default Sidebar
