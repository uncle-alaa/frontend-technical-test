import { RootState } from '../store'

export const getLoggedUser = (state: RootState) =>
  Object.values(state.user)[0] ? Object.values(state.user)[0] : null
