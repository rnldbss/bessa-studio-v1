"use client";
import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";
import { animate, motion } from "framer-motion";

export function Project({
  tailClass,
  activeProject,
  animate,
  variants,
  inital,
  img,
  alt,
  title,
  subtitle,
  body,
  launch,
  launchDate,
  dev,
  devTech,
  category,
  categorySite,
  siteHref,
  siteName,
}) {
  return (
    <motion.div
      animate={animate}
      variants={variants}
      initial={inital}
      transition={{ duration: 0.6 }}
      className="relative z-20 col-start-2 col-end-12 row-start-1 row-end-1  flex max-w-[1150px] flex-col justify-center gap-4 pt-12 sm:col-start-3 sm:pt-0 lg:col-start-3 xl:col-start-3 xl:justify-self-start"
    >
      <div className="flex w-full flex-col lg:flex-row-reverse">
        <div className="">
          <Image
            src={img}
            placeholder="blur"
            className="shadow-lg shadow-slate-600"
            alt={alt}
          />
        </div>

        <div className="flex flex-col justify-between gap-2  pb-4 pt-4 lg:w-4/5 lg:max-w-2xl  lg:pt-0 xl:px-7 xl:py-7">
          <h2 className="text-3xl font-semibold lg:text-4xl">{title}</h2>
          <h3 className="text-xl font-medium lg:text-2xl">{subtitle}</h3>
          <p className="text-lg">{body}</p>
          <ul className="flex gap-3">
            <li>
              <span className="dark:text- text-sm font-medium text-violet-800 dark:text-slate-400">
                {launch}
              </span>
              <br />
              {launchDate}
            </li>
            <li>
              <span className="dark:text- text-sm font-medium text-violet-800 dark:text-slate-400">
                {dev}{" "}
              </span>
              <br />
              {devTech}
            </li>
            <li>
              <span className="dark:text- text-sm font-medium text-violet-800 dark:text-slate-400">
                {category}
              </span>
              <br />
              {categorySite}
            </li>
          </ul>
          <a
            className=" font-medium uppercase hover:text-violet-700 dark:hover:text-violet-400"
            href={siteHref}
            target="_blank"
          >
            {siteName} <BiLinkExternal className="inline text-xl" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
