import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Libre_Baskerville, Poppins } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre_baskerville",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Lumos Learning",
  description: "Created for the purpose of promoting the Lumos college counseling program",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${poppins.variable}`}>
      <body className="bg-bgblue font-poppins">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
