import React from "react";
import { ArrowUpRight, ArrowUp, ArrowDown, Star } from "lucide-react";

import behance from "../assets/behance.svg";
import dribbble from "../assets/dribble.png";
import google from "../assets/google.svg";

/* ================= DATA ================= */

const salesData = [
  { week: "W1", value: 32 },
  { week: "W3", value: 38 },
  { week: "W5", value: 55 },
  { week: "W7", value: 42 },
  { week: "W9", value: 48 },
  { week: "W11", value: 62 },
];

const benchmarkData = [
  { value: 45 },
  { value: 50 },
  { value: 48 },
  { value: 46 },
  { value: 52 },
  { value: 50 },
];

// Events acting as "Breaks" in the timeline
const events = [
  { index: 1, icon: behance, badge: "up", color: "bg-rose-500" },
  { index: 3, icon: dribbble, badge: "down", color: "bg-gray-900" },
  { index: 5, icon: google, badge: "star", color: "bg-rose-500" },
];

/* ================= HELPERS ================= */

const createCurve = (data) => {
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 45 - ((d.value - 20) / (70 - 20)) * 40;
    return { x, y };
  });

  if (points.length === 0) return "";
  let d = `M ${points[0].x},${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? 0 : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;

    const cp1x = p1.x + (p2.x - p0.x) * 0.15;
    const cp1y = p1.y + (p2.y - p0.y) * 0.15;
    const cp2x = p2.x - (p3.x - p1.x) * 0.15;
    const cp2y = p2.y - (p3.y - p1.y) * 0.15;

    d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
  }
  return d;
};

/* ================= COMPONENT ================= */

const Sales = () => {
  const salesPath = createCurve(salesData);
  const benchmarkPath = createCurve(benchmarkData);

  // LOGIC: Create timeline segments between the events
  // We start at index 0 and draw a line to the first event, then from event to event.
  const timelineSegments = [];
  let currentIndex = 0;

  // Define colors for the segments (Orange -> Yellow -> Green)
  const segmentColors = [
    "from-orange-400 to-orange-300",
    "from-orange-300 to-yellow-300",
    "from-yellow-300 to-green-400",
  ];

  events.forEach((event, i) => {
    timelineSegments.push({
      start: currentIndex,
      end: event.index,
      color: segmentColors[i] || "from-gray-300 to-gray-400",
    });
    currentIndex = event.index;
  });

  // Helper to convert data index to percentage position
  const getPos = (idx) => (idx / (salesData.length - 1)) * 100;

  return (
    <div className="w-full p-4 rounded-3xl  shadow-sm font-sans">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-base font-bold text-gray-900">Sales dynamic</p>
        <ArrowUpRight size={20} className="text-gray-900" />
      </div>

      {/* CHART AREA */}
      <div className="relative h-[120px] w-full">
        
        {/* X AXIS LABELS */}
        <div className="absolute top-0 left-0 right-0 flex justify-between text-xs font-medium text-gray-400 z-10">
          {salesData.map((d) => (
            <span key={d.week} className="w-6 text-center">{d.week}</span>
          ))}
        </div>

        {/* SVG CHART */}
        <svg
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full overflow-visible"
        >
          {/* Vertical Grid Lines */}
          {salesData.map((_, i) => (
             <line
               key={`grid-${i}`}
               x1={getPos(i)} y1="10"
               x2={getPos(i)} y2="50"
               stroke="#F1EBE7"
               strokeWidth="0.5"
             /> 
          ))}

          {/* Benchmark Line */}
          <path
            d={benchmarkPath}
            fill="none"
            stroke="#fca5a5"
            strokeWidth="0.5"
            strokeDasharray="2 1"
          />

          {/* Sales Line */}
          <path
            d={salesPath}
            fill="none"
            stroke="#dc2626"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
        </svg>

        {/* BOTTOM TIMELINE (BROKEN LINES & LOGOS) */}
        {/* We use a container that sits at the bottom */}
        <div className="absolute -bottom-1 left-0 right-0 h-8">
            
            {/* 1. Render the broken Line Segments */}
            {timelineSegments.map((seg, i) => {
                const left = getPos(seg.start);
                const right = getPos(seg.end);
                // Calculate width. We subtract a small amount (e.g. 4%) to leave a gap for the icon
                // except for the very start (left)
                const width = right - left;
                
                // Gap adjustment: The line shouldn't touch the center of the icon
                // We add/subtract margin to "break" it visually around the nodes
                const gap = 3; // 3% gap

                return (
                  <div
                    key={i}
                    className={`absolute h-1.5 rounded-full bg-gradient-to-r ${seg.color}`}
                    style={{
                        // If it's the first segment, start at 0. Otherwise start after the previous icon
                        left: `${i === 0 ? left : left + gap}%`,
                        // If it's the last segment (connecting to an icon at the very end), full width
                        // Otherwise stop before the next icon
                        width: `${width - (i === 0 ? gap : gap * 2)}%`,
                        bottom: "4px" // vertically align with icons
                    }}
                  />
                );
            })}

            {/* 2. Render the Icons (The "Breakages") */}
            {events.map(({ index, icon, badge, color }) => {
              const leftPos = getPos(index);
              
              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${leftPos}%`,
                    bottom: "0px", 
                    transform: "translateX(-50%)",
                    zIndex: 20
                  }}
                >
                  {/* Badge */}
                  <div 
                    className={`absolute -top-2 -right-0.5 w-3 h-3 rounded-full ${color} flex items-center justify-center z-30`}
                  >
                    {badge === "up" && <ArrowUp size={8} className="text-white" strokeWidth={4} />}
                    {badge === "down" && <ArrowDown size={8} className="text-white" strokeWidth={4} />}
                    {badge === "star" && <Star size={6} className="text-white fill-white" />}
                  </div>

                  {/* Icon */}
                  <div className="w-5 h-5  flex items-center justify-center relative z-20">
                    <img src={icon} alt="" className="w-5 h-5 mr-3 object-contain" />
                  </div>
                </div>
              );
            })}

        </div>

      </div>
    </div>
  );
};

export default Sales;