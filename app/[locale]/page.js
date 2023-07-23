"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import ScrollIndicator from "./components/scrollIndicator";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const t = useTranslations("Index");
  const panelsRef = useRef([]);
  const scrollTweenRef = useRef(null);

  // useLayoutEffect(() => {
  //   // Function to handle scrolling to a specific section
  //   const goToSection = (i) => {
  //     scrollTweenRef.current = gsap.to(window, {
  //       scrollTo: { y: i * window.innerHeight, autoKill: false },
  //       onStart: () => {
  //         ScrollTrigger.get().forEach((trigger) => trigger.disable());
  //         ScrollTrigger.refresh();
  //       },
  //       duration: 1,
  //       onComplete: () => (scrollTweenRef.current = null),
  //       overwrite: true,
  //     });
  //   };

  //   // Event listener to prevent touchstart events from interfering with the scroll animation on touch devices
  //   const onTouchStart = (e) => {
  //     if (scrollTweenRef.current) {
  //       e.preventDefault();
  //       e.stopImmediatePropagation();
  //     }
  //   };
  //   document.addEventListener("touchstart", onTouchStart, {
  //     capture: true,
  //     passive: false,
  //   });

  //   // ScrollTrigger setup for each panel
  //   panelsRef.current.forEach((panel, i) => {
  //     ScrollTrigger.create({
  //       trigger: panel,
  //       start: "top bottom",
  //       end: "+=199%",
  //       onToggle: (self) =>
  //         self.isActive && !scrollTweenRef.current && goToSection(i),
  //     });
  //   });

  //   // ScrollTrigger setup for snapping to sections
  //   ScrollTrigger.create({
  //     start: 0,
  //     end: "max",
  //     snap: 1 / (panelsRef.current.length - 1),
  //   });

  //   // Cleanup event listener and ScrollTrigger on component unmount
  //   return () => {
  //     document.removeEventListener("touchstart", onTouchStart, {
  //       capture: true,
  //       passive: false,
  //     });
  //     gsap.killTweensOf(window);
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <>
      <section
        className="grid h-[100dvh] grid-cols-12"
        ref={(el) => (panelsRef.current[0] = el)}
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
        className="grid h-[100dvh] grid-cols-12"
        ref={(el) => (panelsRef.current[1] = el)}
      >
        <div className="relative z-20 col-start-2 col-end-12 flex flex-col gap-4 self-center  sm:col-start-3 md:col-end-10 lg:col-start-2 lg:col-end-8">
          <h2 className="text-2xl">{t("fSecTitle")}</h2>
          <p>{t("fSecBody")}</p>
        </div>
      </section>
    </>
  );
}
