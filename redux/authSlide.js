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
    user: null,
  },
  reducers: {
    setAuthenticated: (state, action) => {
      // console.log({ state, action });
      state.authenticated = action.payload;
    },
    setUser: (state, action) => {
      // console.log({ state, action });
      state.user = action.payload;
    },
  },
});

export const { setAuthenticated, setUser } = authSlide.actions;
export default authSlide.reducer;
