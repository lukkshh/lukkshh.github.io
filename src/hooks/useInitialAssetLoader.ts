import { useEffect, useState } from "react";

const FONT_QUERIES: string[] = ['1rem "Inter"', '1rem "Noto Sans Georgian"'];

const waitForWindowLoad = (): Promise<void> => {
  if (document.readyState === "complete") {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    window.addEventListener("load", () => resolve(), { once: true });
  });
};

const preloadFonts = async (): Promise<void> => {
  if (!("fonts" in document)) {
    return;
  }

  await Promise.all([
    document.fonts.ready,
    ...FONT_QUERIES.map((query) =>
      document.fonts.load(query).catch(() => undefined),
    ),
  ]);
};

export const useInitialAssetLoader = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let cancelled = false;

    const fallbackTimeout = window.setTimeout(() => {
      if (!cancelled) {
        setProgress(100);
        setIsReady(true);
      }
    }, 15000);

    const runPreload = async () => {
      let completed = 0;
      const total = 2;

      const advance = () => {
        completed += 1;
        if (!cancelled) {
          setProgress(Math.round((completed / total) * 100));
        }
      };

      await Promise.all([
        preloadFonts().finally(advance),
        waitForWindowLoad().finally(advance),
      ]);

      if (!cancelled) {
        setProgress(100);
        setIsReady(true);
      }
    };

    void runPreload();

    return () => {
      cancelled = true;
      window.clearTimeout(fallbackTimeout);
    };
  }, []);

  return { isReady, progress };
};
