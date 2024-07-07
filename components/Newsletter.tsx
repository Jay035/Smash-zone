type Props = {};

export default function Newsletter({}: Props) {
  return (
    <section className="flex flex-col gap-6 text-[#3B3B3B]">
      <h2 className="font-bold text-2xl text-[#212121]">NEWSLETTER</h2>
      <p className="font-exo-2">
        Sign up to our newsletter to receive exclusive offers and updates.
      </p>
      <input
        className="p-4 font-exo-2 placeholder:text-[#3B3B3B] w-full rounded-[100px] bg-transparent border border-[#6E6E6E]"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
      />
      <button className="bg-[#212121] font-exo-2 text-[#FBC02D] hover:border-black hover:bg-transparent hover:border hover:text-black rounded-[38px] w-[241px] px-6 py-4">
        GET UPDATES
      </button>
    </section>
  );
}
