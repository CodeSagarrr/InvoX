"use client";
import React, { createContext, useContext} from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserProfileData } from "@/lib/api";

export interface userProfileProps {
  message : string;
  id: string;
  name: string;
  email: string;
  logo: string;
  businessName: string;
  gstNumber: string;
  pan: string;
  address: string;
  plan: "FREE" | "PRO";
  invoiceCount: number;
  createdAt: Date;
}

interface AppContextType {
  currentUser: userProfileProps | undefined;
}

const AppContext = createContext<AppContextType>({ currentUser: undefined });



export const AppContextProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {


  const { data : currentUser } = useQuery({ queryKey : ["currentUser"] , queryFn : async() => await getUserProfileData() });

  return (
    <AppContext.Provider value={{ currentUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
