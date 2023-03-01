import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';
import { darkTheme, lightTheme } from '@/stitches.config';
import { useTheme } from '@/store/useTheme';
import type { AppProps } from 'next/app';
import { useMemo } from 'react';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();
  
  useMemo(() => {
    const themeStyles = theme === 'dark' ? lightTheme : darkTheme;
    if (typeof document !== 'undefined') {
      const classTheme = document.querySelector('body') as HTMLBodyElement;
      classTheme.className = themeStyles;
    }
  }, [theme])

  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  )
}
