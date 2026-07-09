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
  metadataBase: new URL("https://medprojects.in"),
  title: {
    default: "MED Projects | Land Development in Hyderabad",
    template: "%s | MED Projects",
  },
  description:
    "MED Projects is a family-owned land development company crafting thoughtfully planned plots in Ibrahimpatnam, Telangana.",
  applicationName: "MED Projects",
  keywords: [
    "MED Projects",
    "Land Development Hyderabad",
    "Ibrahimpatnam plots",
    "Telangana real estate",
  ],
  authors: [{ name: "MED Projects" }],
  creator: "MED Projects",
  publisher: "MED Projects",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "MED Projects | Land Development in Hyderabad",
    description:
      "Thoughtfully planned land development projects in Ibrahimpatnam, Telangana.",
    siteName: "MED Projects",
    images: [
      {
        url: "/logo.png",
        width: 329,
        height: 96,
        alt: "MED Projects Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "MED Projects | Land Development in Hyderabad",
    description:
      "Thoughtfully planned land development projects in Ibrahimpatnam, Telangana.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: ["/logo.png"],
    apple: [{ url: "/logo.png", type: "image/png" }],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
