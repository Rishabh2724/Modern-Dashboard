import React from "react";
import userImg from "../assets/user1.png";

const TopSalesCard = () => {
  return (
    // Outer container (SAME as BestDealCard)
    <div className="relative w-[180px] h-[115px] flex items-center justify-center">

      {/* Background stacked card (SAME proportions) */}
      <div className="absolute w-[90%] h-full bg-gray-200 rounded-2xl"></div>

      {/* Main white card */}
      <div className="w-full h-[100px] rounded-2xl bg-white border border-gray-200 px-4 py-3 flex flex-col justify-between relative z-10">
        
        <span className="text-xs font-medium text-gray-500">
          Top sales
        </span>

        <span className="text-2xl font-bold text-black">
          72
        </span>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={userImg}
              alt="Mikasa"
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-700">
              Mikasa
            </span>
          </div>

          <button className="bg-gray-100 text-gray-700 rounded-lg w-5 h-5  flex items-center justify-center hover:bg-gray-200 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default TopSalesCard;
