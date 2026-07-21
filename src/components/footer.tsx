import { FaInstagram, FaYoutube, FaFacebookF } from "../assets/icons";
import mai from "../assets/footer/mai.webp";
import logo from "../assets/logo.png";
import heroBg from "../assets/hero_bg.webp";

export const Footer = () => {
  return (
    <footer className="bg-brand-bg py-12lg:py-16 mt-15 ">
      <div className="flex justify-center mb-10 px-4">
        <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/gPaWiJM3DKo"
            title="Texas Sunset Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div className="flex relative">
        <img src={mai} alt="mai" className="w-180 -ml-20 z-20" />
        <div className="absolute flex flex-col bottom-30 right-20 z-40">
          <img src={logo} alt="logo" className="w-100" />
          <div className="flex gap-3 items-center justify-center mt-10">
            <p className="text-2xl text-white">@texassunset_</p>
            <a
              className="h-9 w-9 bg-white rounded-full flex items-center justify-center"
              href="https://www.facebook.com/texassunset_"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              className="h-9 w-9 bg-white rounded-full flex items-center justify-center"
              href="https://www.instagram.com/texassunset_/"
            >
              <FaInstagram size={24} />
            </a>
            <a
              className="h-9 w-9 bg-white rounded-full flex items-center justify-center"
              href="https://www.youtube.com/@texassunset_"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
        <div className="h-125 bg-primary w-full absolute bottom-0 z-10"       style={{ backgroundImage: `url(${heroBg})` }} />
      </div>
    </footer>
  );
};
