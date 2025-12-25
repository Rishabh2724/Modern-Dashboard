import React from "react";
import { ChevronUp } from "lucide-react";

import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";

import dribbble from "../../assets/dribble.png";
import instagram from "../../assets/instagram.svg";
import google from "../../assets/google.svg";
import behance from "../../assets/behance.svg";
import bag from "../../assets/bag.png";

import Sales from "../Sales.jsx";

/* ================= GRID CONFIGURATION ================= */

/* DESKTOP: Your original precise grid (Used only on lg screens and up) */
const desktopGrid =
  "lg:grid lg:grid-cols-[1.6fr_1.2fr_0.55fr_0.55fr_0.7fr_1fr_0.4fr] lg:items-center lg:gap-0";

/* MOBILE: Flex column (Cards) */
const mobileCard = "flex flex-col gap-3 p-4 lg:p-1.5";

const SalesDynamic = () => {
  return (
    <div className="ml-2 mr-2 rounded-3xl px-4 w-full shadow-sm bg-white pb-4">
      
      {/* ================= HEADER ================= */}
      {/* Hidden on Mobile (Card view doesn't need headers), Visible on Desktop */}
      <div
        className={`
          hidden ${desktopGrid} 
          text-xs text-gray-400 mb-2 mt-4 px-2
        `}
      >
        <span className="text-gray-900">Sales</span>
        <span>Revenue</span>
        <span className="col-span-2">Leads</span>
        <span>KPI</span>
        <span>W/L</span>
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

      {/* ================= USER ROW 2 (EXPANDED) ================= */}
      <UserBlock>
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

        {/* TAG PILLS */}
        <div className="flex flex-wrap gap-2 my-3 mx-4 lg:mx-3">
          <Tag text="Top sales 💪" />
          <Tag text="Sales streak 🔥" />
          <Tag text="Top review 👍" />
        </div>

        {/* WORK WITH PLATFORMS */}
        <div className="rounded-2xl p-4">
          <div className="flex justify-between items-center mb-3">
            <p className="font-semibold text-gray-800">
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

          {/* PLATFORM GRID FIX:
             Mobile: Simple Vertical Stack (flex-col) - No collision possible.
             Desktop: Your original 4x4 Grid.
          */}
          <div className="w-full">
            <div className="flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-4 gap-2 lg:h-48">

              {/* Dribbble */}
              <div className="lg:col-span-2 lg:row-span-4 bg-white rounded-2xl p-4 lg:p-2 flex flex-col justify-between min-h-[100px]">
                <div className="flex items-center gap-2">
                  <img src={dribbble} className="w-5 h-5" />
                  <span className="text-xs font-medium">Dribbble</span>
                </div>
                <div className="mt-2 lg:mt-0">
                  <span className="text-3xl font-semibold">45.3%</span>
                  <span className="text-gray-400 text-xl ml-2">$71,048</span>
                </div>
              </div>

              {/* Instagram */}
              <div className="lg:col-span-1 lg:row-span-3 bg-white rounded-2xl px-3 py-3 lg:py-2 flex flex-row lg:flex-col justify-between items-center lg:items-start">
                <div className="flex items-center gap-2 lg:mb-2">
                  <img src={instagram} className="w-4 h-4" />
                  <span className="text-[12px] font-medium">Instagram</span>
                </div>
                <div>
                  <span className="text-xs font-semibold">28.1%</span>
                  <span className="text-gray-400 text-[12px] ml-2 lg:hidden xl:inline">
                    $44,072
                  </span>
                </div>
              </div>

              {/* Google */}
              <div className="lg:col-span-1 lg:row-span-2 bg-white rounded-2xl px-3 py-3 lg:py-2 flex flex-row lg:flex-col justify-between items-center lg:items-start">
                <div className="flex items-center gap-2">
                  <img src={google} className="w-4 h-4" />
                  <span className="text-[12px] font-medium">Google</span>
                </div>
                <div>
                  <span className="text-xs font-semibold">14.1%</span>
                   <span className="text-gray-400 text-[12px] ml-2 lg:hidden xl:inline">
                    $22,114
                  </span>
                </div>
              </div>

              {/* Behance */}
              <div className="lg:col-span-1 lg:row-span-1 bg-white rounded-2xl px-3 py-3 lg:py-0 flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2">
                  <img src={behance} className="w-4 h-4" />
                  <span className="text-[12px] font-medium lg:hidden">Behance</span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="text-[12px] font-semibold">5.4%</span>
                  <span className="text-gray-400 text-[12px] lg:hidden xl:inline">
                    $8,469
                  </span>
                </div>
              </div>

              {/* Other */}
              <div className="lg:col-span-2 lg:row-span-1 bg-white rounded-2xl px-3 py-3 lg:py-0 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={bag} className="w-5 h-5" />
                  <span className="text-xs font-medium">Other</span>
                </div>
                <div>
                  <span className="text-xs font-semibold">7.1%</span>
                  <span className="text-gray-400 text-xs ml-2">$11,135</span>
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

/* ================= USER ROW COMPONENT ================= */

const UserRow = ({
  img, name, revenue, leads, deals, kpi, wl, wins, loss, dropdown, expanded
}) => (
  <div
    className={`
      ${mobileCard}   /* Mobile: Stacked Card */
      ${desktopGrid}  /* Desktop: 7-Col Grid */
      
      text-xs text-gray-700
      ${expanded
        ? "rounded-3xl"
        : "bg-white rounded-3xl mb-2 shadow-md"}
    `}
  >
    {/* ROW HEADER: User & Action - Flex Row on Mobile */}
    <div className="flex items-center justify-between w-full lg:w-auto min-w-0">
      <div className="flex items-center gap-2">
        <img src={img} className="w-8 h-8 lg:w-7 lg:h-7 rounded-full shrink-0" />
        <span className="font-medium text-sm lg:text-xs truncate">
          {name}
        </span>
      </div>
      
      {/* Mobile-only Chevron (Shown next to name on mobile) */}
      <ChevronUp
        size={22}
        className={`lg:hidden p-1 rounded-full ${
          dropdown ? "bg-[#D62F58] text-white" : "text-gray-400"
        } ${!dropdown && "invisible"}`} 
      />
    </div>

    {/* DATA METRICS - Grid on Mobile (2 cols) / Standard on Desktop */}
    <div className="grid grid-cols-2 gap-y-3 w-full lg:contents">
      
      {/* Revenue */}
      <div className="flex flex-col lg:block">
        <span className="lg:hidden text-gray-400 text-[10px] uppercase tracking-wider mb-1">Revenue</span>
        <span className="font-semibold text-sm lg:text-xs">{revenue}</span>
      </div>

      {/* Leads/Deals */}
      <div className="flex flex-col lg:col-span-2 lg:flex-row lg:items-center gap-1">
        <span className="lg:hidden text-gray-400 text-[10px] uppercase tracking-wider mb-1">Leads/Deals</span>
        <div className="flex gap-1">
          <span className="bg-gray-900 text-white px-2.5 py-1 rounded-3xl">
            {leads}
          </span>
          <span className="bg-gray-200 text-gray-800 px-2.5 py-1 rounded-3xl">
            {deals}
          </span>
        </div>
      </div>

      {/* KPI */}
      <div className="flex flex-col lg:block">
        <span className="lg:hidden text-gray-400 text-[10px] uppercase tracking-wider mb-1">KPI</span>
        <span>{kpi}</span>
      </div>

      {/* Win/Loss */}
      <div className="flex flex-col lg:block">
        <span className="lg:hidden text-gray-400 text-[10px] uppercase tracking-wider mb-1">Win / Loss</span>
        <div className="flex items-center gap-1">
          <span>{wl}</span>
          <span className="bg-black text-white px-1.5 py-0.5 rounded-3xl">
            {wins}
          </span>
          <span className="bg-gray-200 px-1.5 py-0.5 rounded-3xl">
            {loss}
          </span>
        </div>
      </div>
    </div>

    {/* Desktop-only Chevron (Grid placed) */}
    <ChevronUp
      size={22}
      className={`hidden lg:block justify-self-end p-1 mx-2 rounded-full ${
        dropdown ? "bg-[#D62F58] text-white" : "invisible"
      }`}
    />
  </div>
);

/* ================= HELPERS ================= */

const Tag = ({ text }) => (
  <div className="relative flex flex-col items-start drop-shadow-md">
    <span className="bg-white px-2 py-1.5 text-xs font-semibold rounded-xl rounded-bl-none">
      {text}
    </span>
    <svg width="8" height="8" viewBox="0 0 10 10" className="absolute -bottom-[5px] left-0 fill-white">
      <path d="M0 0 L10 0 L0 10 Z" />
    </svg>
  </div>
);

const UserBlock = ({ children }) => (
  <div className="rounded-3xl mb-4 pb-4 bg-gradient-to-l from-[#F8E8EB] via-[#F4EBF4] to-[#F5F6F6] border-b shadow-md">
    {children}
  </div>
);

export default SalesDynamic;