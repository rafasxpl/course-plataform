import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import Header from "@/components/header/Header";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Knowly - Página inicial",
  description: "Os melhores cursos de tecnologia gratuítos do Youtube",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.className} antialiased`}>
        <Header />
        <main className="mx-auto md:max-w-[915px]">
          {children}
        </main>
      </body>
    </html>
  );
}
