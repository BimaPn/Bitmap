import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  auth: null | AuthUser
}
const initialState: AuthState = {
  auth: null
}
export const authSlice = createSlice({ 
  name: 'auth',
  initialState,
  reducers: { 
    setAuth(state, action) {
      state.auth = action.payload.auth;
    },
    clearAuth(state) {
      state.auth = null
    },
  }
})

export const { setAuth, clearAuth } = authSlice.actions

export default authSlice.reducer
