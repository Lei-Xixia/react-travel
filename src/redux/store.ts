import { createStore, combineReducers, applyMiddleware } from "redux";
import { languageReducer } from "./language/languageReducer";
import { recommendProductsReducer } from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";

const routeReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
});

const store = createStore(routeReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>;

export default store;
