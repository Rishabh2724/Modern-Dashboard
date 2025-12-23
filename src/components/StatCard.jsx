import chevronsUp from "../assets/chevronsUp.png"
import chevronsDown from "../assets/chevronsDown.png"
const StatCard = ({ title, value, delta, highlight }) => {
  const isHighlighted = highlight === true; // specific check for the red card
  const isTrendDown = highlight != true;    // specific check for the down arrow

  return (
    <div
      className={`
        w-[90px] h-[100px] rounded-2xl border-2
        flex flex-col items-center justify-center gap-1
        ${isHighlighted ? "border-rose-400" : "border-gray-300"}
      `}
    >
      {/* Title */}
      <span className="text-xs font-medium text-gray-400 text-center">
        {title}
      </span>

      {/* Value */}
      <div 
        className={`
          px-3 py-1.5 rounded-full min-w-[70px] flex justify-center mt-1
          ${isHighlighted 
            ? "bg-[#e91e63] text-white"   // Pink background, White text
            : "bg-gray-300 text-white"    // Gray background, White text
          }
        `}
      >
        <span className="text-[12px] font-semibold leading-none">
          {value}
        </span>
      </div>

      {/* Arrow + Delta Row */}
      <div className="flex items-center gap-1 text-gray-900 mt-1">
        {!isTrendDown ? (
            // BIG Arrow (Double Chevron for Up) - Default or 'value' type
            <img src={chevronsDown} className="h-5 w-5"/>
        ) : (
            // SMALL Arrow (Single Chevron for Down) - Triggered by type="down"
            <img src={chevronsUp} className="h-5 w-5"/>
        )}
        
        <span className="text-sm font-medium">
          {delta}
        </span>
      </div>
    </div>
  );
};

export default StatCard;