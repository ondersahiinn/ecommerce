import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ICategories } from "interfaces/categories";

interface ICategoriesSlice {
  data: ICategories,
  content: string
  status: 'loading' | 'succeeded' | 'failed' | 'idle',
  categories: ICategories[],
}

const initialState: ICategoriesSlice = {
  data: {
    name: '',
    description: '',
    image: '',
    seoTitle: '',
    seoDescription: '',
    seoKeyword: '',
    slug: ''
  },
  content: '',
  status: 'idle',
  categories: []
};

const CategorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {
    changeCategoriesData: (state, data) => {
      console.log('{ ...data.payload }', { ...data.payload })
      state.data = { ...state.data, ...data.payload, };
    },
    changeContent(state, action) {
      state.content = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const fetchCategories: any = createAsyncThunk(
  '/api/categories/allcategories',
  async (queryParam: any) => {
    const res = await axios.get('/api/categories/allcategories');
    return res.data;
  }
);
export const { changeCategoriesData, changeContent } = CategorySlice.actions;

export default CategorySlice.reducer;
