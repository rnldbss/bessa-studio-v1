"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function Services({ secTitle, secBodyOne }) {
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
            markers: true,
            pinSpacing: false,
          },
        });
      },
    );
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={servicesRef}
      className="flex min-h-[100dvh] place-items-center "
    >
      <div
        id="servicesWrapper"
        className="relative  z-20  mb-20  grid  grid-cols-12 gap-1 "
      >
        <h2
          id="servicesTitle"
          className=" col-start-2 col-end-12 max-h-min self-start break-normal text-5xl font-bold sm:col-start-3 sm:col-end-7 sm:leading-tight lg:col-end-6 lg:text-5xl xl:text-6xl"
        >
          {secTitle}
        </h2>
        <div className="col-start-2 col-end-12 flex flex-col  sm:col-start-7 sm:col-end-12 lg:col-end-11  xl:col-end-10">
          <div className="flex flex-col justify-center sm:min-h-[60lvh]">
            <p>{secBodyOne}</p>
          </div>
          <div className="flex  flex-col justify-center sm:min-h-[60lvh]">
            <h3 className=" text-3xl font-semibold text-violet-700 dark:text-violet-500 lg:text-4xl">
              Lorem ipsum dolor sit amet.
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quo
              consectetur facilis deleniti itaque ratione exercitationem
              officia! Illum, voluptatem assumenda.
            </p>
          </div>
          <div
            id="endTrigger"
            className="flex  flex-col justify-center sm:min-h-[60lvh]"
          >
            <h3 className=" text-3xl font-semibold text-violet-700 dark:text-violet-500 lg:text-4xl">
              Lorem ipsum dolor sit amet.
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quo
              consectetur facilis deleniti itaque ratione exercitationem
              officia! Illum, voluptatem assumenda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
