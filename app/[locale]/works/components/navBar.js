"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineSkipPrevious } from "react-icons/md";
import { MdOutlineSkipNext } from "react-icons/md";

export function NavBar() {
  const [activeProject, setActiveProject] = useState(0);
  const handleNext = () => {
    if (activeProject < 1) {
      setActiveProject(activeProject + 1);
    }
  };
  const handlePrevious = () => {
    if (activeProject > 0) {
      setActiveProject(activeProject - 1);
    }
  };

  console.log(activeProject);
  return (
    <div
      className="relative z-40 col-start-2 col-end-12
    flex w-4/5 flex-col gap-2 justify-self-center sm:col-end-3  sm:ml-2 sm:h-1/2 sm:flex-row-reverse sm:self-center sm:justify-self-start"
    >
      <div className="flex justify-between px-3 text-3xl sm:flex-col sm:px-0 sm:py-3">
        <span onClick={handlePrevious} className="cursor-pointer sm:rotate-90">
          <MdOutlineSkipPrevious />
        </span>
        <span onClick={handleNext} className="cursor-pointer sm:rotate-90">
          <MdOutlineSkipNext />
        </span>
      </div>
      <div className=" flex h-0.5  w-full  sm:h-full sm:w-0.5 sm:flex-col">
        <motion.div
          animate={activeProject === 0 ? "top" : "bottom"}
          transition={{ duration: 0.6 }}
          variants={
            ({ top: { y: 0, x: 0 } }, { bottom: { y: "100%", x: "100%" } })
          }
          className="mt-0 h-full w-1/2 shrink-0 bg-gradient-to-r from-transparent via-violet-700 sm:h-1/2   sm:w-full sm:bg-gradient-to-t"
        ></motion.div>
      </div>
    </div>
  );
}
