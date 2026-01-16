import React from "react";

function Banner() {
  return (
    <div className="w-full relative bg-slate-50 p-4">
      <div className=" mx-auto max-w-60 rounded-4xl p-1 bg-white mt-6">
        <div className="max-w-full flex gap-2 items-center text-center rounded-4xl pl-8 py-1 bg-orange-100 text-gray-800">
          <div className="w-2 h-2 rounded-full bg-black"></div>
          <h2 className="font-semibold fonr-[geom]">Trusted By 1 Users</h2>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-2 py-4">
        <h1 className="text-center text-5xl font-semibold mb-4 font-[orbitron] leading-14">
          <span className="text-amber-500">Invoicing</span> Made Simple for
          Freelancers{" "}
        </h1>
        <p className="text-center text-md text-gray-600 font-[geom]">
          Stop wasting time on complicated invoicing. Create professional,
          branded invoices in minutes and focus on what you do best , your work.
          Fast, simple, and designed specifically for freelancers like you.
        </p>
      </div>

      <button className="relative cursor-pointer flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-amber-500 rounded-md group mx-auto font-[ubuntu]">
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-amber-600 rounded group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-amber-600 rounded group-hover:-ml-4 group-hover:-mb-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-amber-600 rounded-md group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
          Get Started
        </span>
      </button>
    </div>
  );
}

export default Banner;
