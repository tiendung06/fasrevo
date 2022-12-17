import { createSlice } from '@reduxjs/toolkit';

export const authSlide = createSlice({
  name: 'auth',
  initialState: {
    authenticated: false,
    username: '',
    email: '',
    image: '',
    sex: null,
    phone: '',
    address: '',
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
