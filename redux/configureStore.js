import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authSlide from './authSlide';

const reducer = combineReducers({
  token: authSlide,
});

const store = configureStore({
  reducer,
});

export default store;
