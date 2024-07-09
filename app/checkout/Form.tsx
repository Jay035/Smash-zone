"use client";

import { PaymentMethod } from "@/components/PaymentMethod";
import { ShippingDetails } from "@/components/ShippingDetails";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

export default function Form({}: Props) {
  const path = usePathname();
  const navItems = [
    {
      id: "products",
      route: "/",
      text: "Products",
    },
    {
      id: "cart",
      route: "/cart",
      text: "Cart",
    },
    {
      id: "payment",
      route: "/checkout",
      text: "Payment",
    },
  ];
  return (
    <div className="px-4 md:px-8 lg:px-10 pt-[42px] pb-16 bg-[#FDE19B]">
      {/* header */}
      <section className="mb-20 flex justify-center items-center flex-col gap-[42px]">
        <Link href="/">
          <Image
            className="w-[232px]"
            src="/logo-group-black.svg"
            width="0"
            height="0"
            alt="logo"
            priority
          />
        </Link>
        {/* nav */}
        <div className="flex gap-2 items-center font-exo-2">
          {navItems?.map((item: any) => (
            <Link key={item.id} href={item.route} className={`${path === item.route ? 'text-[#212121]' : 'text-[#6E6E6E]'} hover:text-[#212121] after:mx-[7px] after:content-['/'] last:after:content-none`}>
              {item.text}
            </Link>
          ))}
        </div>
      </section>
      {/* contact */}
      <section id="contact">
        <div className="flex justify-between text-[#3B3B3B] items-center gap-4">
          <h1 className="text-2xl font-bold mb-6">Contact</h1>
          <p className="text-sm font-exo-2">Log in</p>
        </div>
        <input
          className="w-full bg-transparent placeholder:text-[#6E6E6E] text-[#6E6E6E] font-exo-2 rounded-[10px] outline-none border border-[#6E6E6E] p-4 pl-6"
          type="text"
          name="email"
          id="email"
          placeholder="Email or phone numbers"
        />
      </section>

      <ShippingDetails />
      <PaymentMethod />
      <div className="lg:flex text-center justify-between items-center gap-8 mb-16">
        <button className="bg-[#3B3B3B] font-medium hover:bg-transparent hover:text-[#3B3B3B] hover:border hover:border-[#3B3B3B] disabled:bg-[#3B3B3B]/80 hidden lg:block rounded-[10px] text-white font-exo-2 w-full px-6 py-4">
          PAY NOW
        </button>
        <Link
          href="/cart"
          className="bg-transparent hidden lg:block hover:bg-[#212121] border-[#6E6E6E] border text-[#6E6E6E] rounded-[10px] font-medium font-exo-2 w-full px-6 py-4"
        >
          BACK TO CART
        </Link>
      </div>
    </div>
  );
}
