import type { Metadata } from "next";
import { Playfair_Display, Exo_2 } from "next/font/google";
import "./globals.css";
import { ShopContextProvider } from "@/context/ContextProvider";
import BodyComponent from "./body";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

const exo_2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo-2",
});

export const metadata: Metadata = {
  title: "Smash Zone",
  description: "Premium Sports Collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.className} ${exo_2.variable} scroll-smooth overflow-x-hidden`}
      >
        <ShopContextProvider>
          <BodyComponent>
            
            {children}
          </BodyComponent>
        </ShopContextProvider>
      </body>
    </html>
  );
}
