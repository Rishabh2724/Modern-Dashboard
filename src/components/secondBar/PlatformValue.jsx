import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import dribbbleIcon from "../../assets/dribble.png";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";

const PlatformValue = () => {
  const [mode, setMode] = useState("revenue");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const MAX_Y = 15000;
  const menuOptions = ["Revenue", "Leads", "W/L"];

  const chartData = [
    {
      month: "Sep",
      label: "$6901",
      users: [
        { value: 6901, avatar: user1, variant: "striped" },
        { value: 4500, avatar: user2, variant: "solid" },
        { value: 3000, avatar: user3, variant: "dark" },
      ],
    },
    {
      month: "Oct",
      label: "$11,035",
      users: [
        { value: 11035, avatar: user1, variant: "striped" },
        { value: 7000, avatar: user2, variant: "solid" },
        { value: 3500, avatar: user3, variant: "dark" },
      ],
    },
    {
      month: "Nov",
      label: "$9288",
      users: [
        { value: 9288, avatar: user1, variant: "striped" },
        { value: 8000, avatar: user2, variant: "solid" },
        { value: 2500, avatar: user3, variant: "dark" },
      ],
    },
  ];

  const gridLevels = ["$15,000", "$10,000", "$5,000", "$0"];

  const getCurrentLabel = () => {
    return menuOptions.find((opt) => opt.toLowerCase() === mode) || "Revenue";
  };

  return (
    <div className="bg-[#f3f3f3] rounded-[32px] w-full h-full overflow-hidden flex flex-col">
      {/* ================= HEADER ================= */}
      <div className="px-6 pt-6 pb-2 flex justify-between items-start shrink-0 relative z-40">
        <div className="flex items-center gap-3">
          <img src={dribbbleIcon} className="w-10 h-10" alt="Dribbble" />
          <div>
            <p className="text-[14px] font-semibold text-gray-400">
              Platform value
            </p>
            <div className="flex items-center gap-1">
              <span className="text-[16px] font-bold text-gray-900">
                Dribbble
              </span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        {/* === RIGHT SIDE CONTROLS === */}
        <div>
          {/* Mobile Dropdown */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm text-sm font-bold text-gray-900"
            >
              {getCurrentLabel()}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-100 p-1 flex flex-col gap-1 z-50">
                {menuOptions.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setMode(item.toLowerCase());
                      setIsDropdownOpen(false);
                    }}
                    className={`px-3 py-2 text-sm font-medium rounded-lg text-left w-full transition-colors
                      ${
                        mode === item.toLowerCase()
                          ? "bg-black text-white"
                          : "text-gray-500 hover:bg-gray-50"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:flex bg-white rounded-full p-1 shadow-sm">
            {menuOptions.map((item) => (
              <button
                key={item}
                onClick={() => setMode(item.toLowerCase())}
                className={`px-4 py-1.5 text-sm font-medium rounded-xl transition-all
                  ${
                    mode === item.toLowerCase()
                      ? "bg-black text-white"
                      : "text-gray-500"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BODY ================= */}
      <div className="flex flex-1 min-h-0 flex-col md:flex-row">
        {/* === AVERAGE MONTHLY === */}
        <div
          className="
            bg-[#d9264d] text-white
            md:w-[200px] max-[1439px]:md:w-[140px]
            
            /* UPDATED BORDERS HERE */
            rounded-tr-[32px] rounded-bl-[32px] md:rounded-bl-none
            
            mt-4
            px-4 py-3 md:pt-4 md:pb-6 md:pl-5 md:pr-4
            flex items-center md:items-stretch
            gap-3
          "
        >
          {/* Mobile label (left) */}
          <div className="flex items-center md:hidden min-w-[92px]">
            <span className="text-[10px] font-medium uppercase opacity-80">
              Average monthly
            </span>
          </div>

          {/* Desktop vertical label */}
          <div className="hidden md:flex w-10 h-full items-center justify-center">
            <span
              className="text-[10px] font-medium uppercase opacity-70"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Average monthly
            </span>
          </div>

          {/* Stats: row on mobile, column on desktop */}
          <div className="flex flex-1 flex-row md:flex-col justify-between md:justify-center gap-4 md:gap-6">
            {/* Revenue */}
            <div className="flex flex-col">
              <p className="text-[10px] text-pink-200 mb-0.5 font-medium">
                Revenue
              </p>
              <p className="text-base md:text-xl font-bold tracking-tight">
                $18,552
              </p>
            </div>

            {/* Leads */}
            <div className="flex flex-col">
              <p className="text-[10px] text-pink-200 mb-0.5 font-medium">
                Leads
              </p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-base md:text-lg font-bold">373</span>
                <span className="text-[10px] text-pink-200/70 font-medium">
                  97/276
                </span>
              </div>
            </div>

            {/* Win / Lose */}
            <div className="flex flex-col">
              <p className="text-[10px] text-pink-200 mb-0.5 font-medium">
                Win/lose
              </p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-base md:text-lg font-bold">16%</span>
                <span className="text-[10px] text-pink-200/70 font-medium">
                  51/318
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* === CHART === */}
        <div className="flex-1 relative pt-6 md:pt-8 pr-4 md:pr-6 pl-4 min-w-0 h-[260px] md:h-auto">
          {/* Grid */}
          <div className="absolute inset-0 flex flex-col justify-between pl-4 pr-6 pt-[50px] pb-[30px] pointer-events-none">
            {gridLevels.map((label, i) => (
              <div key={i} className="flex items-center">
                <div className="h-px flex-1 bg-gray-200/60" />
                <span className="text-[10px] text-gray-400 w-12 text-right">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Bars */}
          <div className="relative z-10 h-full flex justify-between items-end pl-2 pr-14 pb-2">
            {chartData.map((data, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex items-end gap-1 h-[160px]">
                  {data.users.map((user, j) => (
                    <div
                      key={j}
                      className={`w-6 rounded-t-md relative
                        ${user.variant === "solid" ? "bg-gray-200" : ""}
                        ${user.variant === "dark" ? "bg-gray-300" : ""}
                        ${
                          user.variant === "striped"
                            ? "border border-gray-200/50"
                            : ""
                        }`}
                      style={{
                        height: `${(user.value / MAX_Y) * 100}%`,
                        backgroundImage:
                          user.variant === "striped"
                            ? `repeating-linear-gradient(45deg, transparent, transparent 3px, #e5e7eb 3px, #e5e7eb 6px)`
                            : "none",
                      }}
                    >
                      {j === 0 && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max z-30">
                          <div className="bg-[#d9264d] text-white text-[11px] font-bold px-2 py-1 rounded-md shadow-sm">
                            {data.label}
                          </div>
                          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#d9264d]" />
                        </div>
                      )}

                      {/* Avatar */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-white overflow-hidden shadow-sm z-20 bg-white">
                        <img
                          src={user.avatar}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <span className="text-xs text-gray-400 mt-4">{data.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformValue;