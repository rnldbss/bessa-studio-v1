"use client";

export function Services({ secTitle, secBodyOne }) {
  return (
    <section className="flex min-h-[100dvh] place-items-center ">
      <div className="relative  z-20  mb-20  grid  grid-cols-12 gap-4 lg:gap-10 ">
        <h2 className=" col-start-2 col-end-12 break-normal text-5xl font-bold sm:col-start-3 sm:col-end-7 sm:leading-tight lg:col-end-6 lg:text-5xl xl:text-6xl">
          {secTitle}
        </h2>
        <div className="col-start-2 col-end-12 flex flex-col gap-10 sm:col-start-7 sm:col-end-12 lg:col-end-11  xl:col-end-10">
          <div className="min-h-[100lvh]">
            <p>{secBodyOne}</p>
          </div>
          <div className="min-h-[100lvh]">
            <h3 className=" text-3xl font-semibold text-violet-700 dark:text-violet-500">
              Lorem ipsum dolor sit amet.
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quo
              consectetur facilis deleniti itaque ratione exercitationem
              officia! Illum, voluptatem assumenda.
            </p>
          </div>
          <div className="min-h-[100lvh]">
            <h3 className=" text-3xl font-semibold text-violet-700 dark:text-violet-500">
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
