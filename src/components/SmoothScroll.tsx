"use client";

import { ReactLenis } from "lenis/react";

const options = {
  autoRaf: true,
  anchors: true,
  respectReducedMotion: true,
  stopInertiaOnNavigate: true,
};

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <ReactLenis root options={options}>{children}</ReactLenis>;
}
