import { createSlice } from '@reduxjs/toolkit';

export const authSlide = createSlice({
  name: 'auth',
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      // console.log({ state, action });
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlide.actions;
export default authSlide.reducer;
