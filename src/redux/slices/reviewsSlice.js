import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSliceReviews = createAsyncThunk('reviews/getSliceReviews', async () => {
  if (window.innerWidth > 1182) {
    const { data } = await axios.get(`https://2952b34fe361c100.mokky.dev/reviews?page=1&limit=3`);
    return data.items;
  }
  if (window.innerWidth < 1182 && window.innerWidth > 767.98) {
    const { data } = await axios.get(`https://2952b34fe361c100.mokky.dev/reviews?page=1&limit=2`);
    return data.items;
  }
  if (window.innerWidth < 767.98) {
    const { data } = await axios.get(`https://2952b34fe361c100.mokky.dev/reviews?page=1&limit=1`);
    return data.items;
  }
});

export const getAllReviews = createAsyncThunk('reviews/getAllReviews', async () => {
  const { data } = await axios.get(`https://2952b34fe361c100.mokky.dev/reviews`);
  return data;
});

const initialState = {
  reviews: [],
  status: 'loading',
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSliceReviews.pending, (state) => {
        state.status = 'loading';
        state.reviews = [];
      })
      .addCase(getSliceReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.status = 'success';
      })
      .addCase(getSliceReviews.rejected, (state) => {
        state.status = 'error';
        state.reviews = [];
      })
      .addCase(getAllReviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.status = 'success';
      })
      .addCase(getAllReviews.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default reviewsSlice.reducer;
