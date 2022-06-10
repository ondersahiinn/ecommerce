import { createSlice } from "@reduxjs/toolkit";

interface ICounter {
  count: number;
  productList: Array<Object>
}

const initialState: ICounter = {
  count: 20,
  productList: []
};


const productSlice = createSlice({
  name: "productSLice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
        debugger
        console.log('Function')
        state.productList = action.payload;
    }
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
