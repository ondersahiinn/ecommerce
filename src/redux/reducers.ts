import { combineReducers } from "redux";

import counter from "@redux/slices/counter";
import productList from "@redux/slices/product";

<<<<<<< HEAD
const rootReducer = combineReducers({
    ali: counter,
    product: productList
=======
import counter from '@redux/slices/counter';
import productList from '@redux/slices/product';
import isLogin from '@redux/slices/user';
import isSelectedLocation from '@redux/slices/user';
const rootReducer = combineReducers({
  ali: counter,
  product: productList,
  login: isLogin,
  SelectedLocation: isSelectedLocation,
>>>>>>> fdb3e0b (Location component done)
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
