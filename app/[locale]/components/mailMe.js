"use client";
import { motion, useCycle } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Link from "next-intl/link";
import { ContactForm } from "./form";

export function MailMe() {
  const [openMail, cycleOpenMail] = useCycle(false, true);

  return (
    <div className="relative z-40">
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
        className="fixed -right-[100vw] top-0  h-screen w-screen bg-slate-200 dark:bg-black md:-right-[50%] md:w-1/2 lg:-right-[35%] lg:w-[35%]"
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}
