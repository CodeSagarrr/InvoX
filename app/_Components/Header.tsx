"use client";
import Logo from "../../components/ui/Logo";
import { LoginLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

function Header() {
  const { user } = useKindeBrowserClient()
  return (
    <section className="flex justify-between items-center w-full h-18 shadow-sm py-2 px-8">
      <div className="flex gap-2 items-center">
        <Logo width={55} heigth={55} />
        <p className="text-2xl font-[geom] font-semibold">
          Invo<span className="text-orange-500">X</span>
        </p>
      </div>

      <nav className="flex gap-4">
        <ul className="flex items-center gap-6 font-[geom]">
          <li className="cursor-pointer hover:text-orange-500 transition-all duration-200 ease-in-out">
            Online invoice generator
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-all duration-200 ease-in-out">
            Feature
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-all duration-200 ease-in-out">
            Tools
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-all duration-200 ease-in-out">
            Pricing
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-all duration-200 ease-in-out">
            About
          </li>
        </ul>

        <LoginLink postLoginRedirectURL={ user ? "/dashboard" : "/profile"}>
          <button className="cursor-pointer font-[ubuntu] group relative bg-amber-500 hover:bg-amber-400 font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-40 h-10">
            <div className="relative flex items-center justify-center gap-2">
              <span className="relative inline-block overflow-hidden">
                <span className="block text-white transition-transform duration-300 group-hover:-translate-y-full">
                  Get Started
                </span>
                <span className="absolute inset-0 text-white transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                  Right Now
                </span>
              </span>

              <span className="text-white">
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2"
                >
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
            </div>
          </button>
        </LoginLink>
      </nav>
    </section>
  );
}

export default Header;
