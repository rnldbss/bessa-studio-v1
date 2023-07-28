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
      className={`${tailClass} relative z-20 col-start-2 col-end-12 row-start-1  row-end-1 flex max-w-[1150px] flex-col gap-4 self-center justify-self-center sm:col-start-3 lg:col-start-3 xl:col-start-3 xl:justify-self-start`}
    >
      <div className="flex w-full flex-col lg:flex-row-reverse">
        <div className="shadow-lg dark:shadow-slate-600">
          <Image src={img} placeholder="blur" alt={alt} />
        </div>

        <div className="flex flex-col justify-between gap-2 px-4   py-4 lg:w-4/5  lg:max-w-2xl xl:px-7 xl:py-7">
          <h2 className="text-3xl lg:text-4xl">{title}</h2>
          <h3 className="text-xl lg:text-2xl">{subtitle}</h3>
          <p>{body}</p>
          <ul className="flex gap-3">
            <li>
              <span className="text-sm dark:text-slate-400">{launch}</span>
              <br />
              {launchDate}
            </li>
            <li>
              <span className="text-sm dark:text-slate-400">{dev} </span>
              <br />
              {devTech}
            </li>
            <li>
              <span className="text-sm dark:text-slate-400">{category}</span>
              <br />
              {categorySite}
            </li>
          </ul>
          <a className=" uppercase" href={siteHref} target="_blank">
            {siteName} <BiLinkExternal className="inline text-xl" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
