import { useShopContext } from "@/context/ContextProvider";
import Image from "next/image";
import React, { useState } from "react";
import { Toast } from "./Toast";
// import useCart from "@/hooks/useCart";

type Props = {
  item: any;
};

export function Product({ item }: Props) {
  const { addToCart } = useShopContext();
  // const { addItemToCart, cart, removeItemFromCart } = useCart();

  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const formattedPrice = item?.price.toLocaleString();
  const [addToCartSuccessful, setAddToCartSuccessful] =
    useState<boolean>(false);

  const handleClick = async (e: any) => {
    e.preventDefault();
    console.log("Added to cart");
    addToCart?.(item);
    // addItemToCart(item)
    // console.log(cart)
    setAddToCartSuccessful(true);
    setShowModal(true);
    setTimeout(() => {
      setShowModal?.(false);
    }, 4000);
  };
  return (
    <div
      key={item?.id}
      className="relative flex flex-col justify-center items-center text-center px-10 py-4 border #6E6E6E"
    >
      {/* MODAL  */}
      <Toast showModal={showModal} setShowModal={setShowModal}>
        <div className="flex items-center gap-2">
          <i
            className={`${
              addToCartSuccessful
                ? "ri-checkbox-circle-line text-green-500"
                : "ri-error-warning-fill text-red-500"
            } text-xl`}
          ></i>
          {addToCartSuccessful ? (
            <span>Item added to cart</span>
          ) : (
            <span>Couldn&apos;t add to cart</span>
          )}
        </div>
      </Toast>
      <Image
        src={item?.image}
        alt="product image"
        width="0"
        height="0"
        className="w-[74px] h-[200px] md:w-[136px] md:h-[368px]"
      />
      <h2 className="mt-8 mb-4" id="product_name">
        {item?.name}
      </h2>
      <p id="price" className="font-exo-2">
        N{formattedPrice}.00
      </p>
      {/* cart icon */}
      <div
        onClick={handleClick}
        className="bg-[#212121] cursor-pointer absolute top-3 right-3 rounded-[60px] p-[4.8px] w-6 h-6 flex justify-center items-center"
      >
        <Image
          src="/shopping-bag-03.svg"
          alt="cart icon"
          width="0"
          height="0"
          className="w-6 h-6"
        />
      </div>
    </div>
  );
}
