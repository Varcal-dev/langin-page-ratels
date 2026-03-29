"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#porquenosotros", label: "Por que?" },
  { href: "#grupos", label: "Grupos" },
  { href: "#precios", label: "Precios" },
  { href: "#entrenadores", label: "Equipo" },
  { href: "#testimonios", label: "Resultados" },
  { href: "#test-nivel", label: "Test" },
  { href: "#ubicacion", label: "Ubicacion" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 md:px-16 py-4 transition-all duration-300",
          isScrolled
            ? "bg-background/98 border-b border-primary/30 backdrop-blur-sm"
            : "bg-gradient-to-b from-background/95 to-transparent backdrop-blur-[2px]"
        )}
      >
        <Link
          href="#hero"
          className="font-mono text-sm font-black tracking-[0.2em] text-foreground"
        >
          RATELS <span className="text-primary">*</span> ALL STARS
        </Link>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="w-6 h-6 text-foreground" />
        </button>

        <ul className="hidden md:flex gap-7 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-sans font-semibold text-xs tracking-[0.12em] text-muted uppercase transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#inscripciones"
              className="font-sans font-bold text-xs tracking-[0.15em] text-primary uppercase"
            >
              Inscribete
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-[150] bg-background/98 backdrop-blur-md transition-transform duration-300 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-8">
          <button
            className="self-end p-2 mb-8"
            onClick={closeMobileMenu}
            aria-label="Cerrar menu"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>

          <ul className="flex flex-col gap-6 list-none flex-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="font-sans font-semibold text-lg tracking-[0.1em] text-muted uppercase transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 mt-auto">
            <Link
              href="#inscripciones"
              className="btn-primary text-center"
              onClick={closeMobileMenu}
            >
              Inscribete Ahora
            </Link>
            <p className="font-mono text-xs tracking-[0.3em] text-muted text-center uppercase">
              Piel de hierro · Corazon de fuego
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
