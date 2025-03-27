"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2">
      <SunIcon className="h-4 w-4" />
      <Switch
        checked={isDark}
        onCheckedChange={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle theme"
      />
      <MoonIcon className="h-4 w-4" />
    </div>
  );
} 