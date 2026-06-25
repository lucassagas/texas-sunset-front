import hero from "../assets/hero.webp";
import { Band } from "./band";

export const Hero = () => {
  return (
    <section className="w-full overflow-hidden bg-brand-bg">
      <div className="flex w-full flex-col items-center pb-6 sm:pb-8 lg:pb-10">
        <img
          src={hero}
          alt="Texas Sunset"
          className="block h-auto max-h-screen w-full"
        />

        <div className="-mt-4 w-[108%] sm:-mt-6 sm:w-[112%] lg:-mt-8 lg:w-[120%]">
          <Band />
        </div>
      </div>
    </section>
  );
};
