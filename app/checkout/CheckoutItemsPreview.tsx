"use client";

import { Custominput } from "@/components/Custominput";
import { useShopContext } from "@/context/ContextProvider";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {};

export function CheckoutItemsPreview({}: Props) {
  const { cartItems } = useShopContext();
  const [discountCode, setDiscountCode] = useState();

  const calculateTotal = () =>
    cartItems.reduce(
      (ack: number, item: CartProps) => ack + item.quantity * Number(item?.current_price[0].NGN[0]),
      0
    );

  return (
    <section className="mt-[86px] px-4 md:px-8 lg:px-10">
      {cartItems?.map((item: CartProps) => (
        <div
          className="border-t first:border-t-0 text-[#3B3B3B] flex justify-between items-start border-[#6E6E6E] py-8"
          key={item.id}
        >
          <div className="flex gap-[42px]">
            <div className="relative font-exo-2 py-2 px-6 border border-[#6E6E6E]">
              <Image
                src={
                  item.photos[0] !== undefined
                    ? `https://api.timbu.cloud/images/${item?.photos[0]?.url}`
                    : ``
                }alt="product image"
                width="0"
                height="0"
                className="w-[32px] h-[88px]"
              />
              <span className="font-exo-2 p-2 rounded-[100px] w-[27px] h-[27px] flex items-center justify-center bg-[#6E6E6E] text-white absolute -top-2 -right-2">
                {item.quantity}
              </span>
            </div>
            <h2 className="text-lg font-bold text-[#3B3B3B]">{item.name}</h2>
          </div>
          <p className="font-exo-2 text-lg text-[#6E6E6E]">
          &#8358;{(item.quantity * Number(item?.current_price[0].NGN[0])).toFixed(2)}
          </p>
        </div>
      ))}
      <div className="font-exo-2 mt-8 mb-16 flex gap-4 items-center">
        <Custominput
          value={discountCode}
          onChange={(e: any) => setDiscountCode(e.target.value)}
          type="number"
          name="discount-code"
          id="discount-code"
          placeholder="Discount code or gift card"
          required={true}
        />
        <button
          disabled={!discountCode}
          className="bg-[#3B3B3B] disabled:hover:text-white hover:bg-transparent hover:text-[#3B3B3B] hover:border hover:border-[#3B3B3B] disabled:bg-[#3B3B3B]/90 md:w-[268px] py-4 px-6 rounded-[10px] text-white"
        >
          APPLY
        </button>
      </div>
      <div className="border-y font-medium text-[#3B3B3B] flex gap-4 flex-col text-lg font-exo-2 border-[#6E6E6E] py-4">
        <div className=" flex items-center justify-between">
          <p className="">Subtotal</p>
          <p className="">N{calculateTotal().toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="">Shipping</p>
          <p className="">Free</p>
        </div>
      </div>
      <div className="flex font-exo-2 text-lg font-bold items-center justify-between mt-6 mb-[60px] md:mb-[88px]">
        <p className="">TOTAL</p>
        <p className="">N{calculateTotal().toFixed(2)}</p>
      </div>
      <div className="flex mb-16 text-center flex-col lg:hidden justify-between items-center gap-6">
        <button className="bg-[#212121] hover:bg-white hover:border-[#212121] hover:border hover:text-[#3B3B3B] rounded-[10px] text-white font-medium font-exo-2 w-full px-6 py-4">
          PAY NOW
        </button>
        <Link
          href="/cart"
          className="bg-transparent hover:bg-[#212121] border-[#6E6E6E] border text-[#6E6E6E] rounded-[10px] font-medium font-exo-2 w-full px-6 py-4"
        >
          BACK TO CART
        </Link>
      </div>
    </section>
  );
}
