import { motion } from "framer-motion";

type PageLoaderProps = {
  progress: number;
};

const ringTransition = {
  duration: 2,
  repeat: Infinity,
  ease: "easeInOut",
} as const;

export default function PageLoader({ progress }: PageLoaderProps): JSX.Element {
  const safeProgress = Math.max(0, Math.min(100, progress));

  return (
    <section className="fixed inset-0 z-[9999] overflow-hidden bg-[#000319] flex items-center justify-center px-5">
      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full border border-[#CBACF980]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.6, 0.25] }}
        transition={ringTransition}
      />
      <motion.div
        className="absolute h-[320px] w-[320px] rounded-full border border-[#E4ECFF80]"
        animate={{ scale: [1.03, 0.94, 1.03], opacity: [0.4, 0.75, 0.4] }}
        transition={{ ...ringTransition, duration: 1.8 }}
      />

      <div className="relative z-10 w-full max-w-[340px] rounded-2xl border border-[#6971a265] bg-[#04071D] px-6 py-8 backdrop-blur-sm">
        <motion.p
          className="text-center text-sm tracking-[0.35em] text-[#E4ECFF]"
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          LOADING PORTFOLIO
        </motion.p>

        <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-[#1E2139]">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#E4ECFF] to-[#CBACF9]"
            animate={{ width: `${safeProgress}%` }}
            transition={{ type: "spring", stiffness: 90, damping: 20 }}
          />
        </div>

        <div className="mt-4 flex items-center justify-between text-sm font-semibold text-[#E4ECFF]">
          <span>Preparing assets</span>
          <motion.span
            key={safeProgress}
            initial={{ y: 6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            {safeProgress}%
          </motion.span>
        </div>
      </div>
    </section>
  );
}
