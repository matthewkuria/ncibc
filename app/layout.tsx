import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "New Creation International Bible College",
  description:
    "A non-denominational, TVET-licensed Bible college training ministers from the nations since 1996. 16-month Diploma in Christian Ministry, taught in English and Kiswahili.",
  keywords: [
    "Bible College Kenya",
    "NCIBC",
    "New Creation International Bible College",
    "Theology Diploma Kenya",
    "TVET Bible school Nakuru",
    "Ministry training Kenya",
    "Christian Ministry Diploma",
  ],
  openGraph: {
    title: "New Creation International Bible College | Nakuru, Kenya",
    description:
      "Equipping men and women for ministry and marketplace leadership through our 16-month Diploma program.",
    url: "https://ncibc.ac.ke",
    siteName: "NCIBC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Creation International Bible College",
    description: "Equipping men and women for ministry and marketplace leadership.",
  },  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
