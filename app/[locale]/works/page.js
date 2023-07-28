import { useTranslations } from "next-intl";
import { ProjectsWrapper } from "./components/projectsWrapper";
import edenPic from "../images/eden.png";
import plantCopyPic from "../images/plantcopy.png";

export default function Works() {
  const eden = useTranslations("Eden");
  const plantCopy = useTranslations("PlantCopy");
  return (
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
    >
      {/* <NavBar />
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
        img={plantCopyPic}
      /> */}
    </ProjectsWrapper>
  );
}
