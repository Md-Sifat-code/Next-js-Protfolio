import Document, { Html, Head, Main, NextScript } from "next/document";
import { Geist, Geist_Mono } from "next/font/google";

// Load fonts
const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" data-theme="light">
        <Head>
          {/* Canonical */}
          <link rel="canonical" href="https://mdsifat.site" />
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          {/* Preconnects for fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className={geist.className}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
