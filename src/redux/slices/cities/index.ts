import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICities } from 'interfaces/cities';

interface ICitiesState {
  cities: ICities[];
  status: 'loading' | 'succeeded' | 'failed' | 'idle';
}

const initialState: ICitiesState = {
  cities: [],
  status: 'idle',
};

const citiesSlice = createSlice({
  name: 'citiesSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCities.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const fetchCities: any = createAsyncThunk(
  '/api/cities',
  async (queryParam: any) => {
    const res = await axios.get('/api/cities');
    return res.data.data;
  }
);

export const {} = citiesSlice.actions;

export default citiesSlice.reducer;
