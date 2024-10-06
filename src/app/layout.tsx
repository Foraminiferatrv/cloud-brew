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
    <html lang="en" className="">
      <body
        className={`${rubik.variable} size-full h-[100vh] w-[100vw] font-sans bg-white`}
      >
        <Header />
        <main className="h-[calc(100vh-3rem)] w-full overflow-y-auto">
          {children}
        </main>
        <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
      </body>
    </html>
  );
}
