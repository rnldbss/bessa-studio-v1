"use client";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ScrollIndicator from "./scrollIndicator";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const t = useTranslations("Index");
  const sectionRefs = useRef([]);

  useLayoutEffect(() => {
    let panels = sectionRefs.current;
    let observer = ScrollTrigger.normalizeScroll(true);
    let scrollTween;

    document.addEventListener(
      "touchstart",
      (e) => {
        if (scrollTween) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      },
      { capture: true, passive: false },
    );

    function goToSection(i) {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i * window.innerHeight, autoKill: false },
        onStart: () => {
          observer.disable();
          observer.enable();
        },
        duration: 1,
        onComplete: () => (scrollTween = null),
        overwrite: true,
      });
    }

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=199%",
        onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
      });
    });

    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: 1 / (panels.length - 1),
    });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <>
      <section
        className="grid h-[100lvh] grid-cols-12"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
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

      <section
        className="grid h-[100lvh] grid-cols-12"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <div className="relative z-20 col-start-2 col-end-12 flex flex-col gap-4 self-center  sm:col-start-3 md:col-end-10 lg:col-start-2 lg:col-end-8">
          <h2 className="text-2xl">{t("fSecTitle")}</h2>
          <p>{t("fSecBody")}</p>
        </div>
      </section>
    </>
  );
}
