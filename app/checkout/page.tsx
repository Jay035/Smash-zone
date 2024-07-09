import Image from "next/image";
import Form from "./Form";
import mobileImg from "../../public/checkout-img-mobile.png";
import tabletImg from "../../public/checkout-img-tablet.png";
import desktopImg from "../../public/checkout-img-desktop.png";
import { CheckoutItemsPreview } from "./CheckoutItemsPreview";
import Link from "next/link";

type Props = {};

export default function CheckOut({}: Props) {
  return (
    <main className="">
      <div className="relative">
        <div className="bg-[#6E6E6EB2] h-[246px] absolute top-0 left-0 w-full"></div>
        <Link href="/">
          <Image
            className="w-[313px] absolute top-[81px] sm:top-[83px] left-8 "
            src="/Logotype&LogoMark.svg"
            width="0"
            height="0"
            alt="logo"
            priority
          />
        </Link>
        {/* for mobile */}
        <Image
          width="0"
          height="0"
          className="w-full h-[246px] sm:hidden object-cover object-center"
          src={mobileImg}
          alt=""
          placeholder="blur"
          priority
        />
        {/* for tablet */}
        <Image
          width="0"
          height="0"
          className="w-full h-[246px] hidden sm:block lg:hidden object-cover object-center"
          src={tabletImg}
          alt=""
          placeholder="blur"
          priority
        />
        {/* for desktop */}
        <Image
          width="0"
          height="0"
          className="w-full h-[246px] hidden lg:block object-cover object-center"
          src={desktopImg}
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
