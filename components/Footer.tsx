import Image from "next/image";
import Newsletter from "./Newsletter";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="mt-[137px] pb-10 grid gap-[42px] text-[#212121] bg-[#FBC02D] px-4 py-10">
      {/* PRODUCTS */}
      <section>
        <h2 className="font-bold text-2xl">PRODUCTS</h2>
        <ul className="mt-6 flex flex-col gap-4 font-exo-2">
          <li>Rackets</li>
          <li>Bags</li>
          <li>Apparels</li>
          <li>Balls</li>
          <li>Gears</li>
        </ul>
      </section>
      {/* SPORTS */}
      <section>
        <h2 className="font-bold text-2xl">SPORTS</h2>
        <ul className="mt-6 flex flex-col gap-4 font-exo-2">
          <li>Badminton</li>
          <li>Tennis</li>
          <li>Squash</li>
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
      <Link href="/">
        <Image
          className="w-[343px] mt-[70px] mb-[42px] mx-auto"
          src="/footer-logo.svg"
          width="0"
          height="0"
          alt="logo"
        />
      </Link>
      <p className="font-exo-2 text-center">©2024 - SmashZone Sports </p>
    </footer>
  );
}
