import { ContactForm } from "./form";
import { useTranslations } from "next-intl";
import Image from "next/image";
import mePic from "../images/me.jpg";

export function Footer() {
  const form = useTranslations("Form");
  return (
    <footer className="relative z-20 grid grid-cols-12">
      <div className="col-start-2 col-end-12 my-20 flex min-h-[50lvh] flex-col-reverse items-center rounded-lg py-16 shadow-lg shadow-slate-600 dark:bg-slate-800 dark:bg-opacity-40 sm:col-start-3 sm:flex-row">
        <div>
          <ContactForm
            formTitle={form("title")}
            formMessage={form("message")}
            formName={form("name")}
            formEmail={form("email")}
          />
        </div>
        <div className="h-48 w-48 overflow-hidden rounded-full">
          <Image src={mePic} className="shadow-lg shadow-slate-600" alt="me" />
        </div>
      </div>
    </footer>
  );
}
