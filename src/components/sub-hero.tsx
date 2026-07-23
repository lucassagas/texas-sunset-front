import { TbCalendarStats } from "react-icons/tb";
import heroBg from "../assets/hero_bg.webp";
import { RiMapPin2Fill } from "react-icons/ri";

export const SubHero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroBg})` }}
      className="w-full flex items-center justify-around h-110"
    >
      <div>
        <TbCalendarStats size={43} className="stroke-orange-bg mb-4" />
        <strong className="text-white font-thunderhouse font-normal text-8xl">15 DE AGOSTO</strong>
        <p className="text-white text-2xl">Início às 12:00</p>
      </div>
      <div className="h-40 w-px bg-white rounded" />
      <div className="flex flex-col text-center font-thunderhouse">
        <strong className="text-6xl text-white font-normal">UMA EXPERIÊNCIA</strong>
        <strong className="text-orange-bg text-[135px] font-normal leading-24">COUNTRY</strong>
        <strong className="text-white text-[80px] font-normal -mt-5">INESQUECÍVEL</strong>
      </div>
      <div className="h-40 w-px bg-white rounded" />
      <div>
        <div className="w-10 h-10 bg-orange-bg flex items-center justify-center rounded-full text-white mb-4">
          <RiMapPin2Fill size={24} />
        </div>
        <strong className="text-white font-thunderhouse font-normal text-8xl">SKY PARK</strong>
        <p className="text-white text-2xl">São José - SC</p>
      </div>
    </div>
  );
};
