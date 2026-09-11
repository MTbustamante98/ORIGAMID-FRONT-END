import "./globals.css";
import type { Metadata } from "next";
import Menu from "@/src/components/menu";

export const metadata: Metadata = {
  title: "Origamid Next",
  description: "Criado por Origamid",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body className="min-h-full flex flex-col">
        <Menu />
        {children}
      </body>
    </html>
  );
}
