import { createStore, combineReducers, applyMiddleware } from "redux";
import { languageReducer } from "./language/languageReducer";
import { recommendProductsReducer } from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
import { actionLog } from "./middlewares/actionLog";

const routeReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
});

const store = createStore(routeReducer, applyMiddleware(thunk, actionLog));
export type RootState = ReturnType<typeof store.getState>;

export default store;
