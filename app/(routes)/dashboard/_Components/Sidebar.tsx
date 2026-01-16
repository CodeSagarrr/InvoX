import { navItems, section } from "@/lib/dummyData";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideBarTopNav from "./SideBarTopNav";

function Sidebar() {
  const { user }: any = useKindeBrowserClient();

  return (
    <main className="w-72 fixed h-screen shadow-sm p-3">
      {/* Popover navs */}
      <div>
        <SideBarTopNav user={user} />
      </div>

      {/* Nav of dashboards */}

      <div className="max-w-full flex flex-col gap-2 px-2 py-4">
        {navItems.map((nav) => (
          <div key={nav.id} className="flex gap-2 items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 cursor-pointer px-2 py-2 rounded-md transition-all">
            <nav.icon className="w-5 h-5 text-gray-600" />
            <p className="text-[16px] font-[geom]">{nav.label}</p>
          </div>
        ))}
      </div>

      {/* Down-nav of sidebar */}

      <div className="px-2 mt-28">
        {section.map((curr) => (
          <div
            key={curr.id}
            className="flex p-1.5 cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded-md items-center gap-2 transition-all"
          >
            <curr.icon className="w-5 h-5" />
            <span className=" text-[16px] font-[geom]">{curr.name}</span>
          </div>
        ))}
      </div>
      <div className="px-2 mt-4">
        <button className="w-full  cursor-pointer text-zinc-100 hover:text-zinc-50 flex gap-2 items-center bg-orange-400 px-4 py-2 rounded-lg font-medium text-sm hover:bg-orange-500 transition-all ease-in duration-200 font-[geom] justify-between">
          Create Invoice
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </button>

        <div className="w-full h-4 rounded-lg bg-gray-300 mt-2">
          <div className="h-4 rounded-lg"></div>
        </div>
        <h2 className="mt-2 font-medium text-[13px] text-gray-700">
          <strong>5</strong> out of <strong>5</strong> files used.
        </h2>
        <p className="text-[12px] font-medium text-gray-400 mt-1">
          Upgrade your plan for unlimited files & more features Upgrad.
        </p>
      </div>
    </main>
  );
}

export default Sidebar;
