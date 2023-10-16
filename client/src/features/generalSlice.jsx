import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  navIsOpen: false,
  toastIsShown: false,
  toastMessage: '',
  toastType: 'success',
}

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    toggleNav: (state, { payload }) => {
      state.navIsOpen = payload
    },
    toggleToast: (state, { payload }) => {
      state.toastMessage = payload.message
      state.toastIsShown = payload.state
      state.toastType = payload.type
      // setTimeout(() => {
      //   state.toastIsShown = false
      // }, 2000)
    },
  },
})

export const { toggleNav, toggleToast } = generalSlice.actions

export default generalSlice.reducer
