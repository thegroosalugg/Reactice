import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    // wrap whole app contents with Layout component which adds a navbar to the top of all pages
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
