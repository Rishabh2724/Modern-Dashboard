import React from 'react'
import StatCard from '../StatCard'
import BestDealCard from '../BestDealCard'
import TopSalesCard from '../TopSalesCard'

const RevenueCard = () => {
  return (
    <div className="w-full rounded-3xl">

      <div className="flex items-center justify-between gap-4 xl:gap-3">

        {/* LEFT — REVENUE (SHRINKS CLEANLY) */}
        <div className="flex flex-col gap-1 shrink">
          <span className="text-sm font-semibold text-gray-500">Revenue</span>

          {/* Number scales down */}
          <div className="flex flex-col min-[1440px]:flex-row min-[1440px]:items-baseline min-[1440px]:gap-3">
  
  {/* Revenue Number */}
  <span className="font-bold text-gray-900 leading-none text-[32px] whitespace-nowrap">
    $528,976<span className="text-gray-400">.82</span>
  </span>

  {/* Labels */}
  <div className="flex items-center gap-1.5 mt-1 min-[1440px]:mt-0 whitespace-nowrap">
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

        {/* RIGHT — CARDS */}
        <div className="flex items-center gap-3">

          {/* BestDeal + TopSales SHRINK */}
          <div className="flex items-center gap-2">
            <div style={{ width: 'clamp(120px, 14vw, 150px)' }}>
              <TopSalesCard />
            </div>
            <div style={{ width: 'clamp(120px, 14vw, 150px)' }}>
              <BestDealCard />
            </div>
          </div>

          {/* STAT CARDS (UNCHANGED & SAFE) */}
          <div className="flex items-center gap-3 shrink-0">
            <StatCard title="Deals" value="256" delta="5" />
            <StatCard title="Value" value="528k" delta="7.9%" highlight />
            <StatCard title="Win rate" value="44%" delta="1.2%" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default RevenueCard
