import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Lin Myat Phyo - Web Developer",
  description: "Portfolio of Lin Myat Phyo, a passionate web developer from Myanmar studying at Assumption University, specializing in modern web technologies.",
  keywords: "web developer, portfolio, Next.js, React, Tailwind CSS, Myanmar, Bangkok",
  authors: [{ name: "Lin Myat Phyo" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--paper-bg)] text-[var(--text-primary)] paper-texture">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem={true}
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
