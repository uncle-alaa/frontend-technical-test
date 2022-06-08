import { RootState } from '../store'
import { createSelector } from '@reduxjs/toolkit'

export const getMessagesOfConversations = (state: RootState) => {
  return state.messagesOfConversation
}

export const getMessagesOfConversation = createSelector(
  getMessagesOfConversations,
  (_: RootState, conversationId: number) => conversationId,
  (messagesOfConversations, conversationId) => {
    return messagesOfConversations[conversationId]
      ? messagesOfConversations[conversationId]
      : null
  }
)
