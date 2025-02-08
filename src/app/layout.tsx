import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import { Footer } from "@/components/footer";

import { Header } from "@/components/header";
import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loja",
  description: "Loja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${font.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
