import { useTranslations } from "next-intl";

import Link from "next/link";
import ScrollIndicator from "./components/scrollIndicator";

import { Services } from "./components/homeServices";

export default function Index() {
  const t = useTranslations("Index");

  return (
    <>
      <section className="grid h-[100dvh] grid-cols-12">
        <div className="relative z-20 col-start-2 col-end-11 flex flex-col gap-4 self-center  sm:col-start-3 md:col-end-10 lg:col-start-2 lg:col-end-10 xl:col-end-8">
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
        {/* <ScrollIndicator /> */}
      </section>
      <Services secTitle={t("fSecTitle")} secBodyOne={t("fSecBodyOne")} />
      <Services secTitle={t("sSecTitle")} secBodyOne={t("sSecBodyOne")} />
    </>
  );
}
