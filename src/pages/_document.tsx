import { Head, Html, Main, NextScript } from "next/document";

/*
 * Runs before the page paints, so there is no flash of the wrong theme:
 * - applies the saved lamp choice (light by default),
 * - marks returning visitors so the one-time intro animations are skipped.
 */
const bootScript = `(function(){try{
var d=document.documentElement;
if(localStorage.getItem('lights')==='off')d.classList.add('dark');
if(localStorage.getItem('visited'))d.classList.add('returning');
localStorage.setItem('visited','1');
}catch(e){}})();`;

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="theme-color" content="#ffd60a" />
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
