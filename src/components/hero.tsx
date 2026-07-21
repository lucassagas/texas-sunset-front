import hero from "../assets/new_hero.webp";
import { Band } from "./band";
import heroBg from "../assets/hero_bg.webp";
import faixa from "../assets/faixa.webp";

export const Hero = () => {
  return (
    <section
      className="w-full overflow-hidden bg-brand-bg relative"
      style={{ backgroundImage: `url(${heroBg})` }}
    >

      <img
        src={faixa}
        alt="patrocinadores"
        className="absolute top-0 right-0 w-75 z-0"
      />

      <div className="relative flex w-full flex-col items-center z-20">
        <img
          src={hero}
          alt="Texas Sunset"
          className="block h-auto max-h-screen w-full"
        />


        <div className="absolute bottom-6">
          <Band />
        </div>
      </div>
    </section>
  );
};
