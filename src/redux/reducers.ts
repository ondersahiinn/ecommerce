import { combineReducers } from 'redux';

import counter from '@redux/slices/counter';
import productList from '@redux/slices/product';

import isLogin from '@redux/slices/user';
import isSelectedLocation from '@redux/slices/user';
import cities from '@redux/slices/cities';
import categories from '@redux/slices/categories';
const rootReducer = combineReducers({
  ali: counter,
  product: productList,
  login: isLogin,
  SelectedLocation: isSelectedLocation,
  cities: cities,
  categories: categories,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
