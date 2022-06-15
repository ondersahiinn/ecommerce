import { createSlice } from '@reduxjs/toolkit';

interface IUser {
  isLogin: boolean;
}

const initialState: IUser = {
  isLogin: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    changeLogin: (state, action) => {
      console.log('function');
    },
  },
});

export const { changeLogin } = userSlice.actions;

export default userSlice.reducer;
