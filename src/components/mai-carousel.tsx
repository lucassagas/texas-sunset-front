import { useState, useEffect, useCallback } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import m1 from "../assets/carrousel/M1.webp";
import m2 from "../assets/carrousel/M2.webp";
import m3 from "../assets/carrousel/M3.webp";
import m4 from "../assets/carrousel/M4.webp";
import m5 from "../assets/carrousel/M5.webp";
import m6 from "../assets/carrousel/M6.webp";
import m7 from "../assets/carrousel/M7.png";

const pictures = [m1, m2, m3, m4, m5, m6, m7];
const INTERVAL = 5000;

export const MaiCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % pictures.length),
    [],
  );

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + pictures.length) % pictures.length),
    [],
  );

  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[18px] shadow-[0_12px_30px_rgba(0,0,0,0.08)] aspect-[3/4] md:aspect-auto md:h-95 md:max-w-85">
        <button
          onClick={prev}
          className="absolute left-2 z-20 flex cursor-pointer items-center justify-center rounded-full bg-black/30 p-1 text-white transition-colors hover:bg-black/50"
        >
          <HiChevronLeft size={24} />
        </button>

        {pictures.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Maiara Coelho - foto ${i + 1}`}
            className={`absolute inset-0 h-full w-full rounded-[18px] object-cover transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <button
          onClick={next}
          className="absolute right-2 z-20 flex cursor-pointer items-center justify-center rounded-full bg-black/30 p-1 text-white transition-colors hover:bg-black/50"
        >
          <HiChevronRight size={24} />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-1.5">
        {pictures.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
              i === index ? "bg-primary" : "bg-zinc-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
