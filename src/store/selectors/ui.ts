import { RootState } from '../store'

export const getShowMobileConversations = (state: RootState) => {
  return state.ui.showMobileConversations
}
