import { useTranslations } from "next-intl";
import Link from "next/link";
import ScrollIndicator from "./components/scrollIndicator";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <section className="grid h-[100dvh] grid-cols-12">
        <div className="relative z-20 col-start-2 col-end-11 flex flex-col gap-4 self-center  sm:col-start-3 md:col-end-10 lg:col-start-2 lg:col-end-8">
          <h1 className="text-4xl">{t("title")}</h1>
          <p className="text-2xl">{t("subheading")}</p>
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

      <section className="grid h-[100dvh] grid-cols-12">
        <div className="relative z-20 col-start-2 col-end-12 flex flex-col gap-4 self-center  sm:col-start-3 md:col-end-10 lg:col-start-2 lg:col-end-8">
          <h2 className="text-2xl">{t("fSecTitle")}</h2>
          <p>{t("fSecBody")}</p>
        </div>
      </section>
    </>
  );
}
