import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  accessToken: null | string
  isAuthenticated: boolean,
  user: AuthUser | null
}

const initialState: AuthState = {
  accessToken: null,
  isAuthenticated: false,
  user: null
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
    setUser(state, action) {
      state.user = action.payload.user
    }
  }
})

export const { setAuth, clearAuth, setUser } = authSlice.actions

export default authSlice.reducer
