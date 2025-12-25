import React from "react";
import userImg from "../assets/user1.png";

const TopSalesCard = () => {
  return (
    <div className="relative w-full h-[115px] flex items-center justify-center">

      {/* Shadow Layer */}
      <div className="absolute w-[90%] h-full bg-gray-200 rounded-2xl"></div>

      {/* Main Card */}
      <div className="w-full h-[100px] rounded-2xl bg-white border border-gray-200 px-3 py-2 flex flex-col justify-between relative z-10 shadow-sm overflow-hidden">
        
        <span className="text-[10px] max-[1000px]:text-[14px] font-medium text-gray-500 truncate">
          Top sales
        </span>

        <span className="text-xl xl:text-2xl font-bold text-black leading-none">
          72
        </span>

        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-1.5 overflow-hidden">
            <img
              src={userImg}
              alt="User"
              className="w-5 h-5 rounded-full object-cover shrink-0"
            />
            <span className="text-[10px] xl:text-xs font-medium text-gray-700 truncate">
              Mikasa
            </span>
          </div>

          <button className="bg-gray-100 text-gray-700 rounded-lg w-5 h-5 flex items-center justify-center hover:bg-gray-200 transition-colors shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default TopSalesCard;