import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  accessToken: null | string
  isAuthenticated: boolean 
}
const initialState: AuthState = {
  accessToken: null,
  isAuthenticated: false
}
export const authSlice = createSlice({ 
  name: 'auth',
  initialState,
  reducers: { 
    setAuth(state, action) {
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true
    },
    clearAuth(state) {
      state.accessToken = null 
      state.isAuthenticated = false 
    },
  }
})

export const { setAuth, clearAuth } = authSlice.actions

export default authSlice.reducer
