import DealsCard from "./secondBar/DealsCard";
import DealsAmount from "./secondBar/DealsAmount";
import SalesDynamic from "./secondBar/SalesDynamic";
import PlatformValue from "./secondBar/PlatformValue";

const SecondBar = () => {
  return (
    <div className="
      w-full h-full gap-4
      {/* MOBILE: Flex Column (stack vertically) */}
      flex flex-col
      {/* DESKTOP (Large screens): Grid 12 columns */}
      lg:grid lg:grid-cols-12 lg:overflow-x-hidden
    ">

      {/* LEFT SIDE */}
      <div className="w-full lg:col-span-6 flex flex-col gap-4 lg:h-full">

        {/* Top row (Deals) */}
        {/* Mobile: Stack on very small screens, side-by-side on tablet+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DealsCard />
          <DealsAmount />
        </div>

        {/* Bottom row (Platform) */}
        {/* Mobile: Fixed height so it shows. Desktop: Flex-1 to fill space */}
        <div className="h-[300px] lg:h-auto lg:flex-1 lg:min-h-0">
          <PlatformValue />
        </div>

      </div>

      {/* RIGHT SIDE (Sales) */}
      {/* Mobile: Fixed height. Desktop: Fill height */}
      <div className="w-full h-[400px] lg:col-span-6 lg:h-full lg:min-h-0">
        <SalesDynamic />
      </div>

    </div>
  );
};

export default SecondBar;