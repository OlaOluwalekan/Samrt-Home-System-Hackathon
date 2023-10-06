import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  navIsOpen: false,
}

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    toggleNav: (state, { payload }) => {
      state.navIsOpen = payload
    },
  },
})

export const { toggleNav } = generalSlice.actions

export default generalSlice.reducer
