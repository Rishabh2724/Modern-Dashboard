import ContributionsCard from "./FirstBar/ContributionsCard"
import NewsReportCard from "./FirstBar/NewsReportCard"
import RevenueCard from "./FirstBar/RevenueCard"
import UsersCard from "./FirstBar/UsersCard"

const FirstBar = () => {
  return (
     <div className="w-full flex flex-col gap-4">

      
      {/* USERS BAR */}
      <div className="w-full">
        <UsersCard />
      </div>

      {/* other cards */}
      <NewsReportCard   className="w-full"/>
      <RevenueCard />
      <ContributionsCard />

    </div>
  )
}

export default FirstBar
