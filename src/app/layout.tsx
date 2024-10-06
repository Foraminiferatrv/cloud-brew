import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header/header";

const rubik = localFont({
  src: "./fonts/RobotoCondensed-VariableFont_wght.ttf",
  variable: "--font-rubik",
  weight: "100 400 500 700 900",
});

export const metadata: Metadata = {
  title: "Cloud Brew",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="size-full">
      <body className={`${rubik.variable} font-sans `}>
        <Header />
        <main className=" max-w-[1200px] mx-auto">{children}</main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </body>
    </html>
  );
}
