import { createSlice } from '@reduxjs/toolkit';

export const cartSlide = createSlice({
  name: 'cart',
  initialState: {
    cart: 0,
  },
  reducers: {
    setCartQuantity: (state, action) => {
      // console.log({ state, action });
      state.cart = action.payload;
    },
  },
});

export const { setCartQuantity } = cartSlide.actions;
export default cartSlide.reducer;
