import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICities } from 'interfaces/cities';

interface ICurrentLocation {
  selectedAddress: ICities[];
  status: 'loading' | 'succeeded' | 'failed' | 'idle';
}

const initialState: ICurrentLocation = {
  selectedAddress: [],
  status: 'idle',
};

const currentLocation = createSlice({
  name: 'currentLocationSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCities.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedAddress = action.payload;
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

export const {} = currentLocation.actions;

export default currentLocation.reducer;
