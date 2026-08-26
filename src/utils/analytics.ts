type AnalyticsParameter = string | number | boolean;

export type AnalyticsEventParameters = Record<string, AnalyticsParameter>;

interface UmamiAnalytics {
  track: (
    eventName: string,
    parameters?: AnalyticsEventParameters,
  ) => void;
}

declare global {
  interface Window {
    umami?: UmamiAnalytics;
  }
}

const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID?.trim();
const scriptUrl =
  import.meta.env.VITE_UMAMI_SCRIPT_URL?.trim() ||
  "https://cloud.umami.is/script.js";

let initialized = false;
const pendingEvents: Array<{
  eventName: string;
  parameters?: AnalyticsEventParameters;
}> = [];

export const trackEvent = (
  eventName: string,
  parameters?: AnalyticsEventParameters,
): void => {
  if (!websiteId || !initialized) return;

  if (window.umami) {
    window.umami.track(eventName, parameters);
    return;
  }

  pendingEvents.push({ eventName, parameters });
};

const flushPendingEvents = (): void => {
  if (!window.umami) return;

  pendingEvents.splice(0).forEach(({ eventName, parameters }) => {
    window.umami?.track(eventName, parameters);
  });
};

const trackScrollDepth = (): (() => void) => {
  const thresholds = [25, 50, 75, 100] as const;
  const trackedThresholds = new Set<number>();
  let animationFrameId: number | null = null;

  const measure = () => {
    animationFrameId = null;

    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percentScrolled =
      scrollableHeight <= 0
        ? 0
        : Math.min(100, (window.scrollY / scrollableHeight) * 100);

    thresholds.forEach((threshold) => {
      if (
        percentScrolled >= threshold &&
        !trackedThresholds.has(threshold)
      ) {
        trackedThresholds.add(threshold);
        trackEvent("scroll_depth", { percent: threshold });
      }
    });
  };

  const scheduleMeasurement = () => {
    if (animationFrameId === null) {
      animationFrameId = window.requestAnimationFrame(measure);
    }
  };

  window.addEventListener("scroll", scheduleMeasurement, { passive: true });
  window.addEventListener("resize", scheduleMeasurement, { passive: true });

  return () => {
    window.removeEventListener("scroll", scheduleMeasurement);
    window.removeEventListener("resize", scheduleMeasurement);
    if (animationFrameId !== null) {
      window.cancelAnimationFrame(animationFrameId);
    }
  };
};

export const initializeAnalytics = (): (() => void) | undefined => {
  if (!websiteId || initialized) return;

  initialized = true;

  const script = document.createElement("script");
  script.defer = true;
  script.src = scriptUrl;
  script.dataset.websiteId = websiteId;
  script.addEventListener("load", flushPendingEvents, { once: true });
  document.head.appendChild(script);

  return trackScrollDepth();
};
