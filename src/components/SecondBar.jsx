import DealsCard from "./secondBar/DealsCard";
import DealsAmount from "./secondBar/DealsAmount";
import SalesDynamic from "./secondBar/SalesDynamic";
import PlatformValue from "./secondBar/PlatformValue";

const SecondBar = () => {
  return (
    <div className="
      w-full gap-4 h-auto lg:h-full
      flex flex-col
      lg:grid lg:grid-cols-12 lg:overflow-x-hidden
    ">

      {/* LEFT SIDE */}
      <div className="w-full lg:col-span-6 flex flex-col gap-4 lg:h-full">

        {/* Top row (Deals) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DealsCard />
          <DealsAmount />
        </div>

        {/* Bottom row (Platform) */}
        <div className="h-auto lg:flex-1 lg:min-h-0">
          <PlatformValue />
        </div>

      </div>

      {/* RIGHT SIDE (Sales) */}
      {/* Updated: Changed h-full to h-auto so it expands to fit content on mobile */}
      <div className="
        w-full lg:col-span-6 
        h-auto lg:h-full lg:min-h-0
      ">
        <SalesDynamic />
      </div>

    </div>
  );
};

export default SecondBar;