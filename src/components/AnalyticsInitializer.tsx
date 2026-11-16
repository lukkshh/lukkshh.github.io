"use client";

import { useEffect } from "react";
import { initializeAnalytics } from "../utils/analytics";

export default function AnalyticsInitializer() {
  useEffect(() => {
    initializeAnalytics();
  }, []);
  return null;
}
