import { createSlice } from '@reduxjs/toolkit';

interface ICounter {
  count: number;
  productList: Array<Object>;
}

const initialState: ICounter = {
  count: 20,
  productList: [],
};

const productSlice = createSlice({
  name: 'productSLice',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.productList = action.payload;
    },
    rawSetTheme: (state, action) => {
      const root = window.document.documentElement;
      const isDark = action.payload === 'dark';
      root.classList.remove(isDark ? 'light' : 'dark');
      root.classList.add(action.payload);

      localStorage.setItem('site-theme', action.payload);
    },
  },
});

export const { addProduct, rawSetTheme } = productSlice.actions;

export default productSlice.reducer;
