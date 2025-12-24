import DealsCard from "./secondBar/DealsCard";
import DealsAmount from "./secondBar/DealsAmount";
import SalesDynamic from "./secondBar/SalesDynamic";
import PlatformValue from "./secondBar/PlatformValue";

const SecondBar = () => {
  return (
    <div className="grid grid-cols-12 w-full h-full gap-4 overflow-x-hidden">

      {/* LEFT SIDE */}
      <div className="col-span-6 flex flex-col gap-4 h-full">

        {/* Top row */}
        <div className="grid grid-cols-2 gap-4">
          <DealsCard />
          <DealsAmount />
        </div>

        {/* Bottom row */}
        <div className="flex-1 min-h-0">
          <PlatformValue />
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="col-span-6 h-full min-h-0">
        <SalesDynamic />
      </div>

    </div>
  );
};

export default SecondBar;
