export const MaiSection = () => {
  return (
    <section className="bg-brand-bg px-6 py-12 md:px-10 lg:px-16 lg:py-16">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr_1fr] lg:gap-10 bg-red-">
        <div>
          <h2 className="font-thunderhouse text-[3.4rem] leading-[0.82] text-primary uppercase">
            Maiara
            <br />
            Coelho
          </h2>

          <p className="mt-5 text-[0.875rem] leading-[1.2] text-[#3b241d] max-w-sm">
            Maiara Coelho é cantora e compositora catarinense, natural de
            Palhoça (SC), com uma trajetória iniciada em 2008. Em agosto de
            2026, celebra 18 anos de carreira, consolidando seu nome como uma
            das principais vozes do sertanejo em Santa Catarina.
            <br />
            <br />
            Ao longo dessa trajetória, dividiu palco com grandes nomes da música
            brasileira, como Zezé Di Camargo & Luciano, Chitãozinho & Xororó,
            Daniel, Henrique & Juliano, Marília Mendonça, Maiara & Maraisa,
            Simone Mendes e Gusttavo Lima, entre outros.
            <br />
            <br />O Texas Sunset by Maiara Coelho marca a celebração dos seus 18
            anos de carreira, reunindo música, experiências e a essência da
            artista em um festival country inédito.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center -mb-5">
          <div className="flex w-full items-center justify-center rounded-[18px] bg-primary shadow-[0_12px_30px_rgba(0,0,0,0.08)] md:h-95 md:max-w-85">
            <span className="font-aeonik text-lg uppercase tracking-wide text-white md:text-xl">
              FOTOS MAI
            </span>
          </div>

          <div className="mt-4 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
          </div>
        </div>

        <div className="justify-self-start lg:justify-self-end">
          <h3 className="font-thunderhouse text-[4.25rem] leading-[0.82] uppercase text-primary md:text-[5.25rem] lg:text-[7.8rem]">
            Especial
            <br />
            18 anos
            <br />
            de carreira
          </h3>
        </div>
      </div>
    </section>
  );
};
