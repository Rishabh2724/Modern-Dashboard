import ContributionsCard from "./FirstBar/ContributionsCard"
import NewsReportCard from "./FirstBar/NewsReportCard"
import RevenueCard from "./FirstBar/RevenueCard"
import UsersCard from "./FirstBar/UsersCard"

const FirstBar = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      
      {/* USERS BAR */}
      <UsersCard />

      {/* other cards */}
      <NewsReportCard />
      <RevenueCard />
      <ContributionsCard />

    </div>
  )
}

export default FirstBar

