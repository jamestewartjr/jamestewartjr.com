import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const usePageView = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!window.gtag) {
        console.error('Google Analytics not initialized');
        return;
      }

      console.log('📊 Sending pageview to GA:', {
        measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
        url: url
      });

      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
        page_path: url,
        debug_mode: true
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    
    // Track initial page load
    handleRouteChange(window.location.pathname);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
}; 