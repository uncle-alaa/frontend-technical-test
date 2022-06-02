import type { AppProps } from 'next/app'
import { getLoggedUserId } from '../utils/getLoggedUserId'
import '../styles/globals.css'
import { ThemeProvider } from '@mui/system'
import customTheme from '../theme'
import { ShowMobileConversationsContext, UserContext } from './contexts'
import useSWR from 'swr'
import { useState } from 'react'

const loggedUserId = getLoggedUserId()

function MyApp({ Component, pageProps }: AppProps) {
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data } = useSWR(`http://localhost:3005/user/${loggedUserId}`, fetcher)
  const loggedUser = data ? data[0] : null
  const [showConversations, setShowConversations] = useState(true)
  return (
    <ShowMobileConversationsContext.Provider
      value={{ showConversations, setShowConversations }}
    >
      <UserContext.Provider value={loggedUser}>
        <ThemeProvider theme={customTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </UserContext.Provider>
    </ShowMobileConversationsContext.Provider>
  )
}

export default MyApp
