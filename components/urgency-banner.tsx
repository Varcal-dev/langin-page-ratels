"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-center py-2 px-8 font-mono text-[0.6rem] tracking-[0.25em] text-foreground uppercase relative z-99">
      Cupos limitados
      <span className="opacity-60 mx-3">·</span>
      Inscripciones hasta el 15 de agosto
      <span className="opacity-60 mx-3">·</span>
      Ultimos lugares en Junior & Youth
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-white text-sm cursor-pointer opacity-70 hover:opacity-100"
        onClick={() => setIsVisible(false)}
        aria-label="Cerrar banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
