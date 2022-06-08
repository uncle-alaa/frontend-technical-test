import { configureStore } from '@reduxjs/toolkit'
import conversationReducer from './conversations/slice'
import userReducer from './user/slice'
import messagesOfConversationReducer from './messagesOfConversations/slice'
import uiReducer from './ui/slice'

export const store = configureStore({
  reducer: {
    conversations: conversationReducer,
    user: userReducer,
    messagesOfConversation: messagesOfConversationReducer,
    ui: uiReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
