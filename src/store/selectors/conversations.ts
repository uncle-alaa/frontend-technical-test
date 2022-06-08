import { RootState } from '../store'

export const getConversations = (state: RootState) =>
  Object.values(state.conversations).sort(
    (a, b) => b.lastMessageTimestamp - a.lastMessageTimestamp
  )

export const getConversation = (state: RootState, id: string) =>
  state.conversations[id] ? state.conversations : null
