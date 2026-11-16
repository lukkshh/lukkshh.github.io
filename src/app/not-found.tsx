export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#000319] text-white">
      <h1 className="text-4xl font-bold">404</h1>
      <p>Page not found.</p>
      <a href="/" className="text-[#CBACF9] underline">
        Return home
      </a>
    </main>
  );
}
