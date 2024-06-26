import { configureStore } from '@reduxjs/toolkit';
import reviews from './slices/reviewsSlice';
import excurs from './slices/excursSlice';

export const store = configureStore({
  reducer: { reviews, excurs },
});
