import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { SmoothScroll } from "./components/smoothScroll";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import { Nav } from "./components/nav";
import { MailMe } from "./components/mailMe";
import { Social } from "./components/social";
import { Providers } from "./constants/providers";
import { Ball } from "./components/ball";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function LocaleLayout({ children, params }) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className=" dark:bg-gray-950 dark:text-white">
        <SmoothScroll>
          <Providers>
            <main className={`${workSans.className}`}>
              <Nav />
              <MailMe />
              <Social />
              {children}
              <Ball />
            </main>
          </Providers>
        </SmoothScroll>
      </body>
    </html>
  );
}
