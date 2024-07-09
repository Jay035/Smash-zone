import { useShopContext } from "@/context/ContextProvider";
import Image from "next/image";
import { Products } from "./data";

type Props ={
  itemsPerPage: number
}

export  function Pagination({itemsPerPage}: Props) {
  const { currentPage, setCurrentPage } = useShopContext();
  const dataLength = Products?.length
  const totalPages = Math.ceil(dataLength / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage?.(page);
  };

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      handlePageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          // work on this func
          onClick={() => {
            handlePageClick(i);
            console.log(i, currentPage);
          }}
          className={` flex items-center justify-center w-[38px] h-[38px] rounded-full disabled:opacity-80 disabled:hover:opacity-100 ${
            i === currentPage
              ? "bg-black text-white"
              : "bg-[#EDEDED] text-[#3b3b3b]"
          }`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex gap-5 font-exo-2 justify-between items-center mt-[100px] my-8 px-4 md:px-8 lg:px-10 max-w-[620px] mx-auto">
      {/* Previous btn */}
      <button
        disabled={currentPage === 1}
        className=" bg-[#EDEDED] flex items-center justify-center w-[38px] h-[38px] rounded-full disabled:opacity-80 disabled:hover:opacity-100 hover:bg-[#EDEDED]/70 "
        onClick={() => handlePageClick(currentPage! - 1)}
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
        {/* {Array.from({ length: totalPages }, (_, index) => (
          <button
          className=" bg-[#EDEDED] flex items-center justify-center w-[38px] h-[38px] rounded-full disabled:opacity-80 disabled:hover:opacity-100 hover:bg-[#EDEDED]/70 "
        
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))} */}
        {renderPageNumbers()}
      </div>
      <button
        disabled={currentPage === totalPages}
        className=" bg-[#EDEDED] flex items-center justify-center w-[38px] h-[38px] rounded-full disabled:opacity-80 disabled:hover:opacity-100 hover:bg-[#EDEDED]/70 "
        onClick={() => handlePageClick(currentPage! + 1)}
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
