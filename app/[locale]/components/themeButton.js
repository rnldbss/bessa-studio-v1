"use client";
import React from "react";
import { useTheme } from "next-themes";
import { motion, useCycle } from "framer-motion";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [themeIcon, cycleThemeIcon] = useCycle(false, true);
  return (
    <motion.button
      onClick={(event) => {
        theme == "dark" ? setTheme("light") : setTheme("dark");
        cycleThemeIcon();
      }}
      className=" grid grid-cols-1 grid-rows-1 text-2xl dark:text-white"
    >
      <motion.div
        animate={themeIcon ? "open" : "closed"}
        variants={
          ({ closed: { rotate: 360, opacity: 0 } },
          { open: { rotate: 360, opacity: 1 } })
        }
        className="  col-start-1 col-end-1 row-span-1 row-end-1 opacity-0"
      >
        <BsMoonStarsFill />
      </motion.div>

      <motion.div
        animate={themeIcon ? "open" : "closed"}
        variants={
          ({ closed: { rotate: 360, opacity: 1 } },
          { open: { rotate: 360, opacity: 0 } })
        }
        className=" col-start-1 col-end-1 row-span-1 row-end-1"
      >
        <BsFillSunFill />
      </motion.div>
    </motion.button>
  );
};

export default ThemeButton;
