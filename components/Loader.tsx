import React from "react";

type Props = {};

export function Loader({}: Props) {
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-14 lg:gap-[100px]">
      <div className="py-4 px-10 w-full border">
        <div className="bg-gray-300 h-[200px] w-full animate-pulse"></div>
        <div className="bg-gray-300 mt-8 mb-6 h-6 animate-pulse"></div>
        <div className="bg-gray-300 h-6 animate-pulse"></div>
      </div>
      <div className="py-4 px-10 w-full border">
        <div className="bg-gray-300 h-[200px] w-full animate-pulse"></div>
        <div className="bg-gray-300 mt-8 mb-6 h-6 animate-pulse"></div>
        <div className="bg-gray-300 h-6 animate-pulse"></div>
      </div>
      <div className="py-4 px-10 w-full border">
        <div className="bg-gray-300 h-[200px] w-full animate-pulse"></div>
        <div className="bg-gray-300 mt-8 mb-6 h-6 animate-pulse"></div>
        <div className="bg-gray-300 h-6 animate-pulse"></div>
      </div>
    </div>
  );
}
