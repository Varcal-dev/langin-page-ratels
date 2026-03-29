"use client";

import { SectionTag } from "@/components/ui/section-tag";
import { SectionTitle } from "@/components/ui/section-title";

const groups = [
  {
    icon: "⭐",
    age: "4–7",
    name: "Mini Ratels",
    description:
      "El primer rugido. Introduccion al cheerleading mediante el juego, el ritmo y el movimiento. Desarrollo motor, coordinacion y amor por el deporte desde cero.",
    tags: ["Formativo", "Bases", "Juego"],
  },
  {
    icon: "🔥",
    age: "8–11",
    name: "Junior Ratels",
    description:
      "Primeras stunts, acrobacias basicas y tecnica de pompones. Formacion en disciplina, trabajo en equipo y conciencia de escenario.",
    tags: ["Formativo", "Stunts", "Acrobacia"],
  },
  {
    icon: "⚡",
    age: "12–15",
    name: "Youth Ratels",
    description:
      "Nivel intermedio: stunts avanzados, piramides, tumbling y coreografia competitiva. Preparacion para torneos regionales.",
    tags: ["Competitivo", "Piramides", "Tumbling"],
  },
  {
    icon: "🦅",
    age: "16–20",
    name: "Senior Ratels",
    description:
      "Alto rendimiento. Rutinas avanzadas, stunts de elite y competencia nacional. El corazon de fuego del equipo.",
    tags: ["Elite", "Nacional", "Alto Rendimiento"],
  },
  {
    icon: "👑",
    age: "21+",
    name: "Open / All Stars",
    description:
      "Division abierta para atletas adultos. Sin limite de edad. Competencia y pasion sin fronteras.",
    tags: ["Abierto", "Adultos", "Pasion"],
  },
  {
    icon: "🎭",
    age: "Mixto",
    name: "Performance Team",
    description:
      "Presentaciones, eventos y shows. Formacion artistica, expresion escenica y danza competitiva.",
    tags: ["Shows", "Danza", "Escenico"],
    special: true,
  },
];

export function Grupos() {
  return (
    <section id="grupos" className="bg-gradient-to-b from-background to-[#111]">
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="reveal">
          <SectionTag>Divisiones</SectionTag>
          <SectionTitle>
            Nuestros
            <br />
            <em>Grupos</em>
          </SectionTitle>
          <p className="text-muted text-base max-w-[580px] mt-4 mb-12">
            Hay un lugar para ti aqui — desde los 4 anos sin experiencia hasta adultos en
            competencia de elite.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <div
              key={index}
              className={`reveal relative overflow-hidden bg-card border p-9 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1.5 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,14px_100%,0_calc(100%-14px))] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100 ${
                group.special
                  ? "border-primary/30 bg-primary/5"
                  : "border-border"
              }`}
            >
              <div className="absolute top-5 right-5 text-3xl opacity-10">{group.icon}</div>
              <div className="font-display text-5xl text-primary leading-none mb-1">
                {group.age}
              </div>
              <div className="font-mono text-[0.7rem] tracking-[0.22em] text-foreground uppercase mb-4">
                {group.name}
              </div>
              <p className="text-sm text-muted leading-relaxed mb-5">{group.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
