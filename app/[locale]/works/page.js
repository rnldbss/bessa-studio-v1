import { useTranslations } from "next-intl";
import { BiLinkExternal } from "react-icons/bi";

import Image from "next/image";
import edenPic from "../images/eden.png";

export default function Works() {
  const t = useTranslations("Eden");
  return (
    <section className="grid h-[100svh] max-h-[100svh] grid-cols-12">
      <div className=" relative z-20 col-start-2 col-end-12 flex  flex-col gap-4 self-center  justify-self-center sm:col-start-3 lg:col-start-2">
        <div className="flex  flex-col lg:max-w-5xl lg:flex-row-reverse">
          <div className="">
            <Image src={edenPic} className="" />
          </div>
          <div className="flex w-full flex-col justify-between gap-2 bg-slate-200 bg-opacity-50 px-4 py-4 dark:bg-black dark:bg-opacity-50 lg:max-w-2xl xl:px-7 xl:py-7">
            <h2 className="text-xl">{t("title")}</h2>
            <p>{t("body")}</p>
            <ul className="flex gap-3">
              <li>
                <span className="text-sm dark:text-slate-400">
                  {t("launch")}
                </span>{" "}
                <br />
                {t("launchDate")}
              </li>
              <li>
                <span className="text-sm dark:text-slate-400">{t("dev")} </span>{" "}
                <br />
                {t("devTech")}
              </li>
              <li>
                <span className="text-sm dark:text-slate-400">
                  {" "}
                  {t("category")}
                </span>{" "}
                <br />
                {t("categorySite")}
              </li>
            </ul>
            <a
              className=" uppercase"
              href="https://eden-sanctuary.com/"
              target="_blank"
            >
              {t("siteHref")} <BiLinkExternal className="inline text-xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
