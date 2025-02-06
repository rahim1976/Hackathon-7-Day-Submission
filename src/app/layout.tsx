import type { Metadata } from "next";
import "./globals.css";
import LayoutContent from "../components/LayoutContent";
import { Inter, Manrope } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});


export const metadata: Metadata = {
  title: "Food Tuck",
  description: "A nice blend of taste at every bite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      
      <body>
        <LayoutContent>
          {children}
        </LayoutContent>
      </body>
    </html>
  );
}