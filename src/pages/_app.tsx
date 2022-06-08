import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { ThemeProvider } from '@mui/system'
import customTheme from '../theme'
import { store } from '../store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
