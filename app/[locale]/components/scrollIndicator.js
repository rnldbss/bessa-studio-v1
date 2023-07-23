"use client";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="absolute -bottom-6  left-4 z-20 flex origin-top-left -rotate-90 items-center gap-3  overflow-hidden sm:left-28 xl:left-40">
      <div className="w-16 overflow-hidden">
        <motion.div
          animate={{ x: -300 }}
          transition={{ repeat: Infinity, ease: "easeInOut", duration: 4 }}
          className="absolute -right-full h-0.5 w-16  overflow-hidden bg-gray-950 dark:bg-white"
        />
      </div>

      <div className="relative z-30 bg-white pl-4  dark:bg-gray-950">
        scroll
      </div>
    </div>
  );
}
