import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { SmoothScroll } from "./components/smoothScroll";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import { Nav } from "./components/nav";
import { MailMe } from "./components/mailMe";
import { Social } from "./components/social";
import { Providers } from "./constants/providers";
import { Ball } from "./components/ball";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  applicationName: "bessa.dev",
  referrer: "origin-when-cross-origin",
  keywords: ["Website for retreats", "Web Design", "Web Developer"],
  authors: { name: "Ronald Bessa", url: "https://www.bessa.dev" },
  colorScheme: "dark",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.bessa.dev"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      pt: "/pt",
    },
  },
  openGraph: {
    title: "Bessa Creative Websites",
    description: "Website for retreats",
    url: "https://www.bessa.dev",
    siteName: "Bessa.dev",
    images: [
      {
        url: "https://www.bessa.dev/og-image.png",
        width: 1200,
        height: 630,
      },
      {
        url: "https://www.bessa.dev/og-image-sm.png",
        width: 256,
        height: 256,
        alt: "My custom alt",
      },
    ],
    locale: "en",
    type: "website",
  },
};

const workSans = Work_Sans({ subsets: ["latin"] });

export default function LocaleLayout({ children, params }) {
  const locale = useLocale();
  const form = useTranslations("Form");
  const nav = useTranslations("Nav");

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className=" dark:bg-gray-950 dark:text-white">
        <SmoothScroll>
          <Providers>
            <main className={`${workSans.className} `}>
              <Nav
                home={nav("home")}
                works={nav("works")}
                about={nav("about")}
              />
              <MailMe
                formTitle={form("title")}
                formMessage={form("message")}
                formName={form("name")}
                formEmail={form("email")}
              />
              <Social />
              {children}
              <Ball />
            </main>
          </Providers>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
