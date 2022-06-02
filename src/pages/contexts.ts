import { createContext } from 'react'

export const UserContext = createContext(null)
export const Messages = createContext({
  messages: null,
  setMessages: null,
})
export const ShowMobileConversationsContext = createContext({
  showConversations: null,
  setShowConversations: null,
})
