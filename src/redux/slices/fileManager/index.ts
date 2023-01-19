import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICities } from 'interfaces/cities';
import { IFileList, IFiles } from 'interfaces/fileManager';

interface IFileManager {
  selectedImage: IFileList | null;
  breadCrumbs: string[];
  filesList: IFileList[]
  folderList: string[]
  openStatus: boolean;
  status: 'loading' | 'succeeded' | 'failed' | 'idle';

}

const initialState: IFileManager = {
  selectedImage: null,
  openStatus: false,
  breadCrumbs: [],
  filesList: [],
  folderList: [],
  status: 'idle',

};

const fileManagerSlice = createSlice({
  name: 'fileManagerSlice',
  initialState,
  reducers: {
    setSelectedImage(state, action) {
      state.selectedImage = action.payload;
    },
    setFileList(state, action) {

      if (Array.isArray(action.payload)) {
        state.filesList = action.payload;
      } else {
        state.filesList.push(action.payload);
      }
    },
    hadnleFileManagerOpen(state) {
      state.openStatus = !state.openStatus
    },
    setFolderList(state, action) {
      state.folderList.push(action.payload);
    },
    setBreadcrumb(state, action) {
      if (Array.isArray(action.payload)) {
        state.breadCrumbs = action.payload;
      } else {
        state.breadCrumbs.push(action.payload);

      }
    },
    clearAllData(state) {
      state.status = 'idle';
      state.selectedImage = null;
      state.filesList = [];
      state.folderList = [];

    }

  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchFiles.pending, (state, action) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(fetchFiles.fulfilled, (state, action) => {
  //       state.status = 'succeeded';
  //       state.files = action.payload;
  //     })
  //     .addCase(fetchFiles.rejected, (state, action) => {
  //       state.status = 'failed';
  //     });
  // }
});

export const fetchFiles: any = createAsyncThunk(
  '/api/files',
  async (queryParam: any) => {
    const res = await axios.get('/api/files');
    return res.data.data;
  }
);

export const { setSelectedImage, setFileList, hadnleFileManagerOpen, setFolderList, clearAllData, setBreadcrumb } = fileManagerSlice.actions;

export default fileManagerSlice.reducer;
