import Link from "next/link";

type Props = {};

export default function CheckoutBtn({}: Props) {
  return (
    <button className="bg-[#FBC02D] hover:bg-[#FBC02D]/80 py-4 px-6 rounded-[38px] w-full font-exo-2 font-medium text-[#212121]">
      <Link href="/checkout">CHECKOUT</Link>
    </button>
  );
}
