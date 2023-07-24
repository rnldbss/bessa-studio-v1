import { NextIntlClientProvider } from "next-intl";

import { notFound } from "next/navigation";

import "./globals.css";
import { Work_Sans } from "next/font/google";
import { Nav } from "./components/nav";
import { MailMe } from "./components/mailMe";
import { Social } from "./components/social";
import { Providers } from "./constants/providers";
import { Ball } from "./components/ball";

const workSans = Work_Sans({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  // export default function LocaleLayout({ children, params }) {
  //   const locale = useLocale();

  //   if (params.locale !== locale) {
  //     notFound();
  //   }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className=" dark:bg-gray-950 dark:text-white">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <main className={`${workSans.className}`}>
              <Nav />
              <MailMe />
              <Social />
              {children}
              <Ball />
            </main>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
