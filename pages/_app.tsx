import type { AppProps } from 'next/app';
import GoogleAnalytics from '../components/analytics/GoogleAnalytics';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 