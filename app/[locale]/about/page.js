import Image from "next/image";
import mePic from "../images/me.jpg";
import { useTranslations } from "next-intl";
import { Footer } from "../components/footer";

export const metadata = {
  title: "Web Developer for Retreat Centers | About me",
  description:
    "Ronald Bessa is a web developer specializing in creative web design for retreat centers. Click here to find out more.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  const about = useTranslations("about");
  const form = useTranslations("Form");
  return (
    <>
      <section className="relative z-30 grid min-h-[100lvh] grid-cols-12 justify-items-center">
        <div className="col-start-2 col-end-12 flex min-h-[100lvh] flex-col gap-10 pt-20 sm:col-start-3 sm:gap-20 md:flex-row md:gap-6  lg:items-center lg:gap-8">
          <div className="mb-auto max-w-[350px] lg:mb-0">
            <Image
              src={mePic}
              className="shadow-lg shadow-slate-600"
              alt="me"
            />
          </div>
          <div className=" flex w-full flex-col gap-3 md:max-w-[350px] lg:max-w-[800px]">
            <h1 className="text-4xl sm:text-6xl">{about("title")}</h1>
            <p className="text-2xl sm:text-3xl">{about("subtitle")}</p>
            <p className="text-lg">{about("body")}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
