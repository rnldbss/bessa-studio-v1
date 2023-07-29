import { useTranslations } from "next-intl";
import { ProjectsWrapper } from "./components/projectsWrapper";
import { Footer } from "../components/footer";
import edenPic from "../images/eden.png";
import plantCopyPic from "../images/plantcopy.png";

export const metadata = {
  title: "Works",
  description: "Works",
  alternates: {
    canonical: "/works",
  },
};

export default function Works() {
  const eden = useTranslations("Eden");
  const plantCopy = useTranslations("PlantCopy");
  return (
    <>
      <ProjectsWrapper
        edenTitle={eden("title")}
        edenSubtitle={eden("subtitle")}
        edenBody={eden("body")}
        edenLaunch={eden("launch")}
        edenLaunchDate={eden("launchDate")}
        edenDev={eden("dev")}
        edenDevTech={eden("devTech")}
        edenCategory={eden("category")}
        edenCategorySite={eden("categorySite")}
        edenSiteName={eden("siteName")}
        edenSiteHref={eden("siteHref")}
        edenPic={edenPic}
        plantCopyTitle={plantCopy("title")}
        plantCopySubtitle={plantCopy("subtitle")}
        plantCopyBody={plantCopy("body")}
        plantCopyLaunch={plantCopy("launch")}
        plantCopyLaunchDate={plantCopy("launchDate")}
        plantCopyDev={plantCopy("dev")}
        plantCopyDevTech={plantCopy("devTech")}
        plantCopyCategory={plantCopy("category")}
        plantCopyCategorySite={plantCopy("categorySite")}
        plantCopySiteName={plantCopy("siteName")}
        plantCopySiteHref={plantCopy("siteHref")}
        plantCopyPic={plantCopyPic}
      ></ProjectsWrapper>
      <Footer />
    </>
  );
}
