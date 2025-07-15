import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lin Myat Phyo | Full-Stack Web Developer",
  description: "Full-Stack Web Developer with 2+ years of experience. Specialized in React, Next.js, and modern web technologies. Based in Bangkok, Thailand.",
  keywords: "Full-Stack Developer, Web Developer, React, Next.js, JavaScript, TypeScript, Bangkok, Thailand",
  authors: [{ name: "Lin Myat Phyo" }],
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
