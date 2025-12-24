import React from "react";

const BestDealCard = () => {
  return (
    // w-full takes the size of the parent wrapper (130px to 180px)
    <div className="relative w-full h-[115px] flex items-center justify-center">
      
      {/* Shadow Layer */}
      <div className="absolute w-[90%] h-full bg-gray-200 rounded-2xl"></div>

      {/* Main Card */}
      <div className="w-full h-[100px] rounded-2xl bg-[#111111] text-white px-3 py-2 flex flex-col justify-between relative z-10 shadow-sm overflow-hidden">
        
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-medium text-gray-400 truncate mr-1">Best deal</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 text-gray-400 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
        </div>

        {/* Text scales: Smaller on standard screens, bigger on large (2xl) screens */}
        <span className="text-lg xl:text-2xl font-bold truncate tracking-tight">
          $42,300
        </span>

        <div className="flex items-end justify-between">
          <span className="text-[10px] xl:text-xs font-medium text-gray-300 truncate mr-1">Rolf Inc.</span>
          <button className="bg-white text-black rounded-lg w-5 h-5 flex items-center justify-center hover:bg-gray-100 transition-colors shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestDealCard;