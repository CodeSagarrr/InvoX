import { Users } from "lucide-react"
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
        </section>
    )
}

export default memo(Client)