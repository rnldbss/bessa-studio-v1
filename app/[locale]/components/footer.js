import { ContactForm } from "./form";
import { useTranslations } from "next-intl";
import Image from "next/image";
import mePic from "../images/me.jpg";

export function Footer() {
  const year = new Date().getFullYear();
  const form = useTranslations("Form");
  return (
    <footer className="relative z-20 grid grid-cols-12">
      <div className="col-start-2 col-end-12 my-20 flex min-h-[50lvh] flex-col gap-8   rounded-lg px-3 pb-2 pt-6 shadow-lg shadow-slate-600 dark:bg-slate-800 dark:bg-opacity-40 sm:col-start-3 sm:px-10 sm:py-16 lg:flex-row">
        <div className="flex w-full justify-center  lg:justify-start">
          <ContactForm
            formTitle={form("title")}
            formMessage={form("message")}
            formName={form("name")}
            formEmail={form("email")}
          />
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div className="flex  flex-col items-center gap-2 rounded-lg bg-slate-200 bg-opacity-70 px-3 py-3 dark:bg-slate-200 dark:bg-opacity-20 sm:px-8 xl:flex-row-reverse">
            <div className="h-40 w-40 shrink-0 overflow-hidden rounded-full">
              <Image
                src={mePic}
                className="shadow-lg shadow-slate-600"
                alt="me"
              />
            </div>
            <div>
              <p className="min-w-[200px] max-w-[400px] ">
                Hey!
                <br />
                I’m excited to work together. Please just fill this form out and
                I’ll be in touch shortly. &#128075;
              </p>
            </div>
          </div>
          <small className="ml-auto">
            &#169; {year} bessa.dev. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
