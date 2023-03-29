import Head from "next/head";
import React, { ReactNode } from "react";
import ogImage from "public/assets/image/og-image.png";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>쩝쩝박사 | 맛집 리뷰 생성기 AI</title>

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yummius.vercel.app" />
        <meta property="og:title" content="쩝쩝박사" />
        <meta property="og:image" content={ogImage.src} />
        <meta property="og:description" content="맛집 리뷰 생성기 AI" />
        <meta property="og:site_name" content="쩝쩝박사" />

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
      </Head>

      <div className="max-w-6xl mx-auto">{children}</div>
    </>
  );
};

export default Layout;
