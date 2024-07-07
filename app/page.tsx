"use client"

import Pagination from "@/components/Pagination";
import ProductListing from "@/components/ProductListing";
import { Products } from "@/components/data";
import { useState } from "react";


export default function Home() {
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
    <main>
      <div className="bg-hero-bg bg-cover text-white text-center h-screen w-full flex gap-8 justify-center flex-col items-center px-4">
        <h1 className="text-4xl font-bold">
          Premium Rackets Collection: Unleash Your Game
        </h1>
        <p className="font-bold">
          Crafted for Champions: Each Racket Combines Precision, Power, and
          Innovation to Elevate Your Game
        </p>
      </div>
      <ProductListing />
      {Products?.length > 0 && (
        <Pagination
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          dataLength={data?.length}
          currentPage={currentPage}
        />
      )}
    </main>
  );
}
