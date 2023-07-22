import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <section className="grid h-screen grid-cols-12">
      <div className="relative z-20 col-start-2  col-end-11 self-center text-4xl sm:col-start-3 md:col-end-10 lg:col-start-2 lg:col-end-8">
        <h1>{t("title")}</h1>
        <p></p>
      </div>
    </section>
  );
}
