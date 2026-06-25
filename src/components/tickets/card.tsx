import logo from "../../assets/logo.png";

interface CardProps {
  title: string;
  price: number;
  description: string;
}

export const Card = ({ title, price, description }: CardProps) => {
  return (
    <div className="h-120 w-100 rounded-4xl overflow-hidden relative">
      <div className="w-full h-[60%] bg-white" />
      <div className="bg-tertiary rounded-4xl flex flex-col items-center p-10 absolute top-3 left-3 right-3 bottom-3">
        <img className="w-50" src={logo} alt="logo" />

        <div className="h-[0.5px] w-full my-5 bg-zinc-400/20" />

        <strong className="text-text-secundary font-thunderhouse text-4xl">
          {title}
        </strong>

        <div className="text-text-secundary font-thunderhouse flex gap">
          <span className="text-6xl mt-4 mr-2">R$</span>
          <span className="text-8xl">{price}</span>
          <span className="text-4xl mt-2 block">,00</span>
        </div>
        {price === 50 && (
          <span className="text-2xl text-text-secundary -mt-4 mb-2">
            {"(UNISSEX)"}
          </span>
        )}
        <span className="text-text-secundary text-center">{description}</span>

        <button
          onClick={() =>
            window.open(
              "https://www.pensanoevento.com.br/sitev2/eventos/104149/18-anos-carreira-maiara-coelho",
              "_blank",
            )
          }
          className="bg-brand-bg py-2 px-5 rounded-full text-zinc-900 font-aeonik font-bold text-2xl absolute bottom-6 cursor-pointer"
        >
          COMPRE AGORA
        </button>
      </div>
      <div className="w-full h-[40%] bg-purple-bg" />
    </div>
  );
};
