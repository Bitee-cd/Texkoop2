import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="/fonts/Helvetica/HelveticaNeueLTStd-UltLtEx.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="/fonts/Helvetica/HelveticaNeueLTStd-ThEx.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Helvetica/HelveticaNeueLTStd-LtEx.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Helvetica/HelveticaNeueLTStd-Ex.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Helvetica/HelveticaNeueLTStd-MdEx.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Helvetica/HelveticaNeueLTStd-BdEx.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Helvetica/HelveticaNeueLTStd-HvEx.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
