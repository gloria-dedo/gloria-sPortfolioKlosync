import { FaWhatsapp } from "react-icons/fa6";
import { WHATSAPP_URL } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Me"
      className="group fixed right-6 bottom-6 z-50 flex items-center justify-center gap-3 overflow-hidden rounded-lg text-white shadow-lg transition-all duration-300 ease-in-out"
    >
      <span className="ml-2 w-0 rounded-lg bg-green-500 px-3 py-2 pr-4 text-sm font-medium whitespace-nowrap opacity-0 transition-all duration-300 group-hover:w-auto group-hover:opacity-100">
        WhatsApp Me
      </span>
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500 group-hover:rounded-l-lg">
        <FaWhatsapp className="text-3xl" />
      </div>
    </a>
  );
}
