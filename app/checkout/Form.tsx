"use client";

import { PaymentMethod } from "@/components/PaymentMethod";
import { ShippingDetails } from "@/components/ShippingDetails";

type Props = {};

export default function Form({}: Props) {
  return (
    <form className="px-4 md:px-8 lg:px-10 pt-[77px] pb-16 bg-[#FDE19B]">
      {/* contact */}
      <section id="contact">
        <h1 className="text-2xl text-[#3B3B3B] font-bold mb-6">Contact</h1>
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
      <button className="bg-[#212121] hidden lg:block rounded-[10px] text-white font-exo-2 mb-16 w-full px-6 py-4">PAY NOW</button>
  
    </form>
  );
}
