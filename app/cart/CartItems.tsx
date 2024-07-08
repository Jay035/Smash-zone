"use client";

import CheckoutBtn from "@/components/CheckoutBtn";
import ProductListing from "@/components/ProductListing";
import { useShopContext } from "@/context/ContextProvider";
import Image from "next/image";

type Props = {};

export default function CartItems({}: Props) {
  const { cartItems, addToCart, removeFromCart } = useShopContext();
  const calculateTotal = () =>
    cartItems.reduce((ack: number, item: CartProps) => ack + item.quantity * item.price, 0);


  return (
    <section>
      {cartItems?.length > 0 ? (
        <div className="">
          {/* cart item headers */}
          <div className="hidden md:flex justify-between border-b py-5 border-[#6E6E6E] items-center">
            <h1>PRODUCT</h1>
            <h1>QTY.</h1>
            <h1>TOTAL</h1>
          </div>
          {cartItems?.map((item: CartProps) => (
            <div
              className="border-b text-[#3B3B3B] md:flex md:justify-between items-center border-[#6E6E6E] py-8"
              key={item.id}
            >
              <div className="flex items-center gap-4 justify-between">
                <Image
                  src={item.image}
                  alt="product image"
                  width="0"
                  height="0"
                  className="w-[66px] h-[179px]"
                />
                <div className="min-w-[137px]">
                  <h2 className="text-xl font-medium text-[#6E6E6E]">
                    {item.name}
                  </h2>
                  <p className="font-exo-2 text-lg text-[#6E6E6E]">
                    {item.price.toLocaleString()}
                  </p>
                </div>
              </div>
              {/* qty */}
              <div className="w-fit ml-auto md:ml-0 text-center">
                <div className="border mb-[14px] border-[#A1A1A1] py-3 px-[14px] flex gap-2 items-center">
                  <button
                    onClick={() => removeFromCart?.(item)}
                    className="w-[42px] flex justify-center"
                  >
                    <Image
                      src="/minus.svg"
                      alt="minus icon"
                      width="0"
                      height="0"
                      className="w-6 h-6"
                    />
                  </button>
                  <span className="font-exo-2">{item.quantity}</span>
                  <button
                    onClick={() => addToCart?.(item)}
                    className="w-[42px] flex justify-center"
                  >
                    <Image
                      src="/plus.svg"
                      alt="plus icon"
                      width="0"
                      height="0"
                      className="w-6 h-6"
                    />
                  </button>
                </div>
                <span
                  className="font-exo-2 cursor-pointer"
                  onClick={() => removeFromCart?.(item)}
                >
                  Remove
                </span>
              </div>
              <p className="hidden md:inline-block text-lg font-exo-2 font-bold text-[#3B3B3B]">
                N{(item.quantity * Number(item.price)).toFixed(2)}
              </p>
            </div>
          ))}
          <div className="md:w-[312px] ml-auto">
            <div className="mb-10 mt-[34px] text-xl flex items-center justify-between">
              <p className="font-semibold">SUBTOTAL</p>
              <p className="font-exo-2">N{calculateTotal().toFixed(2)}</p>
            </div>
            <CheckoutBtn />
          </div>
          ;
        </div>
      ) : (
        <p className="text-center font-exo-2 text-lg lg:text-xl">
          No items yet...Continue shopping to explore more
        </p>
      )}
      <section className="mt-36">
        <h2 className="text-center font-bold text-[#212121] mb-[100px] text-3xl md:text-[40px] leading-[48px]">
          {cartItems?.length > 0 ? "YOU MIGHT ALSO LIKE" : "CONTINUE SHOPPING"}
        </h2>
        <ProductListing itemsPerPage={3} />
      </section>
    </section>
  );
}
