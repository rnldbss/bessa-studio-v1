"use client";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="absolute -bottom-8  left-9 z-20 flex origin-top-left -rotate-90 flex-col items-center gap-3  overflow-hidden sm:left-20 md:left-36 lg:left-40 xl:left-60">
      <div className=" w-32">
        <motion.div
          animate={{ x: -300 }}
          transition={{ repeat: Infinity, ease: "easeInOut", duration: 3 }}
          className="absolute -right-full h-0.5 w-16 bg-gradient-to-r from-transparent via-violet-700"
        />
      </div>

      <div className="relative z-30 pl-4 ">scroll</div>
    </div>
  );
}
