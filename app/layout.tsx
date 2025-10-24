import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Payment Slip X challenge",
  description:
    "Just for the fun of it.",
  metadataBase: new URL("https://pay-slip-two.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://pay-slip-two.vercel.app",
    siteName: "Moniepoint",
    title: "Payment Slip X challenge",
    description:
      "Just for the fun of it.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Payment Slip Landing Page Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payment Slip X challenge",
    description:
      "Just for the fun of it.",
    images: ["/opengraph-image.jpg"],
    creator: "@Devdanny",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen md:h-screen h-[110vh] bg-[#E6E7EB]`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
