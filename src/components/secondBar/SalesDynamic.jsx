import React from "react";
import { ChevronUp, ArrowUpRight } from "lucide-react";

import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";

import dribbble from "../../assets/dribble.png";
import instagram from "../../assets/instagram.svg";
import google from "../../assets/google.svg";
import behance from "../../assets/behance.svg"
import bag from "../../assets/bag.png"
import Sales from "../Sales.jsx";
/* ===== shared grid columns ===== */
const gridCols =
  "grid grid-cols-[1.6fr_1.2fr_0.55fr_0.55fr_0.7fr_1fr_0.4fr] items-center";

const SalesDynamic = () => {
  return (
    <div className="ml-2 mr-2 rounded-3xl px-4 w-full shadow-sm">

      {/* ================= HEADER ================= */}
      <div className={`${gridCols} text-xs text-gray-400 mb-2 px-2`}>
  <span className="text-gray-900">Sales</span>
  <span>Revenue</span>
  <span className="col-span-2">Leads</span>
  <span>KPI</span>
  <span>W/L</span>
  <span />
  <span />
  <span />
</div>


      {/* ================= USER ROW 1 ================= */}
      <UserRow
        img={user1}
        name="Armin A."
        revenue="$209,633"
        leads="41"
        deals="118"
        kpi="0.84"
        wl="31%"
        wins="12"
        loss="29"
      />

      {/* ================= USER ROW 2 ================= */}
    <UserBlock >
      <UserRow
        img={user2}
        name="Mikasa A."
        revenue="$156,841"
        leads="54"
        deals="103"
        kpi="0.89"
        wl="39%"
        wins="21"
        loss="33"
        dropdown
        expanded
      />

      {/* ================= TAG PILLS ================= */}
      <div className="flex gap-2 my-3 mx-3">
        <Tag text="Top sales 💪" />
        <Tag text="Sales streak 🔥" />
        <Tag text="Top review 👍" />
      </div>

      {/* ================= WORK WITH PLATFORMS ================= */}
      <div className=" rounded-2xl p-4">
        <div className="flex justify-between items-center mb-3">
          <p className=" font-semibold text-gray-800">
            Work with platforms
          </p>

          <div className="flex items-center gap-2">
            <span className="bg-[#D62F58] text-white text-xs px-2 py-1 rounded-full">
              ↑ 3
            </span>
            <span className="bg-[#D62F58] text-white text-xs px-3 py-1 rounded-full">
              $156,841
            </span>
          </div>
        </div>

        <div className="w-full aspect-[3.6/1]">
  <div className="grid grid-cols-4 grid-rows-4 gap-1 h-full">

    {/* DRIBBBLE */}
    <div className="col-span-2 row-span-4 bg-white rounded-2xl p-2 flex flex-col justify-between">
      <div className="flex items-center gap-2">
        <img src={dribbble} className="w-5 h-5" />
        <span className="text-xs font-medium">Dribbble</span>
      </div>

      <div>
        <span className="text-3xl font-semibold">45.3%</span>
        <span className="text-gray-400 text-xl ml-2">$71,048</span>
      </div>
    </div>

    {/* INSTAGRAM */}
    <div className="col-span-1 row-span-3 bg-white rounded-2xl px-3 py-2 flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">
        <img src={instagram} className="w-4 h-4" />
        <span className="text-[12px] font-medium">Instagram</span>
      </div>
      <div>
        <span className="text-[12px] font-semibold">28.1%</span>
        <span className="text-gray-400 text-[12px] ml-2">$44,072</span>
      </div>
    </div>

    {/* GOOGLE */}
    <div className="col-span-1 row-span-2 bg-white rounded-2xl px-3 py-1 flex flex-col justify-between">
      <div className="flex items-center gap-2">
        <img src={google} className="w-4 h-4" />
        <span className="text-[12px] font-medium">Google</span>
      </div>
      <div>
        <span className="text-[12px] font-semibold">14.1%</span>
        <span className="text-gray-400 text-[12px] ml-2">$22,114</span>
      </div>
    </div>

    {/* BEHANCE */}
    <div className="col-span-1 row-span-1 bg-white rounded-2xl px-3 flex flex-row items-center">
      <img src={behance} className="w-4 h-4" />
      <div>
        <span className="text-[12px] font-semibold">5.4%</span>
        <span className="text-gray-400 text-[12px] ml-2">$8,469</span>
      </div>
    </div>

    {/* OTHER */}
    <div className="col-span-2 row-span-1 bg-white rounded-2xl px-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={bag} className="w-5 h-5" />
        <span className="text-[12px] font-medium">Other</span>
      </div>
      <div>
        <span className="text-[12px] font-semibold">7.1%</span>
        <span className="text-gray-400 text-[12px] ml-2">$11,135</span>
      </div>
    </div>

  </div>
</div>
      </div>
    

      <Sales/>
    </UserBlock>  
      {/* ================= USER ROW 3 ================= */}
      <div className="mt-4">
        <UserRow
          img={user3}
          name="Eren Y."
          revenue="$117,115"
          leads="22"
          deals="84"
          kpi="0.79"
          wl="32%"
          wins="7"
          loss="15"
        />
      </div>
    </div>
  );
};

/* ================= USER ROW ================= */
const UserRow = ({
  img, name, revenue, leads, deals, kpi, wl, wins, loss, dropdown, expanded
}) => (
  <div
    className={`
      ${gridCols}
      px-1.5
      text-xs
      text-gray-700
      ${expanded
        ? "py-1.5 rounded-3xl border-gray-200"
        : "py-1.5 bg-[#ffffff] rounded-3xl mb-2 shadow-md"}
    `}
  >

    {/* User */}
    <div className="flex items-center gap-2">
      <img src={img} className="w-7 h-7 rounded-full" />
      <span className="font-medium">{name}</span>
    </div>

    {/* Revenue */}
    <span className="font-semibold text-left">{revenue}</span>

    {/* Leads */}
    <div className="col-span-2 flex items-center gap-1">
      <span className="bg-gray-900 text-white px-2.5 py-1 rounded-3xl text-xs">
        {leads}
      </span>
      <span className="bg-gray-200 text-gray-800 px-2.5 py-1 rounded-3xl text-xs">
        {deals}
      </span>
    </div>

    {/* KPI */}
    <span className="">{kpi}</span>

    {/* W/L */}
    {/* W/L combined */}
    <div className="flex items-center gap-1">
      <span className="text-xs font-medium">{wl}</span>
      <span className="bg-black text-white px-1.5 py-0.5 rounded-3xl">{wins}</span>
      <span className="bg-gray-200 px-1.5 py-0.5 rounded-3xl">{loss}</span>
    </div>

    {/* Dropdown */}
    {dropdown ? (
      <ChevronUp size={22} className="text-white bg-[#D62F58] rounded-full justify-self-end p-1 mx-2" />
    ) : (
      <span />
    )}
  </div>
);


/* ================= SPEECH BUBBLE TAG ================= */
const Tag = ({ text }) => (
  <div className="relative flex flex-col items-start drop-shadow-md filter">
    {/* Main Pill */}
    <span className="bg-white px-1.5 py-1.5 text-xs font-semibold text-gray-800 rounded-xl rounded-bl-none z-10">
      {text}
    </span>
    
    {/* The Chat Tail (Triangle) */}
    {/* We place it at the bottom-left to create the speech bubble look */}
    <svg 
      width="8" 
      height="8" 
      viewBox="0 0 10 10" 
      className="absolute -bottom-[5px] left-0 fill-white"
    >
      <path d="M0 0 L10 0 L0 10 Z" />
    </svg>
  </div>
);

const PlatformRow = ({ icon, name, percent, value, boxed }) => (
  <div className={`flex items-center justify-between px-3 py-2 rounded-xl ${boxed ? "bg-white" : "bg-gray-100"}`}>
    <div className="flex items-center gap-2">
      {icon && <img src={icon} className="w-4 h-4" />}
      <span className="text-sm">{name}</span>
    </div>
    <span className="text-xs text-gray-500">
      {percent} {value}
    </span>
  </div>
);

// const UserBlock = ({ children, expanded }) => (
//   <div
//     className={`
//       bg-[#f6f6f6]
//       rounded-2xl
//       ${expanded ? "py-4" : "py-2"}
//       transition-all
//       mb-3
//     `}
//   >
//     {children}
//   </div>
// );
const UserBlock = ({ children }) => (
  <div
    className={`
      rounded-3xl
      transition-all
      mb-4
      pb-4 bg-gradient-to-l from-[#F8E8EB] via-[#F4EBF4] to-[#F5F6F6]
      border-b shadow-md
    `}
  >
    {children}
  </div>
);

export default SalesDynamic;
