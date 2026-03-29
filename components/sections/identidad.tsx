"use client";

import { SectionTag } from "@/components/ui/section-tag";
import { SectionTitle } from "@/components/ui/section-title";

const values = [
  {
    title: "Valentia",
    description:
      "El miedo se rinde ante un corazon Ratels. Enfrentamos cada rutina y competencia con determinacion total.",
  },
  {
    title: "Resiliencia",
    description:
      "Caemos, nos levantamos, lo hacemos mejor. La piel de hierro se forja en los momentos dificiles.",
  },
  {
    title: "Lealtad de equipo",
    description: "Nadie cae solo. Somos un solo cuerpo, una sola voz, un solo rugido.",
  },
  {
    title: "Excelencia tecnica",
    description:
      "Pasion sin tecnica es ruido. Combinamos el corazon de fuego con la precision metalica.",
  },
];

export function Identidad() {
  return (
    <section id="identidad" className="bg-background">
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal-left">
            <SectionTag>Nuestra esencia</SectionTag>
            <SectionTitle>
              Fuerza
              <br />
              <em>imparable.</em>
              <br />
              Coraje
              <br />
              sin limites.
            </SectionTitle>
            <div className="metal-line" />
            <div className="border-l-[3px] border-primary pl-6 my-8 font-display text-[1.7rem] tracking-[0.05em] text-muted leading-tight">
              &quot;No tememos,
              <br />
              no fingimos,
              <br />
              <em className="text-primary not-italic">no caemos.</em>
              <br />
              Somos Ratels.&quot;
            </div>
            <p className="text-[0.95rem] text-muted leading-relaxed">
              El Ratel —tejon melero— es uno de los animales mas valientes del planeta. No
              retrocede ante nada. Ese es nuestro espiritu traducido al cheerleading.
            </p>
          </div>

          <div className="reveal-right flex flex-col gap-5">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card/30 border border-border border-l-[3px] border-l-primary px-7 py-5 transition-all duration-300 hover:bg-primary/5 hover:translate-x-1.5"
              >
                <h3 className="font-mono text-[0.7rem] tracking-[0.22em] text-primary uppercase mb-1">
                  {value.title}
                </h3>
                <p className="text-[0.95rem] text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
