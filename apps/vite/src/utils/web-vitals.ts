// https://web.dev/vitals/

import { type ReportCallback } from 'web-vitals';

export async function reportWebVitals(onReport?: ReportCallback) {
  if (!onReport) return;

  const { onCLS, onFCP, onFID, onINP, onLCP, onTTFB } = await import(
    'web-vitals'
  );

  // https://github.com/GoogleChrome/web-vitals#functions
  onCLS(onReport);
  onFCP(onReport);
  onFID(onReport);
  onINP(onReport);
  onLCP(onReport);
  onTTFB(onReport);
}
