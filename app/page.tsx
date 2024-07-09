

import FilterBtn from "@/components/FilterBtn";
import HeroSection from "@/components/HeroSection";
import ProductListing from "@/components/ProductListing";
import SortBtn from "@/components/SortBtn";

export default function Home() {
  return (
    <main className="pt-[70px]">
      <HeroSection />
      <div
        className={`font-exo-2 flex justify-between px-4 md:px-8 lg:px-10 items-center border-b border-[#A1A1A1]`}
      >
        <FilterBtn />
        <SortBtn />
      </div>
      <ProductListing itemsPerPage={9} />
    </main>
  );
}
