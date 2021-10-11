import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
<Layout>
  <Head>
    <title>hldtru® Archive</title>
    <meta name="Description" content="hldtru® Archive" />
    <link rel="canonical" href="https://app.hldtru.com/" />
    <meta name="googlebot" content="follow, index, noarchive" />
    <meta name="robots" content="follow, index, noarchive" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />

    <meta name="description" content="hldtru® Archive" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@hldtru" />
    <meta name="twitter:site" content="@hldtru" />
    <meta property="og:locale" content="en_us" />
    <meta property="og:site_name" content="hldtru®" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://app.hldtru.com/" />
  </Head>

  <Component {...pageProps} />
</Layout>

  );
}

export default MyApp;
