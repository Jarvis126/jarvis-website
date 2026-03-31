import type { Metadata } from "next";
import "@fontsource-variable/inter/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jarvis — UI Lead & Product Designer",
  description:
    "Crafting Modern SaaS Experiences with Engineering Precision. Design systems, frontend craft, AI-driven workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen bg-white font-sans text-slate-600">
        {children}
      </body>
    </html>
  );
}
