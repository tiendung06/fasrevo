import { createSlice } from '@reduxjs/toolkit';

export const authSlide = createSlice({
  name: 'auth',
  initialState: {
    authenticated: false,
  },
  reducers: {
    setAuthenticated: (state, action) => {
      // console.log({ state, action });
      state.authenticated = action.payload;
    },
  },
});

export const { setAuthenticated } = authSlide.actions;
export default authSlide.reducer;
