import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer/Footer";
import Brand from "./components/Brand/Brand";
import Feature from "./components/Feature/Feature";
import AboutUs from "./components/AboutUs/AboutUs";
import Work from "./components/WorkProccess/Work";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Brand />
        <Feature />
        <AboutUs />
        <Work />
        {children}
        <Footer />
      </body>
    </html>
  );
}
