import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICities } from 'interfaces/cities';

interface IFileManager {
  selectedImage: string;
}

const initialState: IFileManager = {
  selectedImage: '',
};

const fileManagerSlice = createSlice({
  name: 'fileManagerSlice',
  initialState,
  reducers: {
    setSelectedImage(state, action) {
      state.selectedImage = action.payload;
    },
  },
});

export const { setSelectedImage } = fileManagerSlice.actions;

export default fileManagerSlice.reducer;
