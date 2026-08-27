import type { Metadata, Viewport } from "next";
import { Oswald, Libre_Baskerville, Inter, Anton } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "Coachella Valley Home Remodeling | Kitchen, Bath & Custom Renovations",
  description:
    "Premier home remodeling & luxury renovations across Palm Desert, Palm Springs, Rancho Mirage, and La Quinta. Licensed master craftsmen, fixed-price estimates.",
  keywords: [
    "Coachella Valley Home Remodeling",
    "Kitchen Remodel Palm Desert",
    "Bathroom Renovation Palm Springs",
    "Custom Home Contractor Coachella Valley",
    "Luxury Remodeling La Quinta",
  ],
  openGraph: {
    title: "Coachella Valley Home Remodeling | Master Builders",
    description: "Transform your kitchen and living spaces with Coachella Valley's premier remodeling contractor.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/images/simplified-home-remodeling-logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/simplified-home-remodeling-logo.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${anton.variable} ${libreBaskerville.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="bg-brand-black text-brand-gray-100 font-sans min-h-screen selection:bg-brand-gray-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
