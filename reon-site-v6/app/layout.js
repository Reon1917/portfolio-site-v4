import { Inter, Playfair_Display, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"]
});

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Lin Myat Phyo - Web Developer Portfolio",
  description: "Portfolio of Lin Myat Phyo, a passionate web developer from Myanmar currently studying at Assumption University of Thailand. Specialized in React, Next.js, and modern web technologies.",
  keywords: "web developer, portfolio, React, Next.js, JavaScript, TypeScript, Myanmar, Thailand",
  authors: [{ name: "Lin Myat Phyo" }],
  creator: "Lin Myat Phyo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://linmyatphyo.dev",
    title: "Lin Myat Phyo - Web Developer Portfolio",
    description: "Portfolio of Lin Myat Phyo, a passionate web developer from Myanmar currently studying at Assumption University of Thailand.",
    siteName: "Lin Myat Phyo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lin Myat Phyo - Web Developer Portfolio",
    description: "Portfolio of Lin Myat Phyo, a passionate web developer from Myanmar currently studying at Assumption University of Thailand.",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${firaCode.variable} antialiased`}
        style={{
          fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
        }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
