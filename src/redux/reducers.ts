import { combineReducers } from 'redux';

import counter from '@redux/slices/counter';
import productList from '@redux/slices/product';
import isLogin from '@redux/slices/user';
const rootReducer = combineReducers({
  ali: counter,
  product: productList,
  login: isLogin,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
