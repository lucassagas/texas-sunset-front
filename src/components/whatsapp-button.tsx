import { FaWhatsapp } from "react-icons/fa6";
export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511974421689"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};
