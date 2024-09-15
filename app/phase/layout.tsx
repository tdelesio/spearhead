import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import LeftNav from "../left-nav";
import { ReactNode, Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  viewport: 'width=device-width, initial-scale=1.0'
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="flex">
    {/* <LeftNav /> */}
    <main className="flex-1">





    <Suspense fallback={null}>
      {children}
      </Suspense>
      </main>
  </div>

  );
}
