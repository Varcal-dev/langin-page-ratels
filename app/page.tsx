import { Navbar } from "@/components/navbar";
import { UrgencyBanner } from "@/components/urgency-banner";
import { Hero } from "@/components/hero";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { PorQueNosotros } from "@/components/sections/por-que-nosotros";
import { Identidad } from "@/components/sections/identidad";
import { Grupos } from "@/components/sections/grupos";
import { ProgressBar } from "@/components/progress-bar";
import { RevealProvider } from "@/components/reveal-provider";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <WhatsAppButton />
      <UrgencyBanner />
      <Navbar />
      
      <main>
        <RevealProvider>
          <Hero />
          <div className="divider" />
          
          <PorQueNosotros />
          <div className="divider" />
          
          <Identidad />
          <div className="divider" />
          
          <Grupos />
          <div className="divider" />
          
          {/* More sections to be added */}
          <section id="precios" className="min-h-[50vh] flex items-center justify-center">
            <p className="text-muted font-mono text-sm tracking-widest uppercase">
              Seccion Precios - Por implementar
            </p>
          </section>
          
          <section id="entrenadores" className="min-h-[50vh] flex items-center justify-center">
            <p className="text-muted font-mono text-sm tracking-widest uppercase">
              Seccion Entrenadores - Por implementar
            </p>
          </section>
          
          <section id="testimonios" className="min-h-[50vh] flex items-center justify-center">
            <p className="text-muted font-mono text-sm tracking-widest uppercase">
              Seccion Testimonios - Por implementar
            </p>
          </section>
          
          <section id="test-nivel" className="min-h-[50vh] flex items-center justify-center">
            <p className="text-muted font-mono text-sm tracking-widest uppercase">
              Seccion Test de Nivel - Por implementar
            </p>
          </section>
          
          <section id="ubicacion" className="min-h-[50vh] flex items-center justify-center">
            <p className="text-muted font-mono text-sm tracking-widest uppercase">
              Seccion Ubicacion - Por implementar
            </p>
          </section>
          
          <section id="inscripciones" className="min-h-[50vh] flex items-center justify-center">
            <p className="text-muted font-mono text-sm tracking-widest uppercase">
              Seccion Inscripciones - Por implementar
            </p>
          </section>
          
          <section id="faq" className="min-h-[50vh] flex items-center justify-center">
            <p className="text-muted font-mono text-sm tracking-widest uppercase">
              Seccion FAQ - Por implementar
            </p>
          </section>
        </RevealProvider>
      </main>
    </>
  );
}
