"use client";

import { Custominput } from "@/components/Custominput";
import { useShopContext } from "@/context/ContextProvider";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

export function CheckoutItemsPreview({}: Props) {
  const { cartItems } = useShopContext();
  const [discountCode, setDiscountCode] = useState();

  const calculateTotal = () =>
    cartItems.reduce(
      (ack: number, item: CartProps) => ack + item.quantity * item.price,
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
                src={item.image}
                alt="product image"
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
            N{(item.quantity * Number(item.price)).toFixed(2)}
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
        <button className="bg-[#3B3B3B] md:w-[268px] py-4 px-6 rounded-[10px] text-white">
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
      <div className="flex font-exo-2 text-lg font-bold items-center justify-between mt-6 mb-[72px]">
        <p className="">TOTAL</p>
        <p className="">N{calculateTotal().toFixed(2)}</p>
      </div>
      <button className="bg-[#212121] lg:hidden rounded-[10px] text-white font-exo-2 mb-16 w-full px-6 py-4">PAY NOW</button>
    </section>
  );
}