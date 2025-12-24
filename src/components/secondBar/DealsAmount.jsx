import { ChevronDown } from "lucide-react";

import dribbleIcon from "../../assets/dribble.png";
import instagramIcon from "../../assets/instagram.svg";
import behanceIcon from "../../assets/behance.svg";
import googleIcon from "../../assets/google.svg";
import bag from "../../assets/bag.png"
const bars = [
  { name: "Behance", value: 55, icon: behanceIcon },
  { name: "Dribbble", value: 90, icon: dribbleIcon },
  { name: "Google", value: 40, icon: googleIcon },
  { name: "Instagram", value: 45, icon: instagramIcon },
  { name: "Other", value: 75, striped: true },
];

const DealsAmount = () => {
  return (
    <div className="bg-[#EFEFEF] rounded-[30px] p-2 mx-1">
      
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between mt-2">
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

        <button className="flex items-center gap-2 px-4 py-1.5 rounded-xl border border-gray-300">
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

      {/* ================= BAR CHART ================= */}
      <div className="mt-2">
        <div className="h-[160px] flex items-end justify-between px-2">
          {bars.map((bar) => (
            <div
  key={bar.name}
  className="
    h-full flex items-end
    w-11
    max-[1539px]:w-10
    max-[1439px]:w-9
    max-[1359px]:w-8
  "
>
              <div
                className={`relative w-full rounded-xl ${
                  bar.striped ? "bg-gray-100 overflow-hidden" : "bg-white"
                }`}
                style={{
                  height: `${bar.value}%`,
                  minHeight: "48px",
                }}
              >
                {bar.striped && (
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#e5e7eb_0px,#e5e7eb_6px,#f9fafb_6px,#f9fafb_12px)]" />
                )}

                {bar.icon ? (
                  <img
                    src={bar.icon}
                    alt={bar.name}
                    className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-6 object-contain"
                  />
                ) : (
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <img src={bag} className="w-6 h-6"/>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ================= FOOTER ================= */}
          <div className="my-2 mx-2 pt-3  text-sm leading-tight">
          <p className="text-gray-800">Deals amount</p>
          <p className="flex items-center gap-1 text-[14px] font-normal text-gray-500">
            by referrer category
            <ChevronDown size={14} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default DealsAmount;
