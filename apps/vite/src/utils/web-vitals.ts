// ? https://web.dev/vitals/
import { type ReportHandler } from 'web-vitals';

export const reportWebVitals = async (
  onReport?: ReportHandler,
): Promise<void> => {
  if (!onReport) return;

  const { getCLS, getFCP, getFID, getLCP, getTTFB } = await import(
    'web-vitals'
  );

  // ? https://github.com/GoogleChrome/web-vitals#functions
  getCLS(onReport);
  getFCP(onReport);
  getFID(onReport);
  getLCP(onReport);
  getTTFB(onReport);
};
