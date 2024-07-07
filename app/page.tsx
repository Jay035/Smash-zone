import ProductListing from "@/components/ProductListing";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-hero-bg bg-cover text-white text-center h-screen w-full flex gap-8 justify-center flex-col items-center px-4">
        <h1 className="text-4xl font-bold">
          Premium Rackets Collection: Unleash Your Game
        </h1>
        <p className="font-bold">
          Crafted for Champions: Each Racket Combines Precision, Power, and
          Innovation to Elevate Your Game
        </p>
      </div>
      <ProductListing />
    </main>
  );
}
