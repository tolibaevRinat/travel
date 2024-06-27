import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getExcurs = createAsyncThunk('excurs/getExcurs', async () => {
  const { data } = await axios.get(`https://2952b34fe361c100.mokky.dev/excursion`);
  return data;
});

const initialState = {
  excurs: [],
  checkExcurs: {},
  status: 'loading',
};

export const excursSlice = createSlice({
  name: 'excurs',
  initialState,
  reducers: {
    setCheckExcur(state, action) {
      state.checkExcurs = action.payload;
    },
    clearCheсkExcur(state) {
      state.checkExcurs = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExcurs.pending, (state) => {
        state.status = 'loading';
        state.excurs = [];
      })
      .addCase(getExcurs.fulfilled, (state, action) => {
        state.excurs = action.payload;
        state.status = 'success';
      })
      .addCase(getExcurs.rejected, (state) => {
        state.status = 'error';
        state.excurs = [];
      });
  },
});

export const { setCheckExcur, clearCheсkExcur } = excursSlice.actions;

export default excursSlice.reducer;
