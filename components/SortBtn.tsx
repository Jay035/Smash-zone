import Image from "next/image";

export default function SortBtn() {
  return (
    <div>
      <button className="flex items-center gap-2 text-sm w-fit py-4 px-4 border-l border-[#A1A1A1]">
        {" "}
        SORT BY
        <Image
          src="/chevron-down.svg"
          alt="arrow down"
          width="0"
          height="0"
          className="w-4 h-4"
        />
      </button>
    </div>
  );
}
