import Image from "next/image";
import { useState } from "react";

type Props = {
  currentPage: number;
  dataLength: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  dataLength,
  itemsPerPage,
  onPageChange,
}: Props) {
  const totalPages = Math.ceil(dataLength / itemsPerPage);

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex gap-5 font-exo-2 justify-between items-center my-8 px-4 md:px-8 lg:px-10 max-w-[620px] mx-auto">
      {/* Previous btn */}
      <button
        disabled={currentPage === 1}
        className=" bg-[#EDEDED] flex items-center justify-center w-[38px] h-[38px] rounded-full disabled:opacity-80 disabled:hover:opacity-100 hover:bg-[#EDEDED]/70 "
        onClick={() => handlePageClick(currentPage - 1)}
      >
        <Image
          src="/chevron-right.svg"
          alt="chevron-right"
          width="0"
          height="0"
          className="w-4 h-4 -rotate-180"
        />
      </button>
      <div className="flex gap-4 text-lg items-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
          className=" bg-[#EDEDED] flex items-center justify-center w-[38px] h-[38px] rounded-full disabled:opacity-80 disabled:hover:opacity-100 hover:bg-[#EDEDED]/70 "
        
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage === totalPages}
        className=" bg-[#EDEDED] flex items-center justify-center w-[38px] h-[38px] rounded-full disabled:opacity-80 disabled:hover:opacity-100 hover:bg-[#EDEDED]/70 "
        onClick={() => handlePageClick(currentPage + 1)}
      >
        <Image
          src="/chevron-right.svg"
          alt="chevron-right"
          width="0"
          height="0"
          className="w-4 h-4"
        />
      </button>
    </div>
  );
}
