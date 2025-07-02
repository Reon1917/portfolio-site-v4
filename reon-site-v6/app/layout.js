import { Inter, Playfair_Display, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import ScrollProgress from "@/components/scroll-progress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata = {
  title: "Lin Myat Phyo - Web Developer Portfolio",
  description: "Web Developer from Myanmar, currently studying at Assumption University of Thailand. Passionate about creating user-centric web experiences.",
  keywords: ["web developer", "portfolio", "next.js", "react", "javascript", "typescript", "myanmar developer"],
  authors: [{ name: "Lin Myat Phyo" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Lin Myat Phyo - Web Developer Portfolio",
    description: "Web Developer from Myanmar, currently studying at Assumption University of Thailand.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${firaCode.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
