"use client";

import HeroSection from "@/components/HeroSection";
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
      <HeroSection />
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
