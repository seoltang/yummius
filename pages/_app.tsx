import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "utils/gtag";
import Layout from "./Layout";
import ogImage from "public/assets/image/og-image.png";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>쩝쩝박사 | 맛집 리뷰 생성기 ChatGPT</title>

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yummius.vercel.app" />
        <meta property="og:title" content="쩝쩝박사" />
        <meta property="og:image" content={ogImage.src} />
        <meta property="og:description" content="맛집 리뷰 생성기 ChatGPT" />
        <meta property="og:site_name" content="쩝쩝박사" />

        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="26qfrWF_xbIF2JBg0Kn7nKhDI7vBMo-G4pISPB8oBU0"
        />

        {/* Naver Search Advisor */}
        <meta
          name="naver-site-verification"
          content="507df26206d79d39714a929aaff2cc4ca3beb901"
        />

        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        {/* Google tag (gtag.js) - Google Analytics */}
        <Script
          async
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Google Adsense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1041677560115251"
          crossOrigin="anonymous"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
