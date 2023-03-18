import { CacheProvider, EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app'
import createEmotionCache from '@/src/helpers/create-emtion-cache'
import { Roboto } from 'next/font/google'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/src/helpers/theme'
import CssBaseline from '@mui/material/CssBaseline';const roboto = Roboto({
  weight: ["300", '400', "500", '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (<>
    <CacheProvider value={emotionCache}>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </CacheProvider>
  </>
  )
}

export default App;
