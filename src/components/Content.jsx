import FirstBar from "./FirstBar"
import SecondBar from "./SecondBar"

const Content = () => {
  return (
    <div className="h-full w-full grid grid-rows-[auto_minmax(0,1fr)] gap-4 overflow-hidden p-6">

      {/* First bar — fits content */}
      <div>
        <FirstBar />
      </div>

      {/* Second bar — takes remaining height */}
      <div className="min-h-0 overflow-y-auto scroll-area">
        <SecondBar />
      </div>

    </div>
  )
}

export default Content
