"use client";

import { useShopContext } from "@/context/ContextProvider";
import Image from "next/image";

type Props = {};

export default function CartItems({}: Props) {
  const { cartItems } = useShopContext();
  console.log(cartItems)
  return (
    <section>
      {cartItems?.length > 0 && cartItems?.map((item: CartProps) => (
        <div className="border-b border-[#6E6E6E]" key={item.id}>
          <div className="flex items-center gap-4 justify-between">
            <Image
              src={item.image}
              alt="product image"
              width="0"
              height="0"
              className="w-[66px] h-[179px]"
            />
            <div className="">
              <h2>{item.name}</h2>
              <p>{item.price}</p>
            </div>
          </div>
          {/* qty */}
          <div className="border border-[#A1A1A1] py-3 px-[14px] flex gap-2 items-center">
            <button>
              <Image
                src="/minus.svg"
                alt="minus icon"
                width="0"
                height="0"
                className="w-6 h-6"
              />
            </button>
            {item.quantity}
            <button>
              <Image
                src="/plus.svg"
                alt="plus icon"
                width="0"
                height="0"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
