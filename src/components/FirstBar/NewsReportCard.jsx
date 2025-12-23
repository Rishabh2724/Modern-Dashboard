import { ChevronDown } from 'lucide-react'
import React from 'react'

const NewsReportCard = () => {
  return (
    <div className="w-full flex items-center min-w-0">

      {/* LEFT — TITLE */}
        <h1 className="text-[32px] font-semibold text-gray-300 leading-none">
        New report
        </h1>

      {/* RIGHT — CONTROLS */}
      <div className="ml-auto flex items-center gap-3">

        {/* Toggle */}
        <button className="w-9 h-5 rounded-full bg-black flex items-center px-0.5">
          <span className="w-4 h-4 bg-white rounded-full translate-x-4 transition" />
        </button>

        {/* Timeframe label */}
        <span className="text-xs font-medium text-gray-600">
          Timeframe
        </span>

        {/* Date range */}
        <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-full text-xs font-medium text-gray-800 bg-gray-200 hover:bg-gray-50">
          Sep 1 – Nov 30, 2025
          <ChevronDown size={14} />
        </button>

      </div>
    </div>
  )
}

export default NewsReportCard
