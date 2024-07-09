import Image from "next/image";
import { Newsletter } from "./Newsletter";
import Link from "next/link";

type Props = {};

export function Footer({}: Props) {
  return (
    <footer className="mt-[137px] text-[#212121] bg-[#FBC02D] px-4 md:px-8 lg:px-10 py-10">
      {/* PRODUCTS */}
      <div className="grid gap-[42px] md:grid-cols-2 xl:grid-cols-4">
        <section>
          <h2 className="font-bold text-2xl">PRODUCTS</h2>
          <ul className="mt-6 flex flex-col gap-4 font-exo-2">
            <li className="w-fit">Rackets</li>
            <li className="w-fit">Bags</li>
            <li className="w-fit">Apparels</li>
            <li className="w-fit">Balls</li>
            <li className="w-fit">Gears</li>
          </ul>
        </section>
        {/* SPORTS */}
        <section>
          <h2 className="font-bold text-2xl">SPORTS</h2>
          <ul className="mt-6 flex flex-col gap-4 font-exo-2">
            <li className="w-fit">Badminton</li>
            <li className="w-fit">Tennis</li>
            <li className="w-fit">Squash</li>
          </ul>
        </section>
        {/* SOCIALS */}
        <section>
          <h2 className="font-bold text-2xl">SOCIALS</h2>
          <ul className="mt-6 flex flex-col gap-4 font-exo-2">
            <li className="flex items-center gap-3">
              <Image
                width="0"
                height="0"
                className="w-4"
                src="/instagram-fill.svg"
                alt="instagram icon"
              />{" "}
              Instagram
            </li>
            <li className="flex items-center gap-3">
              <Image
                width="0"
                height="0"
                className="w-4"
                src="/linkedin.svg"
                alt="linkedin icon"
              />
              LinkedIn
            </li>
            <li className="flex items-center gap-3">
              <Image
                width="0"
                height="0"
                className="w-4"
                src="/facebook.svg"
                alt="facebook icon"
              />
              Facebook
            </li>
          </ul>
        </section>
        <Newsletter />
      </div>
      <div className="md:flex justify-between items-center gap-[42px] md:mt-[70px]">
        <Link href="/">
          <Image
            className="w-[343px] mt-[70px] mb-[42px] md:mt-0 md:mb-0 mx-auto"
            src="/footer-logo.svg"
            width="0"
            height="0"
            alt="logo"
          />
        </Link>
        <p className="font-exo-2 text-center md:text-left">
          ©2024 - SmashZone Sports{" "}
        </p>
      </div>
    </footer>
  );
}
