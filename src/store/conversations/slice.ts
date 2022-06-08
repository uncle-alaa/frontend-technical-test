import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Conversation } from '../../types'

export interface ConversationState {
  [id: number]: Conversation
}

const initialState: ConversationState = {}

export const conversationsSlice = createSlice({
  name: 'conversations',
  initialState,
  reducers: {
    setConversations: (
      state: ConversationState,
      action: PayloadAction<Conversation[]>
    ) => {
      action.payload.map(
        (conversation) => (state[conversation.id] = conversation)
      )
    },
  },
})

export const { setConversations } = conversationsSlice.actions

export default conversationsSlice.reducer
