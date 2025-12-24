const Folders = () => {
  return (
    <div className="bg-[#F2EDED] h-full w-64 border-r border-gray-200">
      
      {/* SCROLL CONTAINER */}
      <div className="h-full overflow-y-auto min-h-0 p-4 text-[11px] leading-[1.35] text-black">

        {/* Header */}
        <div className="flex items-center gap-1 mb-7 text-base mt-1 font-bold text-black">
          <span>Codename.com</span>
          <ChevronDown />
        </div>

        {/* Top navigation */}
        <div className="space-y-[6px]">
          <TopItem title="Starred" icon="star" />
          <TopItem title="Recent" icon="recent" />
          <Item title="Sales list" />
          <Item title="Goals" />

          <div className="flex items-center justify-between py-[3px] font-semibold">
            <span className="px-2">Dashboard</span>
            <PlusCircle />
          </div>
        </div>

        {/* TREE */}
        <div className="ml-2 border-l border-gray-300 pl-3 mt-[3px]">
          <TreeItem title="Codename" />
          <TreeItem title="Shared with me" caret />

          <div className="relative ml-3 border-l border-gray-300 pl-3 mt-[3px]">
            <TreeItem title="Cargo2go" />
            <TreeItem title="Cloudz3r" badge={2} />
            <TreeItem title="Idioma" />
            <TreeItem title="Syllables" />
            <TreeItem title="x-0b" last />
            <TreeEnd />
          </div>
        </div>

        {/* Reports */}
        <div className="flex items-center justify-between mt-3 py-[3px] font-semibold">
          <span className="px-2">Reports</span>
          <PlusCircle />
        </div>

        <div className="ml-2 border-l border-gray-300 pl-3 mt-[3px]">
          <TreeItem title="Share with me" caret />

          <div className="relative ml-3 border-l border-gray-300 pl-3 mt-[3px]">
            <TreeItem title="Deals by user" />
            <TreeItem title="Deal duration" last />
            <TreeEnd />
          </div>

          <TreeItem title="My reports" caret className="mt-[3px]" />

          <div className="relative ml-3 border-l border-gray-300 pl-3 mt-[3px]">
            <TreeItem title="Emails received" />
            <TreeItem title="Deal duration" />
            <TreeItem title="New report" pink />
            <TreeItem title="Analytics" badge={7} last />
            <TreeEnd />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-3 pt-2 border-t flex items-center gap-2 text-[11px] text-gray-500 font-semibold">
          <LinkIcon size={16} />
          <span>Manage folders</span>
        </div>

      </div>
    </div>
  );
};

/* ───────── Components ───────── */

const TopItem = ({ title, icon }) => (
  <div className="flex items-center gap-2 px-2 py-[3px] cursor-pointer text-gray-500 font-semibold">
    {icon === "star" && (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.11a.563.563 0 00.475.345l5.518.442c.5.04.701.663.32.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385c.116.486-.415.86-.84.597L12 18.354l-4.737 2.771c-.425.263-.956-.111-.84-.597l1.285-5.385a.563.563 0 00-.182-.557L3.322 10.384c-.38-.325-.18-.948.32-.988l5.518-.442a.563.563 0 00.475-.345l2.125-5.11z" />
      </svg>
    )}

    {icon === "recent" && (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
      </svg>
    )}

    <span>{title}</span>
  </div>
);

const Item = ({ title }) => (
  <div className="px-2 py-[3px] cursor-pointer hover:bg-gray-100 rounded font-semibold">
    {title}
  </div>
);

const TreeItem = ({ title, badge, caret, last,pink, className = "" }) => (
  <div className={`relative flex items-center justify-between py-[4px] ${className}`}>
    <span className="absolute -left-3 top-1/2 w-3 border-t border-gray-300" />

    {last && (
      <span className="absolute -left-3 top-1/2 h-full w-px bg-[#F2EDED]" />
    )}

    <div className="flex items-center justify-between w-full">
      <span className={`font-semibold ${pink ? 'text-[#d9264d]' : ''}`}>{title}</span>
      {caret && <ChevronUp />}
    </div>

    {badge && (
      <span className="bg-pink-500 text-white text-[9.5px] px-1.5 rounded-full font-semibold">
        {badge}
      </span>
    )}
  </div>
);

const TreeEnd = () => (
  <span className="absolute left-[-1px] bottom-0 h-3 w-px bg-[#F2EDED]" />
);

const LinkIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="11" y="3" width="8" height="8" rx="2" />
    <rect x="7" y="7" width="8" height="8" rx="2" fill="#F2EDED" />
    <rect x="3" y="11" width="8" height="8" rx="2" fill="#F2EDED" />
  </svg>
);

const PlusCircle = () => (
  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white text-gray-400 text-[17px] leading-none">
    +
  </span>
);

const ChevronDown = () => (
  <svg className="w-5 h-5 mt-[1px] text-gray-500" viewBox="0 0 20 20" fill="none"
    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8l4 4 4-4" />
  </svg>
);

const ChevronUp = () => (
  <svg className="w-3 h-3 mt-[1px]" viewBox="0 0 20 20" fill="none"
    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 12l4-4 4 4" />
  </svg>
);

export default Folders;
