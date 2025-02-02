import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "./providers";

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
    <html lang="en" className=''>
      <body className="bg-backgroundgreen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
