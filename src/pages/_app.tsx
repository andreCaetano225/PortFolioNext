import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { Header } from '../components/Header/Header';
import { useHomeHooks } from '../hooks/home.hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const { ButtonThemeBlack, ButtonThemeWhite, buttonTheme } = useHomeHooks()

  return (
    <>
      <ChakraProvider theme={theme}>
        <Header buttonThemeBlack={ButtonThemeBlack} buttonThemeWhite={ButtonThemeWhite} buttonThemes={buttonTheme} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
