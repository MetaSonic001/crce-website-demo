import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
const open_sans = Open_Sans({ subsets: ["latin"], display: "swap" });
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
