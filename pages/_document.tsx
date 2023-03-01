import { getCssText } from '@/stitches.config';
import { Html, Head, Main, NextScript } from 'next/document';

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
