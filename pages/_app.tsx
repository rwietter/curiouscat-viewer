import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { darkTheme, lightTheme } from '@/stitches.config';
import { useTheme } from '@/store/useTheme';
import { useMemo } from 'react';
import { ToastContainer } from 'react-toastify';

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const { theme } = useTheme();

  useMemo(() => {
    const themeStyles = theme === 'dark' ? lightTheme : darkTheme;
    if (typeof document !== 'undefined') {
      const classTheme = document.querySelector('body') as HTMLBodyElement;
      classTheme.className = themeStyles;
    }
  }, [theme]);

  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}
