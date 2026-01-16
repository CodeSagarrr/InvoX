"use client";
import { Bell } from "lucide-react";
import { useAppContext } from "@/app/Context/Context";
import Image from "next/image";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

function Client() {
  const { currentUser }: any = useAppContext();
  const { user }: any = useKindeBrowserClient();
  return (
    <section className="relative p-4">
      {/* Header */}
      <div className="float-end flex gap-2 items-center">
        <div className="flex items-center border w-80 pr-3 gap-2 bg-white border-gray-500/30 h-[36px] rounded-[5px] overflow-hidden">
          <input
            className="w-full h-full pl-5 outline-none placeholder-gray-500 text-sm"
            placeholder="Search for products"
            type="text"
          />
          <svg
            fill="#6B7280"
            viewBox="0 0 30 30"
            height="22"
            width="22"
            y="0px"
            x="0px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
        </div>
        <button className="relative p-2 hover:bg-muted rounded-lg transition-colors cursor-pointer">
          <Bell className="w-5 h-5 text-zinc-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </button>

        <div className="cursor-pointer">
          {currentUser?.logo && (
            <Image
              src={currentUser.logo || user?.picture}
              alt="avatar"
              width={40}
              height={40}
              className="object-cover rounded-full"
              referrerPolicy="no-referrer"
              unoptimized
            />
          )}
        </div>

        <button className="w-35 cursor-pointer text-zinc-100 hover:text-zinc-50 flex items-center bg-orange-400 pl-4 py-2 rounded-sm font-medium text-[13px] hover:bg-orange-500 transition-all ease-in duration-200 font-[geom]">
          Create Invoice
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
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
      </div>
    </section>
  );
}

export default Client;
