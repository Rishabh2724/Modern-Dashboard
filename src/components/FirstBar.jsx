import ContributionsCard from "./FirstBar/ContributionsCard"
import NewsReportCard from "./FirstBar/NewsReportCard"
import RevenueCard from "./FirstBar/RevenueCard"
import UsersCard from "./FirstBar/UsersCard"

const FirstBar = () => {
  return (
    // MOBILE: 'grid grid-cols-1' (This forces the cards to shrink and fit the mobile width properly)
    // DESKTOP (lg): 'lg:flex lg:flex-col' (Restores your original vertical stack layout)
    <div className="w-full h-auto lg:h-full gap-4 min-w-0 grid grid-cols-1 lg:flex lg:flex-col">
      
      {/* USERS BAR */}
      <div className="w-full min-w-0">
        <UsersCard />
      </div>

      {/* METRIC CARDS */}
      {/* On Mobile, these are grid items (width controlled). On Desktop, they are flex items (stacked). */}
      <NewsReportCard />
      <RevenueCard />
      <ContributionsCard />

    </div>
  )
}

export default FirstBar