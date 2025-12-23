import DealsCard from "./secondBar/DealsCard";
import DealsAmount from "./secondBar/DealsAmount";
import SalesDynamic from "./secondBar/SalesDynamic";
import PlatformValue from "./secondBar/PlatformValue";

const SecondBar = () => {
  return (
    // 1. Add 'gap-6' to the main grid to separate Left and Right columns
    <div className="grid grid-cols-12 w-full overflow-x-hidden">

      {/* LEFT SIDE (6 cols) */}
      {/* 2. Changed 'grid-rows-2' to 'flex flex-col' with 'gap-6'.
          This automatically handles the spacing between the Top Row and PlatformValue 
          without squishing the top row. */}
      <div className="col-span-6 flex flex-col gap-2 ">

        {/* Top row: Deals */}
        {/* 3. Add 'gap-6' here to separate the two small cards */}
        <div className="grid grid-cols-2">
          <DealsCard />
          <DealsAmount />
        </div>

        {/* Bottom row: Platform Value */}
        {/* 'flex-1' ensures it fills any remaining vertical space if needed */}
        <div className="flex-1">
            <PlatformValue />
        </div>
      </div>

      {/* RIGHT SIDE (6 cols) */}
      <div className="col-span-6">
        {/* Ensure SalesDynamic takes full height to match the Left Side */}
        <div className="h-full">
            <SalesDynamic />
        </div>
      </div>

    </div>
  );
};

export default SecondBar;