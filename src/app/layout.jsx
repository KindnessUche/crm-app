import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CRM dashboard",
  description: "copyright by David Kindness U.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative flex `}
      >
        <div className="bg-gray-100 border-r-2 border-r-gray-200">
          <Navbar />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Modal />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
