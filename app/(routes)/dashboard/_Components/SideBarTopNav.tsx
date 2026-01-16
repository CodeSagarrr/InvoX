"use client"
import React,{memo} from "react";
import { ChevronDown, LogOut } from "lucide-react";
import Logo from "../../../../components/ui/Logo";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SubNavItems } from "@/lib/dummyData";
import { Separator } from "@/components/ui/separator";
import {
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

function SideBarTopNav({ user }:any) {
  return (
    <div>
         <Popover>
        <PopoverTrigger>
          <div className="relative max-w-80 flex items-center justify-between hover:bg-gray-100 rounded-lg pl-1 pr-3 cursor-pointer transition-all">
            <div className="flex gap-1 items-center">
              <Logo width={48} heigth={48} />
              <h1 className="text-xl font-[geom] font-semibold">
                Invo<span className="text-orange-400">X</span>
              </h1>
            </div>
            <div>
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
          <hr className="w-64 mx-auto mt-2 text-gray-200" />
        </PopoverTrigger>
        <PopoverContent className="ml-8">
          <h3 className="font-semibold font-[geom] text-gray-900 mb-2 ml-1 text-lg">
            {" "}
            Quick Actions
          </h3>
          <Separator className="my-2" />
          {SubNavItems.map((nav) => (
            <div
              key={nav.id}
              className="flex p-2 cursor-pointer hover:bg-gray-100 rounded-md items-center gap-2 transition-all"
            >
              <nav.icon className="w-5 h-5 text-gray-700" />
              <span className="font-medium text-gray-700 ">
                {nav.label}
              </span>
            </div>
          ))}
          <LogoutLink>
            <span className="flex items-center gap-2 font-semibold hover:text-red-500 text-gray-700 p-2 hover:bg-gray-100 rounded-md transition duration-100 ease-in">
              <LogOut className="w-5 h-5 hover:text-red-500" /> Logout
            </span>
          </LogoutLink>
          <Separator className="my-2" />

          <div className="flex gap-2 items-center">
            <Image
              src={user?.picture}
              alt="Logo"
              width={45}
              height={45}
              referrerPolicy="no-referrer"
              unoptimized
              className="rounded-full"
            />
            <div className="flex flex-col ml-1">
              <span className="text-[16px] font-semibold font-[ubuntu]">
                {user?.given_name} {user?.family_name}
              </span>
              <span className="text-[12px] text-medium text-gray-400">
                {user?.email}
              </span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default memo(SideBarTopNav)