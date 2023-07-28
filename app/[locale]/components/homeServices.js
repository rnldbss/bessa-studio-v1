"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function Services({
  secTitle,
  secBodyOne,
  secFeatTitleOne,
  secFeatBodyOne,
  secFeatTitleTwo,
  secFeatBodyTwo,
}) {
  const servicesRef = useRef();

  useLayoutEffect(() => {
    let mm = gsap.matchMedia(servicesRef);

    mm.add(
      {
        isMobile: "(max-width: 640px",
        isDesktop: "(min-width: 641px)",
      },
      (context) => {
        let { isMobile, isDesktop } = context.conditions;
        gsap.to("#servicesTitle", {
          scrollTrigger: {
            trigger: "#servicesTitle",
            pin: isMobile ? false : true,
            start: "center center",
            endTrigger: "#endTrigger",
            end: "center center ",
            pinSpacing: false,
          },
        });
        gsap.from("#purpleLine", {
          scrollTrigger: {
            trigger: "#purpleLine",
            start: "top center",
            endTrigger: "#endTrigger",
            end: "bottom center ",
            scrub: 2,
          },
          height: 0,
          ease: "power2.out",
        });
      },
    );
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={servicesRef}
      className=" flex min-h-[100dvh]  place-items-center pt-28"
    >
      <div
        id="servicesWrapper"
        className="relative  z-20  mb-20  grid  grid-cols-12 gap-3 "
      >
        <div
          id="servicesTitle"
          className="col-start-2 col-end-12  flex max-h-min   gap-2 self-start sm:col-start-3 sm:col-end-7 lg:col-end-6 "
        >
          <div
            id="purpleLine"
            className="hidden w-0.5 shrink-0 bg-gradient-to-t from-transparent via-violet-700 sm:ml-px sm:inline-block sm:h-full "
          ></div>
          <h2 className=" text-5xl  font-bold lg:text-5xl xl:text-6xl">
            {secTitle}
          </h2>
        </div>

        <div className="col-start-2 col-end-12 flex flex-col gap-16  sm:col-start-7 sm:col-end-12 lg:col-end-11  xl:col-end-10">
          <div
            id="body"
            className="flex flex-col justify-center text-xl sm:min-h-[60lvh]"
          >
            <p>{secBodyOne}</p>
          </div>
          <div className="flex  flex-col justify-center sm:min-h-[60lvh]">
            <h3 className=" text-3xl font-semibold text-violet-800 dark:text-violet-600 lg:text-4xl">
              {secFeatTitleOne}
            </h3>
            <p className="text-lg">{secFeatBodyOne}</p>
          </div>
          <div
            id="endTrigger"
            className="flex  flex-col justify-center sm:min-h-[60lvh]"
          >
            <h3 className=" text-3xl font-semibold text-violet-800 dark:text-violet-600 lg:text-4xl">
              {secFeatTitleTwo}
            </h3>
            <p className="text-lg">{secFeatBodyTwo}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
