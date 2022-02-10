import {
  recommendProductAction,
  FETCH_RECOMMEND_PRODUCTS_START,
  FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  FETCH_RECOMMEND_PRODUCTS_FAIL,
} from "./recommendProductsActions";
import { products } from "./products";

interface RecommendProductsState {
  productList: any[];
  loading: boolean;
  error: null | string;
}

const defaultState: RecommendProductsState = {
  productList: products,
  loading: true,
  error: null,
};

export const recommendProductsReducer = (
  state = defaultState,
  action: recommendProductAction
) => {
  switch (action.type) {
    case FETCH_RECOMMEND_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        productList: products,
      };
    case FETCH_RECOMMEND_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        productList: products,
      };
    default:
      return state;
  }
};
