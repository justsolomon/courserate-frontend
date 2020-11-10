import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <NextNProgress
          color='#63B3ED'
          startPosition={0.1}
          stopDelayMs={200}
          height='2'
        />
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
