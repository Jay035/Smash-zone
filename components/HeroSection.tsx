import mobileImg from "../public/background-image.png";
import tabletImg from "../public/hero-img-tablet.png";
import desktopImg from "../public/hero-img-desktop.png";
import Image from "next/image";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <section className="relative text-white ">
      <Image
        className="w-full h-[470px] object-cover sm:hidden"
        src={mobileImg}
        width="0"
        height="0"
        alt="logo"
        placeholder="blur"
        priority
      />
      {/* for tablet */}
      <Image
        className="w-full h-[530px] hidden object-cover sm:block lg:hidden"
        src={tabletImg}
        width="0"
        height="0"
        alt="logo"
        placeholder="blur"
        priority
      />
      {/* for desktop */}
      <Image
        className="w-full lg:h-[570px] object-cover hidden lg:block"
        src={desktopImg}
        width="0"
        height="0"
        alt="logo"
        placeholder="blur"
        priority
      />

      <div className="absolute top-0 left-0 h-[470px] md:h-[530px] lg:h-[570px] w-full text-center flex gap-8 justify-center flex-col items-center px-4">
        <h1 className="text-[32px] md:text-[40px] leading-10 lg:leading-[56px] font-bold max-w-[644px]">
          Premium Rackets Collection: Unleash Your Game
        </h1>
        <p className="font-semibold max-w-[644px] md:text-xl">
          Crafted for Champions: Each Racket Combines Precision, Power, and
          Innovation to Elevate Your Game
        </p>
      </div>
    </section>
  );
}
