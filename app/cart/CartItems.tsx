"use client";

import { CheckoutBtn } from "@/components/CheckoutBtn";
import { ProductListing } from "@/components/ProductListing";
import { useShopContext } from "@/context/ContextProvider";
import Image from "next/image";

type Props = {};

export default function CartItems({}: Props) {
  const {
    cartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
    decreaseItemQuantity,
  } = useShopContext();

  const calculateTotal = () =>
    cartItems.reduce(
      (ack: number, item: CartProps) => ack + item.quantity * Number(item?.current_price[0].NGN[0]),
      0
    );

  // const formattedAmt = calculateTotal().toLocaleString();

  return (
    <section>
      {cartItems?.length > 0 ? (
        <div className="">
          {/* cart item headers */}
          <div className="hidden md:flex justify-between border-b py-5 border-[#6E6E6E] items-center">
            <h1 className="w-fit">PRODUCT</h1>
            <h1 className="w-fit">QTY.</h1>
            <h1 className="w-fit">TOTAL</h1>
          </div>
          {cartItems?.map((item: CartProps) => (
            <div
              className="border-b text-[#3B3B3B] justify-between md:flex items-center border-[#6E6E6E] py-8"
              key={item.id}
            >
              <div className="flex items-center gap-4 justify-between">
                <Image
                  src={
                    item.photos[0] !== undefined
                      ? `https://api.timbu.cloud/images/${item?.photos[0]?.url}`
                      : ``
                  }
                  alt="product image"
                  width="0"
                  height="0"
                  className="w-[66px] h-[179px]"
                />
                <div className="min-w-[137px]">
                  <h2 className="text-xl font-medium text-[#6E6E6E]">
                    {item?.name}
                  </h2>
                  <p className="font-exo-2 text-lg font-bold text-[#3B3B3B]">
                    {item?.current_price[0].NGN}
                  </p>
                </div>
              </div>
              {/* qty */}
              <div className="w-fit ml-auto md:ml-0 text-center">
                <div className="border mb-[14px] border-[#A1A1A1] py-3 px-[14px] flex items-center gap-2">
                  <button
                    onClick={() => decreaseItemQuantity?.(item)}
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
                  {/* <input
                    className="font-exo-2 text-center w-[42px] outline-none border-none"
                    onChange={(e: any) =>
                      updateCartItem?.(item?.id, e.target.value)
                    }
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={item?.quantity || 0}
                  /> */}
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
                  onClick={() => removeFromCart?.(item?.id)}
                >
                  Remove
                </span>
              </div>
              <p className="hidden w-fit md:inline-block text-lg font-exo-2 font-bold text-[#3B3B3B]">
                &#8358;
                {(item.quantity * Number(item?.current_price[0].NGN)).toFixed(
                  2
                )}
              </p>
            </div>
          ))}
          <div className="md:w-[312px] ml-auto">
            <div className="mb-10 mt-[34px] text-xl flex items-center justify-between">
              <p className="font-semibold">SUBTOTAL</p>
              <p className="font-exo-2 text-[#3B3B3B] font-bold text-xl">
                &#8358;{calculateTotal()}.00
              </p>
            </div>
            <CheckoutBtn />
          </div>
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
