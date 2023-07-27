import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";

export function Project({
  img,
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
    <div className=" relative z-20 col-start-2 col-end-12 row-start-1  row-end-1 flex flex-col  gap-4 self-center justify-self-center sm:col-start-3 lg:col-start-3">
      <div className="flex flex-col lg:max-w-5xl lg:flex-row-reverse ">
        <div className="h-full">
          <Image src={img} className="object-cover" />
        </div>
        <div className="flex w-full flex-col justify-between gap-2 bg-slate-200 bg-opacity-50 px-4 py-4 dark:bg-black dark:bg-opacity-50 lg:max-w-2xl xl:px-7 xl:py-7">
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
    </div>
  );
}
