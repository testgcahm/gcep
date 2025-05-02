8import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Base URL for relative links
  metadataBase: new URL("https://gcep.vercel.app"),
  
  title: {
    default: "Gujranwala Child Education Program Society",
    template: "%s | GCEP Gujranwala",
  },
  
  description:
    "Empowering orphaned and underprivileged children in Gujranwala through free quality education. Support us in shaping a brighter future!",
  
  keywords: [
    "education",
    "charity",
    "non-profit",
    "Gujranwala",
    "orphan support",
    "child education",
    "GCEP"
  ],
  
  icons: {
    icon: "/logo.ico", // Updated for consistency
    shortcut: "/logo.ico",
  },
  
  alternates: {
    canonical: "https://gcep.vercel.app",
  },
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gcep.vercel.app",
    title: "Gujranwala Child Education Program Society",
    description:
      "Empowering orphaned and underprivileged children in Gujranwala through free quality education. Support us in shaping a brighter future!",
    siteName: "GCEP Gujranwala",
    images: [
      {
        url: "/og.jpeg", // Ensure this image exists on your server
        width: 1200,
        height: 630,
        alt: "GCEP - Providing Education for Every Child",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "GCEP Gujranwala",
    description:
      "Empowering orphaned and underprivileged children in Gujranwala through free quality education. Join our mission today!",
    images: ["/og.jpeg"],
  },
  
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {/* <Header />
        {children}*/} 
      </body>
    </html>
  );
}
