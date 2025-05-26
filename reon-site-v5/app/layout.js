import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lin Myat Phyo | Full Stack Web Developer",
  description: "Portfolio of Lin Myat Phyo, a Full Stack Web Developer specializing in NextJS, React, and MongoDB",
  icons: {
    icon: [
      {
        url: "/logo/logo.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/logo/logo.png",
        type: "image/png", 
        sizes: "16x16",
      },
    ],
    shortcut: "/logo/logo.png",
    apple: [
      {
        url: "/logo/logo.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/logo/logo.png",
      },
      {
        rel: "icon", 
        type: "image/png",
        sizes: "512x512",
        url: "/logo/logo.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
