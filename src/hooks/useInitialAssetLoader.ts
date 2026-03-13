import { useEffect, useState } from "react";
import { CardDataType } from "../components/Projects/Card";
import { ExperienceData } from "../components/Experience/Card";

type PreloadedContent = {
  projects: CardDataType[];
  experiences: ExperienceData[];
};

const INITIAL_CONTENT: PreloadedContent = {
  projects: [],
  experiences: [],
};

const STATIC_IMAGE_ASSETS: string[] = [
  "/images/about-bg.svg",
  "/images/about_card.svg",
  "/images/card_img_background.svg",
  "/images/grid-pattern.svg",
  "/images/map.svg",
  "/images/spotlight-left-mobile.svg",
  "/images/spotlight-left.svg",
  "/images/spotlight-right-mobile.svg",
  "/images/spotlight-right.svg",
];

const FONT_QUERIES: string[] = ['1rem "Inter"', '1rem "Noto Sans Georgian"'];

const waitForWindowLoad = (): Promise<void> => {
  if (document.readyState === "complete") {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    window.addEventListener("load", () => resolve(), { once: true });
  });
};

const fetchJson = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return null;
    }
    return (await response.json()) as T;
  } catch {
    return null;
  }
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

const preloadImage = (src: string): Promise<void> =>
  new Promise((resolve) => {
    const image = new Image();
    image.decoding = "async";
    image.loading = "eager";

    const finish = () => resolve();

    image.onload = finish;
    image.onerror = finish;
    image.src = src;

    if (image.complete) {
      finish();
    }
  });

export const useInitialAssetLoader = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [content, setContent] = useState<PreloadedContent>(INITIAL_CONTENT);

  useEffect(() => {
    let cancelled = false;

    const fallbackTimeout = window.setTimeout(() => {
      if (!cancelled) {
        setProgress(100);
        setIsReady(true);
      }
    }, 15000);

    const runPreload = async () => {
      let projects: CardDataType[] = [];
      let experiences: ExperienceData[] = [];
      let completedBaseTasks = 0;
      const baseTaskCount = 4;

      const advanceBaseProgress = () => {
        completedBaseTasks += 1;

        if (!cancelled) {
          setProgress(Math.round((completedBaseTasks / baseTaskCount) * 55));
        }
      };

      await Promise.all([
        fetchJson<CardDataType[]>("/projects-data.json").then((data) => {
          projects = data ?? [];
          advanceBaseProgress();
        }),
        fetchJson<ExperienceData[]>("/experience-data.json").then((data) => {
          experiences = data ?? [];
          advanceBaseProgress();
        }),
        preloadFonts().finally(advanceBaseProgress),
        waitForWindowLoad().finally(advanceBaseProgress),
      ]);

      const dynamicImageAssets = [
        ...projects.map((project) => project.img),
        ...experiences.map((experience) => experience.img),
      ].filter(Boolean);

      const allImages = Array.from(
        new Set([...STATIC_IMAGE_ASSETS, ...dynamicImageAssets]),
      );

      if (allImages.length > 0) {
        let loadedImages = 0;

        await Promise.all(
          allImages.map((src) =>
            preloadImage(src).finally(() => {
              loadedImages += 1;

              if (!cancelled) {
                setProgress(
                  Math.min(
                    100,
                    Math.round(55 + (loadedImages / allImages.length) * 45),
                  ),
                );
              }
            }),
          ),
        );
      }

      if (!cancelled) {
        setContent({ projects, experiences });
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

  return {
    isReady,
    progress,
    content,
  };
};
