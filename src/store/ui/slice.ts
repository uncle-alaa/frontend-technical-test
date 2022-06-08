import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface uiState {
  showMobileConversations: boolean
}
const initialState: uiState = {
  showMobileConversations: true,
}
export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setShowMobileConversations: (
      state: uiState,
      action: PayloadAction<boolean>
    ) => {
      state.showMobileConversations = action.payload
    },
  },
})

export const { setShowMobileConversations } = uiSlice.actions

export default uiSlice.reducer
