import FirstBar from "./FirstBar"
import SecondBar from "./SecondBar"

const Content = () => {
  return (
    <div className="h-full w-full grid grid-rows-[4.9fr_6fr] p-6 gap-4 overflow-hidden">

      {/* First bar — 40% */}
      <div className="min-h-0 overflow-hidden">
        <FirstBar />
      </div>

      {/* Second bar — 60% (SCROLLS) */}
      <div className="min-h-0 overflow-y-auto scroll-area">
        <SecondBar />
      </div>

    </div>
  )
}

export default Content
