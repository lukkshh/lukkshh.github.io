type AnalyticsParameter = string | number | boolean;

export type AnalyticsEventParameters = Record<string, AnalyticsParameter>;

type GtagArguments =
  | [command: "js", date: Date]
  | [command: "config", measurementId: string]
  | [
      command: "event",
      eventName: string,
      parameters?: AnalyticsEventParameters,
    ];

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: GtagArguments) => void;
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
let initialized = false;

export const trackEvent = (
  eventName: string,
  parameters?: AnalyticsEventParameters,
): void => {
  if (!measurementId || !initialized) return;

  window.gtag("event", eventName, parameters);
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
  if (!measurementId || initialized) return;

  initialized = true;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function (...args: GtagArguments) {
    void args;
    // gtag.js expects the function's array-like arguments object in its queue.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
    measurementId,
  )}`;
  document.head.appendChild(script);

  return trackScrollDepth();
};
