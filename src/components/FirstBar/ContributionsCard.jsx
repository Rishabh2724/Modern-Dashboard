import user1 from "../../assets/user1.png"
import user2 from "../../assets/user2.png"
import user3 from "../../assets/user3.png"

const MIN_WIDTH = 15

const rawContributions = [
  {
    id: 1,
    img: user1,
    amount: "$209,633",
    percent: 39.63,
  },
  {
    id: 2,
    img: user2,
    amount: "$156,841",
    percent: 29.65,
  },
  {
    id: 3,
    img: user3,
    amount: "$117,115",
    percent: 22.14,
  },
  {
    id: 4,
    logo: "C",
    amount: "$45,386",
    percent: 8.58,
  },
]

/* ---------- WIDTH CALCULATION (MIN = 15%) ---------- */
const calculateWidths = (data) => {
  const belowMin = data.filter(d => d.percent < MIN_WIDTH)
  const aboveMin = data.filter(d => d.percent >= MIN_WIDTH)

  const extraWidth = belowMin.reduce(
    (sum, d) => sum + (MIN_WIDTH - d.percent),
    0
  )

  const aboveTotal = aboveMin.reduce(
    (sum, d) => sum + d.percent,
    0
  )

  return data.map(item => {
    if (item.percent < MIN_WIDTH) {
      return { ...item, width: MIN_WIDTH }
    }

    const reduction = (item.percent / aboveTotal) * extraWidth

    return {
      ...item,
      width: +(item.percent - reduction).toFixed(2),
    }
  })
}

const ContributionsBar = () => {
  const contributions = calculateWidths(rawContributions)

  return (
    <div className="w-full flex items-center gap-2">

      {/* BAR */}
      <div className="flex flex-1 bg-gray-100 rounded-full p-1 overflow-hidden">
        {contributions.map(item => (
          <div
            key={item.id}
            style={{ width: `${item.width}%` }}
            // Added justify-center for mobile (when only image shows) and justify-between for desktop
            className="flex items-center justify-center sm:justify-between bg-white rounded-full mx-[2px] px-2 py-1"
          >
            {/* LEFT */}
            <div className="flex items-center gap-1.5 min-w-0">
              {item.img ? (
                <img
                  src={item.img}
                  alt=""
                  className="w-[18px] h-[18px] rounded-full object-cover"
                />
              ) : (
                <div className="w-[18px] h-[18px] rounded-full bg-black text-white flex items-center justify-center text-[10px] font-semibold">
                  C
                </div>
              )}

              {/* AMOUNT: Hidden on mobile, visible on sm+ */}
              <span className="hidden sm:block text-[13px] font-semibold text-black truncate">
                {item.amount}
              </span>
            </div>

            {/* RIGHT (PERCENTAGE): Hidden on mobile, visible on sm+ */}
            <span className="hidden sm:block text-[12px] font-medium text-gray-500">
              {item.percent.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>

      {/* DETAILS */}
      <button className="px-5 py-2 rounded-full bg-black text-white text-sm font-semibold">
        Details
      </button>
    </div>
  )
}

export default ContributionsBar