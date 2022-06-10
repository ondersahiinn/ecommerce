import { combineReducers } from "redux";

import counter from "@redux/slices/counter";
import productList from "@redux/slices/product";

const rootReducer = combineReducers({
    ali: counter,
    product: productList
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
