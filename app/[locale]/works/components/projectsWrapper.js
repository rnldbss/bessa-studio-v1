"use client";
import { useState } from "react";
import { Project } from "./project";
import { motion } from "framer-motion";

import { MdOutlineSkipPrevious } from "react-icons/md";
import { MdOutlineSkipNext } from "react-icons/md";

export function ProjectsWrapper({
  children,
  edenTitle,
  edenSubtitle,
  edenBody,
  edenLaunch,
  edenLaunchDate,
  edenDev,
  edenDevTech,
  edenCategory,
  edenCategorySite,
  edenSiteName,
  edenSiteHref,
  edenPic,
  plantCopyTitle,
  plantCopySubtitle,
  plantCopyBody,
  plantCopyLaunch,
  plantCopyLaunchDate,
  plantCopyDev,
  plantCopyDevTech,
  plantCopyCategory,
  plantCopyCategorySite,
  plantCopySiteName,
  plantCopySiteHref,
  plantCopyPic,
}) {
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
    <section className="grid min-h-[100lvh] grid-cols-12 place-content-center gap-y-5">
      <div
        className="relative z-20 col-start-2 col-end-12
    flex w-4/5 flex-col gap-2 justify-self-center sm:col-end-3  sm:ml-2 sm:h-1/2 sm:flex-row-reverse sm:self-center sm:justify-self-start"
      >
        <div className=" flex h-0.5 w-full  shrink-0  sm:h-full sm:w-0.5 sm:flex-col">
          <motion.div
            animate={activeProject === 0 ? "top" : "bottom"}
            transition={{ duration: 0.6 }}
            variants={
              ({ top: { y: 0, x: 0 } }, { bottom: { y: "100%", x: "100%" } })
            }
            className="mt-0 h-full w-1/2 shrink-0 bg-gradient-to-r from-transparent via-violet-700 sm:h-1/2   sm:w-full sm:bg-gradient-to-t"
          ></motion.div>
        </div>

        <div className="flex justify-between text-3xl  sm:-rotate-90 sm:flex-row-reverse ">
          <div
            onClick={handlePrevious}
            className="flex cursor-pointer items-center sm:flex-row-reverse"
          >
            <div className="sm:rotate-180">
              <MdOutlineSkipPrevious className="" />
            </div>
            <span className="text-2xl sm:hidden">prev</span>
          </div>
          <div
            onClick={handleNext}
            className="flex cursor-pointer flex-row-reverse items-center sm:flex-row"
          >
            <div className="sm:rotate-180">
              <MdOutlineSkipNext className="" />
            </div>
            <span className="text-2xl sm:hidden">next</span>
          </div>
        </div>
      </div>

      <Project
        // activeProject={activeProject === 0 ? true : false}
        animate={activeProject === 0 ? "visible" : "hidden"}
        variants={({ visible: { opacity: 1 } }, { hidden: { opacity: 0 } })}
        title={edenTitle}
        subtitle={edenSubtitle}
        body={edenBody}
        launch={edenLaunch}
        launchDate={edenLaunchDate}
        dev={edenDev}
        devTech={edenDevTech}
        category={edenCategory}
        categorySite={edenCategorySite}
        siteName={edenSiteName}
        siteHref={edenSiteHref}
        img={edenPic}
      />
      <Project
        animate={activeProject === 1 ? { opacity: 1, display: "flex" } : ""}
        inital={{ opacity: 0, display: "none" }}
        activeProject={activeProject === 0 ? true : false}
        title={plantCopyTitle}
        subtitle={plantCopySubtitle}
        body={plantCopyBody}
        launch={plantCopyLaunch}
        launchDate={plantCopyLaunchDate}
        dev={plantCopyDev}
        devTech={plantCopyDevTech}
        category={plantCopyCategory}
        categorySite={plantCopyCategorySite}
        siteName={plantCopySiteName}
        siteHref={plantCopySiteHref}
        img={plantCopyPic}
      />
      {children}
    </section>
  );
}
