import { useTranslations } from "next-intl";
import Link from "next/link";
import ScrollIndicator from "./components/scrollIndicator";
import { Footer } from "./components/footer";
import { Services } from "./components/homeServices";

export default function Index() {
  const t = useTranslations("Index");
  const form = useTranslations("Form");

  return (
    <>
      <section className="grid h-[100dvh] grid-cols-12">
        <div className="relative z-20 col-start-2 col-end-11 flex flex-col gap-4 self-center  sm:col-start-3 md:col-end-10  lg:col-end-10 xl:col-end-10">
          <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="text-2xl font-medium">{t("subheading")}</p>
          <ul className="flex gap-3 text-lg underline ">
            <li className="hover:text-slate-300">
              <Link href="/works">{t("linkOne")}</Link>
            </li>
            <li className="hover:text-slate-300">
              <Link href="/about">{t("linkTwo")}</Link>
            </li>
          </ul>
        </div>
        <ScrollIndicator />
      </section>
      <Services
        secTitle={t("fSecTitle")}
        secBodyOne={t("fSecBodyOne")}
        secFeatTitleOne={t("fSecFeatTitleOne")}
        secFeatBodyOne={t("fSecFeatBodyOne")}
        secFeatTitleTwo={t("fSecFeatTitleTwo")}
        secFeatBodyTwo={t("fSecFeatBodyTwo")}
      />
      <Services
        secTitle={t("sSecTitle")}
        secBodyOne={t("sSecBodyOne")}
        secFeatTitleOne={t("sSecFeatTitleOne")}
        secFeatBodyOne={t("sSecFeatBodyOne")}
        secFeatTitleTwo={t("sSecFeatTitleTwo")}
        secFeatBodyTwo={t("sSecFeatBodyTwo")}
      />
      <Services
        secTitle={t("tSecTitle")}
        secBodyOne={t("tSecBodyOne")}
        secFeatTitleOne={t("tSecFeatTitleOne")}
        secFeatBodyOne={t("tSecFeatBodyOne")}
        secFeatTitleTwo={t("tSecFeatTitleTwo")}
        secFeatBodyTwo={t("tSecFeatBodyTwo")}
      />
      <Footer />
    </>
  );
}
