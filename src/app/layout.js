import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Portefolio de Xabi GOÏTY",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}