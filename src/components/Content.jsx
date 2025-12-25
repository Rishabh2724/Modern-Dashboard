import FirstBar from "./FirstBar"
import SecondBar from "./SecondBar"

const Content = () => {
  return (
    <div className="
      h-full w-full p-6 gap-4
      
      {/* MOBILE: Flex col, parent scrolls */}
      flex flex-col overflow-y-auto
      
      {/* DESKTOP (sm+): Grid, parent locked, specific rows */}
      sm:grid sm:grid-rows-[auto_minmax(0,1fr)] sm:overflow-hidden
    ">

      {/* First bar — fits content */}
      <div className="shrink-0">
        <FirstBar />
      </div>

      {/* Second bar */}
      {/* MOBILE: Natural height (scrolls with parent) */}
      {/* DESKTOP: Takes remaining height, internal scroll */}
      <div className="sm:min-h-0 sm:overflow-y-auto scroll-area">
        <SecondBar />
      </div>

    </div>
  )
}

export default Content