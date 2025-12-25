import React from 'react'
import StatCard from '../StatCard'
import BestDealCard from '../BestDealCard'
import TopSalesCard from '../TopSalesCard'

const RevenueCard = () => {
  return (
    <div className="w-full rounded-3xl">

      {/* PARENT: Stack vertically on mobile, Row on Desktop */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 xl:gap-3">

        {/* --- LEFT: REVENUE TEXT --- */}
        <div className="flex flex-col gap-1 shrink-0 px-2 md:px-0">
          <span className="text-sm font-semibold text-gray-500">Revenue</span>

          <div className="flex flex-col min-[1440px]:flex-row min-[1440px]:items-baseline min-[1440px]:gap-3">
            {/* Revenue Number */}
            <span className="font-bold text-gray-900 leading-none text-3xl md:text-[32px] whitespace-nowrap">
              $528,976<span className="text-gray-400">.82</span>
            </span>

            {/* Labels */}
            <div className="flex items-center gap-1.5 mt-2 min-[1440px]:mt-0 whitespace-nowrap">
              <span className="text-xs font-bold bg-[#D4254F] text-white px-2 py-0.5 rounded-full">
                ▲ 7.9%
              </span>
              <span className="text-xs font-bold bg-[#D4254F] text-white px-2 py-0.5 rounded-full">
                $27,335.09
              </span>
            </div>
          </div>

          <span className="text-xs text-gray-500 mt-1 max-w-[260px]">
            vs prev. $501,641.73 · Jun 1 – Aug 31, 2023
          </span>
        </div>

        {/* --- RIGHT: CARDS SLIDER --- */}
        <div 
          // 1. Keeps the Sidebar from seeing the swipe
          onTouchStart={(e) => e.stopPropagation()} 
          
          className="
            w-full xl:w-auto 
            flex items-center gap-3 
            overflow-x-auto snap-x snap-mandatory 
            pb-4 xl:pb-0 
            scrollbar-hide
            
            // 2. FIXED: touch-pan-x allows horizontal scrolling
            touch-pan-x
          "
        >

          {/* GROUP 1: Top Sales + Best Deal */}
          <div className="contents xl:flex xl:items-center xl:gap-2">
            
            {/* Card 1 */}
            <div className="snap-center shrink-0 w-[160px] xl:w-[clamp(120px,14vw,150px)]">
              <TopSalesCard />
            </div>
            
            {/* Card 2 */}
            <div className="snap-center shrink-0 w-[160px] xl:w-[clamp(120px,14vw,150px)]">
              <BestDealCard />
            </div>
          </div>

          {/* GROUP 2: Stat Cards */}
          <div className="contents xl:flex xl:items-center xl:gap-3">
            <div className="snap-center shrink-0">
              <StatCard title="Deals" value="256" delta="5" />
            </div>
            <div className="snap-center shrink-0">
              <StatCard title="Value" value="528k" delta="7.9%" highlight />
            </div>
            <div className="snap-center shrink-0">
              <StatCard title="Win rate" value="44%" delta="1.2%" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RevenueCard