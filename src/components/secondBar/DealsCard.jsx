import React from "react";
import { ChevronDown } from "lucide-react";

import dribbleIcon from "../../assets/dribble.png";
import instagramIcon from "../../assets/instagram.svg";
import behanceIcon from "../../assets/behance.svg";
import googleIcon from "../../assets/google.svg";

const platforms = [
  { name: "Dribbble", amount: "$227,459", percent: "43%", icon: dribbleIcon },
  { name: "Instagram", amount: "$142,823", percent: "27%", icon: instagramIcon },
  { name: "Behance", amount: "$89,935", percent: "11%", icon: behanceIcon },
  { name: "Google", amount: "$37,028", percent: "7%", icon: googleIcon },
];

const DealsCard = () => {
  return (
    <div className="bg-[#EFEFEF] rounded-[30px] p-4   ">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          >
            <path d="m3 16 4 4 4-4" />
            <path d="M7 20V4" />
            <path d="M11 4h10" />
            <path d="M11 8h7" />
            <path d="M11 12h4" />
          </svg>
          <ChevronDown size={16} className="text-gray-700" />
        </div>

        <button className="flex items-center gap-2 px-4 py-1.5 rounded-xl border border-gray-300 mb-1">
          <span className="text-[14px] font-medium text-gray-800">
            Filters
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
          >
            <g stroke="#5e5e5e" strokeWidth="3" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="7" y1="12" x2="17" y2="12" />
              <line x1="11" y1="18" x2="13" y2="18" />
            </g>
          </svg>
        </button>
      </div>

      {/* List */}
      <div className="space-y-1.5">
        {platforms.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between bg-white rounded-xl px-3 py-3"
          >
            <div className="flex items-center gap-2">
              <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
              <span className="hidden min-[1540px]:inline text-sm font-medium text-gray-400">
  {item.name}
</span>

            </div>

            <div className="flex items-center gap-2 min-[1540px]:gap-2 gap-1.5">
              <span className="text-sm font-semibold text-gray-900">
                {item.amount}
              </span>
              <span className="text-[11px] px-2 py-[2px] rounded-full bg-gray-100 text-gray-600">
                {item.percent}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsCard;
