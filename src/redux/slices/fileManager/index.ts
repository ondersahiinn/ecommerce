import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICities } from 'interfaces/cities';
import { IFiles } from 'interfaces/files';

interface IFileManager {
  selectedImage: string;
  files: IFiles[]
  status: 'loading' | 'succeeded' | 'failed' | 'idle';
}

const initialState: IFileManager = {
  selectedImage: '',
  files: [],
  status: 'idle',
};

const fileManagerSlice = createSlice({
  name: 'fileManagerSlice',
  initialState,
  reducers: {
    setSelectedImage(state, action) {
      state.selectedImage = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFiles.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.files = action.payload;
      })
      .addCase(fetchFiles.rejected, (state, action) => {
        state.status = 'failed';
      });
  }
});

export const fetchFiles: any = createAsyncThunk(
  '/api/files',
  async (queryParam: any) => {
    const res = await axios.get('/api/files');
    return res.data.data;
  }
);

export const { setSelectedImage } = fileManagerSlice.actions;

export default fileManagerSlice.reducer;
