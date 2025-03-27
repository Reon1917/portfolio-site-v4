"use client";

import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

export function Providers({ children }) {
  return (
    <ThemeProvider>
      {children}
      <Toaster />
    </ThemeProvider>
  );
} 