"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="mode-toggle-button p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition-colors duration-300 w-10 h-10 flex items-center justify-center"
    >
      <div className="relative flex items-center justify-center h-6 w-6">
        <Sun
          className={`absolute transition-transform duration-500 ${
            theme === "dark" ? "transform scale-0 rotate-90" : "transform scale-100 rotate-0"
          }`}
          style={{ color: theme === "dark" ? "transparent" : "#fbbf24" }}
        />
        <Moon
          className={`absolute transition-transform duration-500 ${
            theme === "dark" ? "transform scale-100 rotate-0" : "transform scale-0 rotate-90"
          }`}
          style={{ color: theme === "dark" ? "#fbbf24" : "transparent" }}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}