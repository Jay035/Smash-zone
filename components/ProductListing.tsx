import Image from "next/image";
import FilterBtn from "./FilterBtn";
import SortBtn from "./SortBtn";
import { Products } from "@/components/data";

type Props = {};

export default function ProductListing({}: Props) {
  return (
    <section className="">
      <div
        className={`font-exo-2 flex justify-between px-4 items-center border-b border-[#A1A1A1]`}
      >
        <FilterBtn />
        <SortBtn />
      </div>
      <div className="mt-[90px] grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-14 lg:gap-[100px] px-4 md:px-8 lg:px-10">
        {Products?.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center text-center px-10 py-4 border #6E6E6E"
          >
            <Image
              src={item?.image}
              alt="product image"
              width="0"
              height="0"
              className="w-[74px] h-fit"
            />
            <h2 id="product_name">{item?.name}</h2>
            <p id="price" className="font-exo-2">
              {item?.price}
            </p>
            {/* cart icon */}
            <div className="bg-[#212121] absolute top-3 right-3 rounded-[60px] p-[4.8px] w-6 h-6 flex justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.06203 14.441L3.42703 12.299C3.85903 9.766 4.07403 8.499 4.92903 7.749C5.78403 7 7.01203 7 9.46703 7H14.533C16.988 7 18.216 7 19.071 7.75C19.926 8.5 20.141 9.766 20.573 12.299L20.938 14.441C21.536 17.946 21.834 19.698 20.915 20.849C19.995 22 18.295 22 14.898 22H9.10203C5.70403 22 4.00503 22 3.08503 20.85C2.16503 19.698 2.46503 17.946 3.06203 14.441Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.5 8.99999L7.715 5.98999C7.79268 4.90658 8.27787 3.89282 9.07291 3.15274C9.86795 2.41267 10.9138 2.00122 12 2.00122C13.0862 2.00122 14.1321 2.41267 14.9271 3.15274C15.7221 3.89282 16.2073 4.90658 16.285 5.98999L16.5 8.99999"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
