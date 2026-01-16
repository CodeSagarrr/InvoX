import { Archive, File, Flag, Github, LayoutDashboard , Origami, Send, Settings, TrendingUp, Users } from "lucide-react";

export const navItems = [
    {id : 0, icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: true },
    {id : 1, icon: File, label: "Invoices", href: "/invoices", active: false },
    {id : 2, icon: Users, label: "Clients", href: "/create-client", active: false },
    {id : 3, icon: TrendingUp, label: "Analytics", href: "/analytics", active: false },
    {id : 4, icon: Origami, label: "Send Invoice", href: "/send-to", active: false },
    {id : 5, icon: Settings, label: "Settings", href: "/settings", active: false },
  ];

  export const SubNavItems = [
    {id : 0, icon: Users, label: "Profile", href: "/profile", active: true },
    {id : 1, icon: Settings, label: "Setting", href: "#", active: false },
  ];

  export const section = [
    { id: 0, name: "Get Started", icon: Flag, path: "" },
    { id: 1, name: "Github", icon: Github, path: "" },
    { id: 2, name: "Archive", icon: Archive, path: "" },
  ]