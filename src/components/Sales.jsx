import React from "react";
import { ArrowUpRight, ArrowUp, ArrowDown, Star } from "lucide-react";

import behance from "../assets/behance.svg";
import dribbble from "../assets/dribble.png";
import google from "../assets/google.svg";

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

const events = [
  { index: 1, icon: behance, badge: "up", color: "bg-rose-500" },
  { index: 3, icon: dribbble, badge: "down", color: "bg-gray-900" },
  { index: 5, icon: google, badge: "star", color: "bg-rose-500" },
];

// Generates a smooth Cubic Bezier path string from data points
const createCurve = (data) => {
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    // Map value (20-70 range) to Y coordinate (45-5 range for SVG)
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

    // Control points for smooth interpolation
    const cp1x = p1.x + (p2.x - p0.x) * 0.15;
    const cp1y = p1.y + (p2.y - p0.y) * 0.15;
    const cp2x = p2.x - (p3.x - p1.x) * 0.15;
    const cp2y = p2.y - (p3.y - p1.y) * 0.15;

    d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
  }
  return d;
};

const Sales = () => {
  const salesPath = createCurve(salesData);
  const benchmarkPath = createCurve(benchmarkData);
  
  // Calculate segments for the bottom gradient line
  const timelineSegments = [];
  let currentIndex = 0;
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

  const getPos = (idx) => (idx / (salesData.length - 1)) * 100;

  return (
    <div className="w-full p-4 rounded-3xl shadow-sm font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-base font-bold text-gray-900">Sales dynamic</p>
        <ArrowUpRight size={20} className="text-gray-900" />
      </div>

      {/* Chart Container */}
      <div className="relative h-[120px] w-full">
        
        {/* X-Axis Labels */}
        <div className="absolute top-0 left-0 right-0 flex justify-between text-xs font-medium text-gray-400 z-10">
          {salesData.map((d) => (
            <span key={d.week} className="w-6 text-center">{d.week}</span>
          ))}
        </div>

        {/* Main Chart SVG */}
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

          {/* Benchmark Line (Dashed) */}
          <path
            d={benchmarkPath}
            fill="none"
            stroke="#fca5a5"
            strokeWidth="0.5"
            strokeDasharray="2 1"
          />

          {/* Sales Line (Solid) */}
          <path
            d={salesPath}
            fill="none"
            stroke="#dc2626"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
        </svg>

        {/* Bottom Timeline with Icons */}
        <div className="absolute -bottom-1 left-0 right-0 h-8">
            
            {/* Gradient Line Segments */}
            {timelineSegments.map((seg, i) => {
                const left = getPos(seg.start);
                const right = getPos(seg.end);
                const width = right - left;
                
                // Gap creates visual spacing around the icon nodes
                const gap = 3; 

                return (
                  <div
                    key={i}
                    className={`absolute h-1.5 rounded-full bg-gradient-to-r ${seg.color}`}
                    style={{
                        left: `${i === 0 ? left : left + gap}%`,
                        width: `${width - (i === 0 ? gap : gap * 2)}%`,
                        bottom: "4px"
                    }}
                  />
                );
            })}

            {/* Event Icons */}
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
                  <div className={`absolute -top-2 -right-0.5 w-3 h-3 rounded-full ${color} flex items-center justify-center z-30`}>
                    {badge === "up" && <ArrowUp size={8} className="text-white" strokeWidth={4} />}
                    {badge === "down" && <ArrowDown size={8} className="text-white" strokeWidth={4} />}
                    {badge === "star" && <Star size={6} className="text-white fill-white" />}
                  </div>

                  <div className="w-5 h-5 flex items-center justify-center relative z-20">
                    <img 
                      src={icon} 
                      alt="" 
                      // Responsive margin: mr-3 on mobile, removed on xl screens
                      className="w-5 h-5 mr-3 xl:mr-0 object-contain" 
                    />
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