import Image from "next/image";
import mePic from "../images/me.jpg";
import { useTranslations } from "next-intl";
import { Footer } from "../components/footer";

export default function About() {
  const about = useTranslations("about");
  const form = useTranslations("Form");
  return (
    <>
      <section className="relative z-30 grid min-h-[100lvh] grid-cols-12 place-content-center">
        <div className="col-start-2 col-end-12 flex min-h-[100lvh] flex-col items-center gap-10 pt-20 sm:col-start-3 sm:flex-row sm:gap-20 sm:pt-0">
          <div className="max-w-[350px]">
            <Image
              src={mePic}
              className="shadow-lg shadow-slate-600"
              alt="me"
            />
          </div>
          <div className=" flex max-w-[800px] flex-col gap-3">
            <h1 className="text-4xl sm:text-6xl">{about("title")}</h1>
            <p className="text-2xl sm:text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              incidunt adipisci accusantium consectetur.
            </p>
            <p className="text-lg">{about("body")}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
