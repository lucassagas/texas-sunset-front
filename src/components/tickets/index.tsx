import { Band } from "../band";
import { Card } from "./card";

export const Tickets = () => {
  return (
    <section className="bg-brand-bg py-12 lg:py-16 mt-10 flex flex-col items-center justify-start relative h-260 overflow-hidden">
      <div className="w-[120%] -mb-38 z-40">
        <Band />
      </div>

      <div className="bg-purple-bg rounded-[60px] p-10 pt-24 flex flex-col items-center h-168 w-[70%] relative z-10">
        <span className="text-text-secundary font-thunderhouse font-normal text-[66px] leading-15 mt-20">
          INGRESSOS PROMOCIONAIS <br />{" "}
          <span className="text-8xl">
            DE <strong className="text-white font-normal">LANÇAMENTO:</strong>
          </span>
        </span>

        <div className="flex gap-4 mt-13">
          <Card
            title="PISTA"
            price={30}
            description="*A pista possui excelente visibilidade, inclusive para o segundo palco."
          />
          <Card
            title="ÁREA VIP"
            price={50}
            description="* A Área VIP fica mais próxima do palco principal"
          />
        </div>
      </div>

      <div className="mt-auto -mb-5 bg-purple-bg px-30 py-2 rounded-full text-white text-xl">
        *Também temos <strong>opções de camarotes</strong>, ideais para <br />{" "}
        grupos que buscam <strong>mais conforto e exclusividade.</strong>
      </div>

      <div className="w-[120%] rotate-8 absolute bottom-120 z-0">
        <Band />
      </div>
    </section>
  );
};
