import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  mode: 'isGuest',
}

const mainSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setMode(state, actions) {
      state.mode = actions.payload
    },
    setUser(state, actions) {
      state.user = actions.payload
    }
  }
})

export const {setMode, setUser} = mainSlice.actions
export default mainSlice.reducer