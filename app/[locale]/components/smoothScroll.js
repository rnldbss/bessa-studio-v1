"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export function SmoothScroll({ children }) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return <ReactLenis root>{children}</ReactLenis>;
}
