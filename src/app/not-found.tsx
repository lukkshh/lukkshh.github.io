import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found (404) | Luka Shvelidze",
};

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-dvh items-center justify-center overflow-hidden bg-[#000319] px-6 py-16 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url(/images/grid-pattern.svg)] bg-center opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(111,76,255,0.2),rgba(0,3,25,0)_68%)]"
      />

      <section className="relative z-10 w-full max-w-2xl text-center">
        <div
          aria-hidden="true"
          className="relative mx-auto flex h-44 items-center justify-center"
        >
          <span className="relative w-full z-10 bg-gradient-to-b from-white via-[#E8DEFF] to-[#A78BFA] bg-clip-text text-7xl font-black leading-none tracking-[-0.09em] text-transparent drop-shadow-[0_0_32px_rgba(167,139,250,0.2)] sm:text-8xl">
            404
          </span>
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#CBACF9] sm:text-sm">
          Lost in space
        </p>
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">
          This page has drifted away.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-[#BEC1DD] sm:text-lg">
          The link may be outdated, or the page may have moved to another orbit.
        </p>

        <Link
          href="/"
          className="group mt-9 inline-flex min-h-11 items-center justify-center gap-2 px-2 py-2 text-base font-medium text-[#CBACF9] underline decoration-[#CBACF9]/50 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CBACF9]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5 motion-reduce:transform-none"
          >
            <path
              d="M12.5 4.5 7 10l5.5 5.5M7.5 10H17"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to homepage
        </Link>
      </section>
    </main>
  );
}
