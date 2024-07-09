"use client";

import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function BodyComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <div className="">
      {path !== "/checkout" && <Navbar />}

      {children}
      {path !== "/checkout" && <Footer />}
    </div>
  );
}
