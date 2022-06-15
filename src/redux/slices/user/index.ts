import { createSlice } from '@reduxjs/toolkit';

interface IUser {
  isLogin: boolean;
  isSelectedLocation: boolean;
}

const initialState: IUser = {
  isLogin: true,
  isSelectedLocation: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    changeLogin: (state, action) => {
      console.log('function');
    },
    changeSelectedLocation: (state, action) => {
      state.isSelectedLocation = action.payload;
    },
  },
});

export const { changeLogin, changeSelectedLocation } = userSlice.actions;

export default userSlice.reducer;
