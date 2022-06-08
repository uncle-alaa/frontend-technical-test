import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Message } from '../../types'

export interface ConversationState {
  [id: number]: Message[]
}

const initialState: ConversationState = {}

export const messageOfConversationSlice = createSlice({
  name: 'messagesOfConversation',
  initialState,
  reducers: {
    setMessageOfConversation: (
      state: ConversationState,
      action: PayloadAction<{
        idOfConversation: number
        message: Message
      }>
    ) => {
      state[action.payload.idOfConversation] = [
        ...state[action.payload.idOfConversation],
        action.payload.message,
      ]
    },
    setMessagesOfConversations: (
      state: ConversationState,
      action: PayloadAction<{
        messagesOfConversations: { [id: number]: Message[] }
      }>
    ) => {
      Object.keys(action.payload.messagesOfConversations).map(
        (key) => (state[key] = action.payload.messagesOfConversations[key])
      )
    },
  },
})

export const { setMessageOfConversation, setMessagesOfConversations } =
  messageOfConversationSlice.actions

export default messageOfConversationSlice.reducer
