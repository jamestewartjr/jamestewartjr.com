import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export const usePageView = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = searchParams.toString() 
        ? `${pathname}?${searchParams}` 
        : pathname;

      // Check if GA is loaded
    //   if (typeof window.gtag !== 'undefined') {
    //     window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
    //       page_path: url,
    //     });
    //   }
    }
  }, [pathname, searchParams]);
};