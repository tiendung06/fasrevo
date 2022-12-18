import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authSlide from './authSlide';
import cartSlide from './cartSlide';

const reducer = combineReducers({
  auth: authSlide,
  cart: cartSlide,
});

const store = configureStore({
  reducer,
});

export default store;
