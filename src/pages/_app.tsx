import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Cookies from 'js-cookie';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme, customTheme } from '../themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get('theme');
    const currentTheme = cookieTheme === 'light' ? lightTheme : cookieTheme === 'dark' ? darkTheme : customTheme;
    setTheme(currentTheme);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
