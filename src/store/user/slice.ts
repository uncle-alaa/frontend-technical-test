import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types'

export interface UserState {
  [id: number]: User
}

const initialState: UserState = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedUser: (state: UserState, action: PayloadAction<User>) => {
      state[action.payload.id] = action.payload
    },
  },
})

export const { setLoggedUser } = userSlice.actions

export default userSlice.reducer
