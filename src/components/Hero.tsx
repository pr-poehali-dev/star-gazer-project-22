import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/a6905b7c-2609-470f-a47e-feff25b9d34a/files/22b7a617-86ba-4216-9333-2bb703fbe964.jpg"
          alt="Urban night cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-6 leading-none">
          BLAST M.S.
        </h1>
        <p className="text-base md:text-lg max-w-xl mx-auto opacity-80 font-light tracking-wide">
          Слова острее ножа. Ритм тяжелее бетона.
        </p>
        <button className="mt-10 border border-white text-white uppercase text-sm tracking-widest px-8 py-3 hover:bg-white hover:text-black transition-all duration-300">
          Слушать
        </button>
      </div>
    </div>
  );
}