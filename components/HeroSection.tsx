type Props = {};

export default function HeroSection({}: Props) {
  return (
    <section className="bg-hero-bg bg-cover bg-[#3B3B3B] text-white text-center h-[90vh] md:h-[584px] mt-[92px] w-full flex gap-8 justify-center flex-col items-center px-4">
      <h1 className="text-4xl md:text-[40px] leading-10 font-bold max-w-[644px]">
        Premium Rackets Collection: Unleash Your Game
      </h1>
      <p className="font-bold max-w-[644px] md:text-xl">
        Crafted for Champions: Each Racket Combines Precision, Power, and
        Innovation to Elevate Your Game
      </p>
    </section>
  );
}