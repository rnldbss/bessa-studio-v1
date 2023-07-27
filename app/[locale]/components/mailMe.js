"use client";
import { motion, useCycle, useAnimate, stagger } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Link from "next-intl/link";
import { ContactForm } from "./form";
import { useEffect } from "react";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
function useMenuAnimation(openMail) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "#formItems",
      openMail
        ? { opacity: 1, filter: "blur(0px)", y: 0 }
        : { opacity: 0, filter: "blur(5px)", y: 50 },
      {
        duration: 0.3,
        delay: openMail ? staggerMenuItems : 0,
      },
    );
  }, [openMail]);
  return scope;
}

export function MailMe() {
  const [openMail, cycleOpenMail] = useCycle(false, true);
  const scope = useMenuAnimation(openMail);

  return (
    <div className="relative z-40" ref={scope}>
      <motion.button
        onClick={() => cycleOpenMail()}
        className="fixed right-4 top-5 z-50 grid grid-cols-1 grid-rows-1 text-4xl"
      >
        <motion.div
          animate={openMail ? "open" : "closed"}
          variants={
            ({ closed: { rotate: 360, opacity: 1 } },
            { open: { rotate: 360, opacity: 0 } })
          }
          className=" col-start-1 col-end-1 row-span-1 row-end-1"
        >
          <AiOutlineMail />
        </motion.div>
        <motion.div
          animate={openMail ? "open" : "closed"}
          variants={
            ({ closed: { rotate: 360 } }, { open: { rotate: 360, opacity: 1 } })
          }
          className="  col-start-1 col-end-1 row-span-1 row-end-1 opacity-0"
        >
          <AiOutlineCloseSquare />
        </motion.div>
      </motion.button>
      <div className="fixed right-20 top-7">
        <ul className="flex gap-3 font-semibold">
          <li>
            <Link href="/" locale="en">
              EN
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/" locale="pt">
              PT
            </Link>
          </li>
        </ul>
      </div>
      <motion.div
        animate={openMail ? "open" : "closed"}
        transition={{ type: "spring", bounce: 0.15 }}
        variants={({ closed: { x: "0" } }, { open: { x: "-100%" } })}
        className="fixed -right-[100vw] top-0  flex h-screen w-screen place-content-center place-items-center bg-slate-200 dark:bg-black md:-right-[50%] md:w-1/2 lg:-right-[35%] lg:w-[35%]"
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}
