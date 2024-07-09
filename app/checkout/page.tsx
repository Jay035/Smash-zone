import Image from "next/image";
import Form from "./Form";
import img from "../../public/checkout-img.png"
import { CheckoutItemsPreview } from "./CheckoutItemsPreview";

type Props = {};

export default function CheckOut({}: Props) {
  return (
    <main className="">
      <div className="relative">
        <div className="bg-[#6E6E6EB2] h-[246px] absolute top-0 left-0 w-full"></div>
        <Image
          width="0"
          height="0"
          className="w-full h-[246px] object-cover object-center"
          src={img}
          alt=""
          placeholder="blur"
          priority
        />
      </div>
      <section className="lg:grid grid-cols-2 ">

      <Form />
      <CheckoutItemsPreview />
      </section>
    </main>
  );
}
