import type { Metadata } from "next";
import { Inter, Russo_One, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const russoOne = Russo_One({
  variable: "--font-russo",
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KINGOFJAVA777 — Персональный сайт для легенды Lineage 2",
  description: "Премиум дизайн сайта для стримера KINGOFJAVA777. Интеграция всех платформ, мультиязычность, анимации и частицы.",
  keywords: ["KINGOFJAVA777", "Lineage 2", "стример", "gaming", "website"],
  authors: [{ name: "se1dhe" }],
  openGraph: {
    title: "KINGOFJAVA777 — Персональный сайт",
    description: "Премиум дизайн для легенды Lineage 2",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${russoOne.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
