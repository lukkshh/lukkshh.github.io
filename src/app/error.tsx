"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#000319] text-center text-white">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <button
        className="rounded-lg border border-[#CBACF9] px-4 py-2 text-[#CBACF9]"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
