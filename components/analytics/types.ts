// Window interface extension for Google Analytics
interface GoogleAnalyticsEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
}

// Define gtag as a global function
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

export type { GoogleAnalyticsEvent }; 