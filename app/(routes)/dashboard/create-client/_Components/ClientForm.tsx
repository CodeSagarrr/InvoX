"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

function ClientForm({ clientData , setClientData} : any) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClientData({
            ...clientData,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div>
            <div className="space-y-4 py-4">
                <div className="space-y-2">
                    <Label htmlFor="clientName">Contact Name</Label>
                    <Input
                        className="block w-full px-4 py-2 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 sm:text-sm"
                        id="clientName"
                        name='name'
                        placeholder="John Smith"
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                        className="block w-full px-4 py-2 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 sm:text-sm"
                        id="company"
                        name='companyName'
                        placeholder="Acme Corp Pvt Ltd"
                        onChange={handleChange}
                    />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            className="block w-full px-4 py-2 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 sm:text-sm"
                            id="email"
                            type="email"
                            name='email'
                            placeholder="john@acme.com"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            className="block w-full px-4 py-2 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 sm:text-sm"
                            id="phone"
                            name='phone'
                            placeholder="+91 98765 43210"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="gst">GST Number</Label>
                    <Input
                        className="block w-full px-4 py-2 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 sm:text-sm"
                        id="gst"
                        name='gst'
                        placeholder="27AABCT1234C1ZV"
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                        className="block w-full px-4 py-2 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 sm:text-sm"
                        id="address"
                        name='address'
                        placeholder="City, State"
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default ClientForm