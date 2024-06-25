import { configureStore } from '@reduxjs/toolkit';
import reviews from './slices/reviewsSlice';

export const store = configureStore({
  reducer: { reviews },
});
