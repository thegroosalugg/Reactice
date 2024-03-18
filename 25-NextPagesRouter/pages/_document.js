import { Html, Head, Main, NextScript } from "next/document";

// found in pages router next projects. Reserved file name in 'pages/_document.js'. Overwrites default Document

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
