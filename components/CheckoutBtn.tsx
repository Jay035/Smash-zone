import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {};

export default function CheckoutBtn({}: Props) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/checkout")}
      className="bg-[#FBC02D] hover:bg-[#FBC02D]/80 py-4 px-6 rounded-[38px] w-full font-exo-2 font-medium text-[#212121]"
    >
      CHECKOUT
    </button>
  );
}
