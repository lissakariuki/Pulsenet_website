import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "PulseNet - Kenya's Leading Fiber Internet Provider",
  description: "PulseNet brings ultra-fast fiber internet to Kenya. Get unlimited data, free installation, and 24/7 support. Starting from KES 2,000/month. Available in Nairobi, Westlands, Karen, and more areas.",
  keywords: ["fiber internet", "Kenya", "Nairobi", "high-speed internet", "ISP", "broadband", "WiFi", "internet provider", "fiber optic", "PulseNet"],
  authors: [{ name: "PulseNet Kenya" }],
  creator: "PulseNet Kenya",
  publisher: "PulseNet Kenya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pulsenet.co.ke"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pulsenet.co.ke",
    siteName: "PulseNet Kenya",
    title: "PulseNet - Kenya's Leading Fiber Internet Provider",
    description: "Get ultra-fast fiber internet in Kenya. Unlimited data, free installation, 24/7 support. Starting from KES 2,000/month. Available in Nairobi and surrounding areas.",
    images: [
      {
        url: "/open.png",
        width: 1200,
        height: 630,
        alt: "PulseNet - Kenya's Leading Fiber Internet Provider",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseNet - Kenya's Leading Fiber Internet Provider",
    description: "Get ultra-fast fiber internet in Kenya. Unlimited data, free installation, 24/7 support. Starting from KES 2,000/month.",
    images: ["/open.png"],
    creator: "@pulsenet_ke",
    site: "@pulsenet_ke",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Internet Service Provider",
  classification: "Business",
  other: {
    "theme-color": "#2563eb",
    "msapplication-TileColor": "#2563eb",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "PulseNet",
    "application-name": "PulseNet",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PulseNet" />
        <meta name="application-name" content="PulseNet" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
