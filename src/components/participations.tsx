import mai from "../assets/participants/participant_mai.webp";
import participants from "../assets/participants/participants.webp";
import artistas from '../assets/participations-cards/artistas.png'
import doisPalcos from '../assets/participations-cards/dois_palcos.png'
import estrutura from '../assets/participations-cards/estrutura.png'

export const Participations = () => {
  return (
    <section className="bg-brand-bg py-12 lg:py-16 mt-15 overflow-hidden">
      <h1 className="text-5xl font-thunderhouse font-normal text-tertiary text-center">
        O EVENTO CONTARÁ COM:
      </h1>

      <div className="flex flex-col items-center">
        <div className="w-[90%] relative">
          <img src={mai} className="w-full" alt="Mai" />
          <span className="absolute top-[50%] right-[15%]  text-white">
            <p className="text-4xl font-aeonik">Show completo de</p>{" "}
            <p className="text-7xl font-thunderhouse">MAIARA COELHO</p>
             <p className="text-2xl font-aeonik text-pink-bg -mt-2">Gravação de DVD</p>
          </span>
        </div>

        <div className="w-[90%] relative -mt-10">
          <img
            src={participants}
            className="w-full max-w-none"
            alt="Coming Soon"
          />
          <span className="absolute bottom-[5%] left-[5%]  text-white">
            <p className="text-4xl font-aeonik">
              <strong className="font-thunderhouse font-normal text-7xl">
                ATRAÇÕES NACIONAIS
              </strong>{" "}
              <br /> JÁ{" "}
              <strong className="font-thunderhouse font-normal text-7xl">CONFIRMADA</strong>
            </p>
          </span>
        </div>

        <div className="w-[90%] flex gap-4 items-center justify-between mt-10">
          <div className="bg-[#6c2b19] h-110 p-5 flex rounded-[40px] rounded-tr-[100px] max-w-80 w-full relative overflow-hidden">
            <img src={artistas} alt="artistas" className="absolute -top-6 w-full left-0" />
            <span className="text-xl text-white mt-auto">
              ARTISTAS <br />
              CONVIDADOS DE <br />
              <strong className="text-3xl font-thunderhouse font-normal tracking-[2px]">
                SANTA CATARINA;
              </strong>
            </span>
          </div>
          <div className="bg-[#6c2b19] h-110 p-5 flex rounded-[40px] rounded-tl-[45px] rounded-tr-[100px] max-w-80 w-full relative overflow-hidden">
            <img src={doisPalcos} alt="dois palcos" className="absolute -top-1 w-full left-0" />
            <span className="text-xl text-white mt-auto">
              <strong className="text-4xl font-thunderhouse tracking-[2px] font-normal">
                DOIS PALCOS
              </strong>
              <br />
              PARA GARANTIR <br />
              ATRAÇÕES DURANTE <br />
              TODO O EVENTO;
            </span>
          </div>
          <div className="bg-[#6c2b19] h-110 p-5 flex rounded-[40px] rounded-tl-[42px] rounded-tr-[100px] max-w-80 w-full relative overflow-hidden">
            <img src={estrutura} alt="estrutura" className="absolute -top-1 w-full left-0" />
            <span className="text-xl text-white mt-auto">
              <strong className="text-4xl font-thunderhouse tracking-[2px] font-normal">
                ESTRUTURA <br />
                TEMÁTICA
              </strong>
              <br />
              INSPIRADA <br />
              NO UNIVERSO <br />
              <strong className="text-4xl font-thunderhouse font-normal tracking-[2px]">
                TEXAS/COUNTRY;
              </strong>
            </span>
          </div>
          <div className="bg-[#6c2b19] h-110 p-5 flex rounded-[40px] rounded-tl-[42px] rounded-tr-[100px] max-w-80 w-full relative overflow-hidden">
                   <img src={estrutura} alt="estrutura" className="absolute -top-1 w-full left-0" />
            <span className="text-xl text-white mt-auto">
              PRAÇA DE <br />
              ALIMENTAÇÃO,
              <br /> BARES E <br />
              <strong className="text-4xl font-thunderhouse font-normal tracking-[2px]">
                ESPAÇOS <br /> EXCLUSIVOS.
              </strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
