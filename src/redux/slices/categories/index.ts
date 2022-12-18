import { createSlice } from "@reduxjs/toolkit";
import { ICategories } from "interfaces/categories";

interface ICategoriesSlice {
  data: ICategories,
  content: string
}

const initialState: ICategoriesSlice = {
  data: {
    name: '',
    description: '',
    image: '',
    seoTitle: '',
    seoDescription: '',
    seoKeyword: '',
  },
  content: ''
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeCategoriesData: (state, data) => {
      console.log('{ ...data.payload }', { ...data.payload })
      state.data = { ...data.payload };
    },
    changeContent(state, action) {
      state.content = action.payload
    }
  },
});

export const { changeCategoriesData, changeContent } = counterSlice.actions;

export default counterSlice.reducer;
