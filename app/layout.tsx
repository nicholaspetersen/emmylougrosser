import type { Metadata } from "next";
import { Crimson_Pro, Crimson_Text, Inter } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  display: "swap",
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Emmylou Grosser | Biblical Hebrew Poetry Scholar",
  description:
    "Dr. Emmylou Grosser is a scholar specializing in biblical Hebrew poetry, cognitive poetics, and linguistics. Author of Unparalleled Poetry (Oxford University Press, 2023).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonPro.variable} ${crimsonText.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
