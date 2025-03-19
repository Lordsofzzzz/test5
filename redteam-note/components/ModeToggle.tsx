"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 p-2 rounded-md bg-transparent hover:bg-red-500 dark:hover:bg-red-700"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}