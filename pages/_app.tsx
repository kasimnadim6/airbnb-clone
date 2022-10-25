import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ProgressBar from '@badrap/bar-of-progress';
import Layout from '../components/Layout';
import Router from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const progress = new ProgressBar({
    size: 3,
    color: '#FD5B61',
    className: 'z-50',
    delay: 100,
  });

  Router.events.on('routeChangeStart', progress.start);
  Router.events.on('routeChangeComplete', progress.finish);
  Router.events.on('routeChangeError', progress.finish);

  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
