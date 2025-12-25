import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import './App.css'

import Sidebar from './components/Sidebar'
import Folders from './components/Folders'
import Topbar from './components/Topbar'
import Content from './components/Content'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMenu = () => setIsMobileMenuOpen(false)

  const swipeHandlers = useSwipeable({
    onSwipedRight: () => setIsMobileMenuOpen(true),
    onSwipedLeft: () => setIsMobileMenuOpen(false),
    trackMouse: true
  })

  return (
    <div {...swipeHandlers} className="lg:mt-1 min-h-screen lg:grid lg:grid-cols-[5rem_16rem_1fr] relative bg-[#fafafa] lg:bg-transparent">
      
      {/* ─── BACKDROP ─── */}
      {isMobileMenuOpen && (
        <div 
          onClick={closeMenu}
          className="fixed inset-0 bg-black/30 z-40 lg:hidden backdrop-blur-sm"
        />
      )}

      {/* ─── DRAWER WRAPPER ─── */}
      <div className={`
        fixed inset-y-0 left-0 z-50 flex h-full bg-[#F2EDED] shadow-2xl transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:contents lg:shadow-none lg:transform-none
      `}>
        
        {/* Close Button (Mobile Only) */}
        <button 
          onClick={closeMenu}
          className="absolute top-2 right-2 p-2 text-gray-500 hover:bg-gray-200 hover:text-red-500 rounded-full lg:hidden z-50 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Sidebar */}
        <aside className="w-20 flex-shrink-0 border-r border-gray-200 lg:border-none h-full lg:h-screen overflow-hidden">
          <Sidebar />
        </aside>

        {/* Folders */}
        <section className="w-64 flex-shrink-0 h-full lg:h-screen overflow-hidden">
          <Folders />
        </section>

      </div>

      {/* ─── RIGHT CONTENT AREA ─── */}
      {/* Changed h-[calc...] to h-screen because Topbar is now inside this flex container */}
      <section className="h-screen lg:h-screen flex flex-col overflow-hidden">
        
        {/* REMOVED 'hidden' so Topbar shows on mobile too */}
        <header className="h-16 flex-shrink-0">
          {/* Passed toggleMenu so the hamburger in Topbar works */}
          <Topbar onMenuClick={toggleMenu} />
        </header>

        <main className="flex-1 m-3 lg:ml-3 lg:mt-3 lg:mr-5 lg:mb-5 rounded-2xl lg:rounded-[40px] border border-gray-200 bg-[#fafafa] shadow-sm overflow-hidden relative">
          <Content />
        </main>

      </section>

    </div>
  )
}

export default App