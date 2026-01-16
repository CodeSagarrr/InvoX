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

                <div className="col-span-4 ml-72">
                {children} 
                </div>
            </main> 
          </body>
        </html>
    );
  }
  