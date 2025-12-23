 // Ensure this is actually used or remove it
import StatCard from '../StatCard'
import BestDealCard from '../BestDealCard'
import TopSalesCard from '../TopSalesCard'

const RevenueCard = () => {
  return (
     <div className="w-full flex items-start gap-8">

      {/* LEFT — REVENUE INFO */}
      <div className="flex flex-col gap-2 min-w-[360px]">
        <span className="text-sm font-semibold">Revenue</span>

        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold">$528,976</span>
          <span className="text-gray-400 text-xl font-semibold">.82</span>

          {/* Revenue Badges */}
          <span className="text-xs font-semibold bg-[#D4254F] text-white px-2 py-0.5 rounded-full">
            ▲ 7.9%
          </span>
          <span className="text-xs font-semibold bg-[#D4254F] text-white px-2 py-0.5 rounded-full">
            $27,335.09
          </span>
        </div>

        <span className="text-xs text-gray-700">
          vs prev. $501,641.73 · Jun 1 – Aug 31, 2023
        </span>
      </div>

      {/* RIGHT — ALL CARDS */}
      <div className="ml-auto flex items-center gap-6">

        {/* FIRST 2 — BIG CARDS */}
        <div className="flex items-center gap-3">
          <TopSalesCard />
          <BestDealCard />
        </div>

        {/* LAST 3 — SMALL STAT CARDS */}
        <div className="flex items-center gap-3">
            {/* 1. Deals: Uses trend="down" for the small chevron */}
            <StatCard 
              title="Deals" 
              value="256" 
              delta="5" 
              trend="down" 
            />

            {/* 2. Value: Uses highlight={true} for red border/text */}
            <StatCard 
              title="Value" 
              value="528k" 
              delta="7.9%" 
              highlight={true} 
            />

            {/* 3. Win Rate: Default (up arrow, no highlight) */}
            <StatCard 
              title="Win rate" 
              value="44%" 
              delta="1.2%" 
            />
        </div>
      </div>
    </div>
  )
}

export default RevenueCard