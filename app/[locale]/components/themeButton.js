"use client";
import React from "react";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="dark:bg-white dark:text-black"
    >
      Toggle Mode
    </button>
  );
};

export default ThemeButton;
