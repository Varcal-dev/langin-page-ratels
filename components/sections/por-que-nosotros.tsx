"use client";

import { SectionTag } from "@/components/ui/section-tag";
import { SectionTitle } from "@/components/ui/section-title";

const reasons = [
  {
    icon: "🏆",
    title: "Enfoque competitivo real",
    description:
      "No solo entrenamos, competimos. Preparamos atletas para torneos regionales y nacionales con metodologia progresiva y estructurada.",
  },
  {
    icon: "🦡",
    title: "Cultura tribal unica",
    description:
      "Somos mas que un club: somos una tribu con rituales, identidad y mentalidad propias. Los Ratels no son atletas — son guerreros del escenario.",
  },
  {
    icon: "📐",
    title: "Metodo estructurado",
    description:
      "5 pilares de ensenanza con progresion tecnica clara. Desde cero hasta alto rendimiento — cada atleta avanza con proposito.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Para todas las edades",
    description:
      "Grupos desde los 4 anos hasta adultos. Un lugar donde toda la familia puede crecer en el mismo deporte.",
  },
  {
    icon: "🛡️",
    title: "Seguridad primero",
    description:
      "Entrenadores certificados y protocolo riguroso en stunts. El bienestar fisico y emocional del atleta es prioridad absoluta.",
  },
  {
    icon: "🔥",
    title: "Formacion integral",
    description:
      "Tecnica + mentalidad + caracter. Aprendes a no rendirte, a trabajar en equipo y a dominar el escenario.",
  },
];

export function PorQueNosotros() {
  return (
    <section id="porquenosotros" className="bg-gradient-to-b from-[#111] to-background">
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="reveal">
          <SectionTag>Diferenciador claro</SectionTag>
          <SectionTitle>
            Por que
            <br />
            <em>Ratels?</em>
          </SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="reveal p-9 bg-card border border-border relative overflow-hidden transition-all duration-300 hover:border-primary/40 hover:-translate-y-1.5 group after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-primary after:to-transparent after:opacity-0 after:transition-opacity hover:after:opacity-100"
            >
              <div className="text-3xl mb-3">{reason.icon}</div>
              <h3 className="font-mono text-[0.68rem] tracking-[0.18em] text-foreground uppercase mb-2.5">
                {reason.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
