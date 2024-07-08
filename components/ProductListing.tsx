import FilterBtn from "./FilterBtn";
import SortBtn from "./SortBtn";
import { Products } from "@/components/data";
import Product from "./Product";
import Pagination from "./Pagination";
import { useState } from "react";

export default function ProductListing() {
  const [data, setData] = useState(Products);

  // PAGINATION
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedItems = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <section className="">
      <div className="mt-[90px] grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-14 lg:gap-[100px] px-4 md:px-8 lg:px-10">
        {paginatedItems?.map((item: ProductProps) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
      {paginatedItems?.length > 0 && (
        <Pagination
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          dataLength={data?.length}
          currentPage={currentPage}
        />
      )}
    </section>
  );
}
