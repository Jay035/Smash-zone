import { useShopContext } from "@/context/ContextProvider";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  item: any;
};

export default function Product({ item }: Props) {
  const { addToCart } = useShopContext();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [subscriptionSuccessful, setSubscriptionSuccessful] =
    useState<boolean>(false);

  const handleEmailChange = (event: any) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    console.log("Added to cart")
  };
  return (
    <div
      key={item?.id}
      className="relative flex flex-col justify-center items-center text-center px-10 py-4 border #6E6E6E"
    >
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
        {item?.price}
      </p>
      {/* cart icon */}
      <div
        onClick={() => addToCart?.(item)}
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
