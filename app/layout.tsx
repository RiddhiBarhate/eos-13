import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eos 13",
  description: "Welcome to Eos 13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
