"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadeddata", () => {
        video.classList.add("loaded");
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="h-screen min-h-[680px] flex flex-col justify-center items-center relative overflow-hidden text-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/img/hero-poster.jpg"
          className="w-full h-full object-cover object-center opacity-0 transition-opacity duration-1200 [&.loaded]:opacity-100"
        >
          <source src="/video/hero-reel.mp4" type="video/mp4" />
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/40 via-40% to-background/80 to-85%">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_70%,rgba(128,0,32,0.25)_0%,transparent_70%)]" />
        </div>
      </div>

      {/* Scratch Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[22, 45, 68, 83].map((left, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-primary-dark to-transparent opacity-0 animate-[scratch_4s_ease-in-out_infinite]"
            style={{
              left: `${left}%`,
              height: `${70 - i * 10}%`,
              top: `${15 + i * 5}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-2">
        <div className="font-mono text-[0.65rem] tracking-[0.4em] text-primary uppercase mb-6 opacity-0 translate-y-5 animate-[fadeUp_0.8s_0.2s_forwards]">
          Club de Cheerleading · Formativo &amp; Competitivo · Florencia, Caqueta
        </div>

        <h1 className="font-display text-[clamp(5rem,14vw,12rem)] leading-[0.88] tracking-[0.02em] opacity-0 translate-y-10 animate-[fadeUp_0.9s_0.5s_forwards]">
          <span className="text-muted">RATELS</span>
          <br />
          <span className="text-primary">ALL</span>
          <br />
          <span className="text-muted">STARS</span>
        </h1>

        <p className="font-mono text-[clamp(0.75rem,2vw,1rem)] tracking-[0.35em] text-muted mt-6 uppercase opacity-0 translate-y-5 animate-[fadeUp_0.8s_0.9s_forwards]">
          Piel de hierro · Corazon de fuego
        </p>

        <div className="mt-10 flex gap-5 justify-center flex-wrap opacity-0 translate-y-5 animate-[fadeUp_0.8s_1.2s_forwards]">
          <Link href="#inscripciones" className="btn-primary">
            Inscribete Ahora
          </Link>
          <Link href="#test-nivel" className="btn-outline">
            En que grupo estas?
          </Link>
        </div>

        <div className="mt-8 flex gap-8 justify-center flex-wrap opacity-0 animate-[fadeIn_1s_1.8s_forwards]">
          {["Edades 4 a 30+ anos", "Sin experiencia previa", "Desde $80.000/mes"].map(
            (badge) => (
              <span
                key={badge}
                className="flex items-center gap-2 font-sans text-sm tracking-[0.1em] text-muted uppercase before:content-['✓'] before:text-primary before:font-bold"
              >
                {badge}
              </span>
            )
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-0 animate-[fadeIn_1s_2s_forwards]">
        <span className="font-mono text-[0.5rem] tracking-[0.3em] text-muted uppercase">
          -
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
