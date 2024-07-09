"use client";

import { Products } from "@/components/data";
import { Product } from "./Product";
import { Pagination } from "./Pagination";
import { useShopContext } from "@/context/ContextProvider";

type Props = {
  itemsPerPage: number;
};

export function ProductListing({ itemsPerPage }: Props) {
  const { currentPage } = useShopContext();

  // PAGINATION

  const paginatedItems = Products?.slice(
    (currentPage! - 1) * itemsPerPage!,
    currentPage! * itemsPerPage!
  );

  return (
    <section className="">
      {paginatedItems?.length > 0 ? (
        <div className="">
          <div className="mt-[90px] grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-14 lg:gap-[100px] px-4 md:px-8 lg:px-10">
            {paginatedItems?.map((item: ProductProps) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      ) : (
        <p className="text-center mt-20">
          No Products to shop, check back later
        </p>
      )}
    </section>
  );
}
