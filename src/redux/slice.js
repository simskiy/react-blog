import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  mode: 'isGuest',
  isModified: false,
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
    },
    setPosts(state, actions) {
      state.posts = actions.payload
    }
  }
})

export const {setMode, setUser, setPosts} = mainSlice.actions
export default mainSlice.reducer