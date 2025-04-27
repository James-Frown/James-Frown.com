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
  title: "James Brown | Front-End Developer & Interaction Designer",
  description:
    "Welcome to my portfolio. I'm James Brown, a Front-End Developer and Interaction Designer who creates engaging, thoughtful digital experiences. Let's build something amazing together.",
  keywords:
    "James Brown, Front-End Developer, Interaction Designer, Portfolio, Web Developer, UX Design, UI Design, Next.js Developer, JavaScript Developer, Creative Web Design",
  authors: [{ name: "James Brown", url: "https://james-frown.com" }],
  creator: "James Brown",
  openGraph: {
    title: "James Brown | Front-End Developer & Interaction Designer",
    description:
      "Explore the portfolio of James Brown — a passionate Front-End Developer and Interaction Designer specializing in creating thoughtful, user-first digital experiences.",
    url: "https://james-frown.com",
    siteName: "James Brown Portfolio",
    images: [
      {
        url: "https://james-frown.com/og-image.jpg", // Update this with your actual OG image path!
        width: 1200,
        height: 630,
        alt: "James Brown Portfolio Website Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Brown | Front-End Developer & Interaction Designer",
    description:
      "Welcome to my portfolio website. Let's connect and build meaningful web experiences together.",
    images: ["https://james-frown.com/og-image.jpg"], // Same image as Open Graph
    // Add your Twitter username here if you want
  },
  metadataBase: new URL("https://james-frown.com"),
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
        <div>Hello Nav</div>
        {children}
        <footer>Hello Footer</footer>
      </body>
    </html>
  );
}
