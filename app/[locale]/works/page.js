import { useTranslations } from "next-intl";
import { BiLinkExternal } from "react-icons/bi";
import { Project } from "./components/project";

import Image from "next/image";
import edenPic from "../images/eden.png";

export default function Works() {
  const eden = useTranslations("Eden");
  const plantCopy = useTranslations("PlantCopy");
  return (
    <section className="grid h-[100svh] max-h-[100svh] grid-cols-12">
      <Project
        title={eden("title")}
        subtitle={eden("subtitle")}
        body={eden("body")}
        launch={eden("launch")}
        launchDate={eden("launchDate")}
        dev={eden("dev")}
        devTech={eden("devTech")}
        category={eden("category")}
        categorySite={eden("categorySite")}
        siteName={eden("siteName")}
        siteHref={eden("siteHref")}
        img={edenPic}
      />
      <Project
        title={plantCopy("title")}
        subtitle={plantCopy("subtitle")}
        body={plantCopy("body")}
        launch={plantCopy("launch")}
        launchDate={plantCopy("launchDate")}
        dev={plantCopy("dev")}
        devTech={plantCopy("devTech")}
        category={plantCopy("category")}
        categorySite={plantCopy("categorySite")}
        siteName={plantCopy("siteName")}
        siteHref={plantCopy("siteHref")}
        img={edenPic}
      />
    </section>
  );
}
