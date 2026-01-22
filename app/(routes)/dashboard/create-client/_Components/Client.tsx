"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CLientStats } from "@/lib/dummyData"
import { ArrowUpRight, Building2, Mail, MapPin, MoreVertical, Phone, Users } from "lucide-react"
import React, { memo } from "react"

function Client() {

    return (
        <section className="relative px-2 py-4">
            {/* Headings or paragraph */}
            <div className="max-w-full flex gap-2 items-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                    <Users className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                    <h1 className="text-2xl font-semibold font-[ubuntu]">Clients Directory</h1>
                    <p className="text-sm ml-1 mt-1 text-gray-600 font-[geom]">Manage your client database and contact information.</p>
                </div>
            </div>

            {/* Client Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {
                    CLientStats.map((item) => (
                        <Card key={item.id} className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 ${item.borderColor}`}>
                            <CardContent className="px-5 ">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-md font-[geom] text-gray-600 mb-1">{item.label}</p>
                                        <p className="text-3xl font-bold text-zinc-950">{item.value}</p>
                                    </div>
                                    <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <item.icon className={`w-5 h-5 ${item.textColor}`} />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>

            {/* All CLients Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mt-6">
                <Card
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                >
                    <CardHeader className="pb-1">
                        <div className="flex items-start gap-3">
                            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-amber-400/20 to-amber-500/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                                <Building2 className="w-6 h-6 text-amber-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <CardTitle className="text-lg font-semibold font-[ubuntu] truncate">Sagar</CardTitle>
                                <CardDescription className="text-xs truncate">TVGDigital</CardDescription>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="cursor-pointer outline-none" asChild>
                                    <button className="p-2 cursor-pointer hover:bg-gray-500/30 rounded-lg transition-colors opacity-0 group-hover:opacity-100 outline-none">
                                        <MoreVertical className="w-4 h-4" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuGroup>
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem className="text-gray-500 font-medium font-[ubuntu] transition-all cursor-pointer">Edit</DropdownMenuItem>
                                        <DropdownMenuItem className="text-gray-500  font-medium font-[ubuntu] transition-all cursor-pointer">Create Invoice</DropdownMenuItem>
                                        <DropdownMenuItem className="text-red-500 font-medium font-[ubuntu] transition-all cursor-pointer">Delete</DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2 ">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="w-4 h-4 shrink-0" />
                            <span className="truncate">sv@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="w-4 h-4 shrink-0" />
                            <span>+91 8080799862</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 shrink-0" />
                            <span>Mithpada Shelar</span>
                        </div>

                        <div className="pt-4 mt-4 border-t border-border">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-muted-foreground">Total Billed</p>
                                    <p className="text-lg font-bold text-foreground">1800</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-muted-foreground">Invoices</p>
                                    <div className="flex items-center gap-1">
                                        <span className="text-lg font-bold text-foreground">62</span>
                                        <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default memo(Client)