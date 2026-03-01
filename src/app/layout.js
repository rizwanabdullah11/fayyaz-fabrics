import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fayyaz Fabrics - Premium Quality Fabrics",
  description: "Shop premium quality fabrics including Boski, Wool, Cotton, and Designer collections. Authentic brands with guaranteed quality since 1990.",
  keywords: "fabrics, boski, wool, cotton, designer fabrics, premium fabrics, Pakistani fabrics",
  openGraph: {
    title: "Fayyaz Fabrics - Premium Quality Fabrics",
    description: "Shop premium quality fabrics from top brands",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
