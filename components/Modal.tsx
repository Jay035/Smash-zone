import Image from "next/image";
import { useState } from "react";

type Props = {
  downloadCSVLink: string;
  setDownloadButtonClicked: (e: any) => void;
};

export default function Modal({
  children,
  showModal,
  setShowModal,
  item,
  handleClick
}: ModalProps) {
  return (
    <div className="fixed z-[99999999999999999] top-0 left-0 bg-[#eeee]/50 backdrop-blur-sm w-full h-screen flex justify-center items-center">
      <div className="bg-white w-96 md:w-[30rem] p-8 text-center rounded-lg relative">
        <button
          className="absolute top-2 right-2"
          onClick={() => setShowModal?.(false)}
        >
          <svg
            className="cursor-pointer w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            onClick={() => setShowModal?.(false)}
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
          </svg>
        </button>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Image
              src={
                item?.photos[0] !== undefined
                  ? `https://api.timbu.cloud/images/${item?.photos[0]?.url}`
                  : ``
              }
              alt="product image"
              width="0"
              height="0"
              className="w-[74px] h-[200px] md:w-[136px] md:h-[368px]"
            />
            <div className="">
              <h2 className="mt-8 mb-4 text-2xl font-medium" id="product_name">
                {item?.name}
              </h2>
              <p id="price" className="font-exo-2">
                &#8358;{item?.current_price[0].NGN[0]}.00
              </p>
              <button
                className="bg-[#212121] py-2 px-4 mt-6 text-white hover:bg-white hover:text-[#212121] hover:border hover:border-[#212121]"
                onClick={handleClick}
              >
                ADD TO CART
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}
