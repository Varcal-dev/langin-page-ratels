import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Rajdhani, Orbitron } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const orbitron = Orbitron({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ratels All Stars — Cheerleading en Florencia, Caqueta",
  description:
    "Ratels All Stars es el club de cheerleading mas audaz de Florencia, Caqueta. Con grupos formativos y competitivos para todas las edades, forjamos guerreros del escenario con piel de hierro y corazon de fuego. Unete a la tribu Ratels hoy!",
  keywords: [
    "cheerleading",
    "Florencia",
    "Caqueta",
    "club deportivo",
    "porrismo",
    "Ratels All Stars",
  ],
  openGraph: {
    title: "Ratels All Stars — Cheerleading en Florencia, Caqueta",
    description:
      "El club de cheerleading mas audaz de Florencia. Grupos formativos y competitivos para todas las edades.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#800020",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${rajdhani.variable} ${orbitron.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
