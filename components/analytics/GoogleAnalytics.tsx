import Script from 'next/script';
import { usePageView } from './hooks/usePageView';

const GoogleAnalytics = () => {
  usePageView();

  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!gaMeasurementId) {
    console.warn('Google Analytics Measurement ID is not defined');
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script 
        id="google-analytics" 
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaMeasurementId}', {
            page_path: window.location.pathname
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics; 