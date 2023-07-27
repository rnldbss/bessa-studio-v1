"use client";

import Link from "next/link";
import ThemeButton from "./themeButton";
import { motion, stagger, useCycle, useAnimate } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { useEffect } from "react";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
function useMenuAnimation(openNav) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "#mobNavItems",
      openNav
        ? { opacity: 1, filter: "blur(0px)", y: 0 }
        : { opacity: 0, filter: "blur(5px)", y: 50 },
      {
        duration: 0.5,
        delay: openNav ? staggerMenuItems : 0,
      },
    );
  }, [openNav]);

  return scope;
}

export function Nav() {
  const [openNav, cycleOpenNav] = useCycle(false, true);
  const scope = useMenuAnimation(openNav);

  return (
    <nav className="relative z-40">
      <div className="fixed left-0 top-full hidden h-16  w-[100vh] origin-top-left  -rotate-90 items-center justify-between border-b-2 px-10 font-medium backdrop-blur-3xl sm:flex ">
        <ThemeButton />
        <ul className=" flex items-center gap-8 uppercase">
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/works">works</Link>
          </li>
          <li>
            <Link href="/works">about</Link>
          </li>
        </ul>

        <span>bessa.dev</span>
      </div>
      <motion.button
        animate={openNav ? "open" : "closed"}
        onClick={() => cycleOpenNav()}
        className="fixed left-5 top-7 z-50 flex flex-col gap-1.5 sm:hidden"
      >
        <motion.span
          variants={
            ({ closed: { rotate: 0, y: 0 } }, { open: { rotate: 135, y: 8 } })
          }
          className="m-0 block h-0.5 w-8 bg-gray-950 dark:bg-white"
        />
        <motion.span
          variants={({ closed: { opacity: 1 } }, { open: { opacity: 0 } })}
          className="m-0 block h-0.5 w-8 bg-gray-950 dark:bg-white"
        />
        <motion.span
          variants={
            ({ closed: { rotate: 0, y: 0 } }, { open: { rotate: -135, y: -8 } })
          }
          className="m-0 block h-0.5 w-8 bg-gray-950 dark:bg-white"
        />
      </motion.button>
      <div className="fixed bottom-4 right-4 sm:hidden">
        <ThemeButton />
      </div>

      {/* Mobile Nav */}
      <motion.div
        ref={scope}
        layout
        animate={openNav ? "open" : "closed"}
        transition={{ type: "spring", bounce: 0.15 }}
        variants={({ closed: { x: "-100%" } }, { open: { x: "100%" } })}
        className=" fixed  -left-[90vw] flex h-5/6 w-[87vw] flex-col items-start  justify-between border-b-2 border-r-2 border-gray-950 bg-slate-200 px-10  py-24 dark:border-white dark:bg-gray-950  sm:hidden"
      >
        <motion.span id="mobNavItems" className="text-4xl">
          bessa.dev
        </motion.span>
        <ul className=" flex flex-col gap-8 text-4xl uppercase">
          <motion.li id="mobNavItems">
            <Link onClick={() => cycleOpenNav()} href="/">
              home
            </Link>
          </motion.li>
          <motion.li id="mobNavItems">
            <Link onClick={() => cycleOpenNav()} href="/works">
              works
            </Link>
          </motion.li>
          <motion.li id="mobNavItems">
            <Link onClick={() => cycleOpenNav()} href="/works">
              about
            </Link>
          </motion.li>
        </ul>
        <motion.ul className="flex gap-4 text-3xl ">
          <li id="mobNavItems">
            <BsLinkedin />
          </li>
          <li id="mobNavItems">
            <BsGithub />
          </li>
        </motion.ul>
      </motion.div>
    </nav>
  );
}
