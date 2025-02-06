import type { Metadata } from "next";
import "./globals.css";
import LayoutContent from "../components/LayoutContent";
import ReduxProvider from "@/components/reduxprovider";
import Provider from './redux/prodiver'  
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
    <html lang="en">
      
      <body>
        <ReduxProvider>
        <LayoutContent>
          {children}
        </LayoutContent>
        </ReduxProvider>
      </body>
    </html>
  );
}