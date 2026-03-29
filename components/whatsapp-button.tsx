"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "573001234567"; // Update with actual number
const WHATSAPP_MESSAGE = "Hola! Quiero informacion sobre Ratels All Stars";

export function WhatsAppButton() {
  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
      title="Escribir por WhatsApp"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
}
