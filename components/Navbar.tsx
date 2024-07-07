"use client";

// HOOKS
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// COMPONENTS

export const Navbar = () => {
  const optionsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [menuShown, setMenuShown] = useState<boolean>(false);
  const [profileMenuShown, setProfileMenuShown] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setMenuShown((prevValue) => !prevValue);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      optionsRef.current &&
      !optionsRef.current.contains(event.target as Node)
    ) {
      setProfileMenuShown(false);
      console.log(profileMenuShown);
    }
  };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);

  //     // Cleanup function to remove event listener
  //     return () => {
  //       window.removeEventListener("DOMContentLoaded", handleScroll);
  //     };
  //   });

  return (
    <header
      className={`
        bg-[#3B3B3B]
       fixed top-0 left-0 z-50 flex justify-between items-center w-full py-6 px-4 `}
    >
      <Link href="/">
        <Image
          className="w-[189px]"
          src="/Logotype&LogoMark.svg"
          width="0"
          height="0"
          alt="logo"
        />
      </Link>
      {/* menu */}
      <div
        className={`${
          menuShown
            ? ` top-0 left-0 w-full h-screen bg-[#6B7280]/40 xl:bg-transparent backdrop-blur-sm xl:backdrop-blur-0 xl:h-fit xl:w-fit transition-all `
            : `-left-full xl:left-0 w-fit`
        } fixed items-center z-30 sm:text-lg text-[#6B7280] xl:relative overflow-x-hidden`}
      >
        <ul
          className={` ${
            menuShown && "w-[80%]"
          } whitespace-nowrap bg-white xl:bg-transparent h-screen xl:h-fit xl:w-fit flex flex-col xl:flex-row xl:justify-between gap-8 px-8 sm:px-[6vw] pt-40 xl:pt-0`}
        >
          {/* <Link
            href="/blog"
            className="after:bg-[#14532D] after:h-0.5 after:block after:w-0 after:hover:w-full ease-in after:transition-all w-fit"
            onClick={() => {
              setMenuShown((prevState: boolean) => !prevState);
            }}
          >
            Health Center
          </Link> */}
          <li
            onClick={() => {
              setMenuShown((prevState: boolean) => !prevState);
            }}
          >
            {" "}
            RACKETS
          </li>
          <li
            onClick={() => {
              setMenuShown((prevState: boolean) => !prevState);
            }}
          >
            {" "}
            BAGS
          </li>
          <li
            onClick={() => {
              setMenuShown((prevState: boolean) => !prevState);
            }}
          >
            {" "}
            APPAREL
          </li>
          <li
            onClick={() => {
              setMenuShown((prevState: boolean) => !prevState);
            }}
          >
            BALLS
          </li>
          <li
            onClick={() => {
              setMenuShown((prevState: boolean) => !prevState);
            }}
          >
            GEARS
          </li>
        </ul>
      </div>

      {/* VISIBLE ON DESKTOP  */}
      <div className="">
        <Image
          src="/user-linear.svg"
          alt="user icon"
          width="0"
          height="0"
          className=""
        />
      </div>

      {/* hamburger */}
      <div
        onClick={toggleMenu}
        className={`z-[999999999999] grid justify-self-end justify-between flex-col xl:hidden gap-1.5 cursor-pointer ${
          menuShown
            ? "bg-white fixed right-4 px-1.5 pt-5 py-4 rounded-full"
            : "bg-transparent"
        }`}
      >
        <span
          className={`w-6 h-[3px]  transition-all ease-out duration-150 delay-75 ${
            menuShown ? `rotate-[45deg] bg-black  w-6` : `bg-white`
          }`}
        ></span>
        <span
          className={`w-6 h-[3px] transition-all duration-150 ease-out delay-75 ${
            menuShown ? `rotate-[495deg] bg-black -translate-y-2  w-6 ` : `bg-white`
          }`}
        ></span>
        <span
          className={`ml-auto mr-0 w-6 h-[3px] bg-white transition-all ease-out duration-150 delay-75 ${
            menuShown ? `hidden` : ``
          }`}
        ></span>
      </div>
    </header>
  );
};