import Image from "next/image";

export default function FilterBtn() {
  return (
    <div>
      <button className="flex items-center gap-2 text-sm py-4 px-4 w-fit border-r border-[#A1A1A1]">
        {" "}
        <Image
          src="/filter.svg"
          alt="filter icon"
          width="0"
          height="0"
          className="w-4 h-4"
        />
        SHOW FILTERS
        <Image
          src="/chevron-down.svg"
          alt="arrow down"
          width="0"
          height="0"
          className="w-4 h-4 hidden sm:inline-block"
        />
      </button>
    </div>
  );
}
