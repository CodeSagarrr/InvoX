"use client"
import Sidebar from "@/app/(routes)/dashboard/_Components/Sidebar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <html lang="en">
          <body>
            <main className="grid grid-cols-4 gap-0.5">
                <div>
                    <Sidebar/>
                </div>

                <div className="md:col-span-4 col-span-full md:ml-72 ml-2 h-screen">
                {children} 
                </div>
            </main> 
          </body>
        </html>
    );
  }
  