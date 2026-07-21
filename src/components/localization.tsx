import bg from "../assets/madeira-ingresso.webp";
import palco from "../assets/palco.webp";
import { Band } from "./band";

export const Localization = () => {
  return (
    <section
      className="bg-brand-bg py-30 mt-10 flex flex-col items-center justify-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-pink-bg p-2 px-10 mb-5 absolute -top-7">
        <strong className="text-tertiary font-thunderhouse text-4xl font-normal">
          MAPA DO LOCAL
        </strong>
      </div>
      <div className="flex flex-col items-center w-full overflow-x-hidden relative">
        <img src={palco} alt="palco" className="w-[80%] z-20" />
        <div className="absolute -rotate-6 top-40 z-10">
          <Band />
        </div>
      </div>
      <button
        onClick={() =>
          window.open(
            "https://www.pensanoevento.com.br/sitev2/eventos/104149/18-anos-carreira-maiara-coelho",
            "_blank",
          )
        }
        className="bg-brand-bg py-2 px-5 rounded-3xl text-tertiary font-aeonik font-bold text-3xl absolute -bottom-6 left-1/2 -translate-x-1/2 cursor-pointer z-10 text-nowrap border-5 border-tertiary"
      >
        COMPRE AGORA
      </button>
    </section>
  );
};
