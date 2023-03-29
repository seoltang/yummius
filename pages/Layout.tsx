import Head from "next/head";
import React, { ReactNode } from "react";
import ogImage from "assets/image/og-image.png";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>쩝쩝박사 | ChatGPT 맛집 리뷰 생성기</title>

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        {/* FIXME: <meta property="og:url" content="" /> */}
        <meta property="og:title" content="쩝쩝박사" />
        <meta property="og:image" content={ogImage.src} />
        <meta property="og:description" content="ChatGPT 맛집 리뷰 생성기" />
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
