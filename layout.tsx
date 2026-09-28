import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boteco de Goldshire | Guilda da Aliança",
  description: "O ponto de encontro da guilda brasileira da Aliança em Azeroth.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
