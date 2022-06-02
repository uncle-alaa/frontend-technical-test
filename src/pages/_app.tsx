import type { AppProps } from 'next/app'
import { getLoggedUserId } from '../utils/getLoggedUserId'
import '../styles/globals.css'
import { ThemeProvider } from '@mui/system'
import customTheme from '../theme'
import { UserContext } from './context'
import useSWR from 'swr'

const loggedUserId = getLoggedUserId()

function MyApp({ Component, pageProps }: AppProps) {
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data } = useSWR(`http://localhost:3005/user/${loggedUserId}`, fetcher)
  const loggedUser = data ? data[0] : null
  return (
    <UserContext.Provider value={loggedUser}>
      <ThemeProvider theme={customTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserContext.Provider>
  )
}

export default MyApp
