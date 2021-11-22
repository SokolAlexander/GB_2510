import { REQUEST_STATUS } from "../../utils/constants";
import {
  REQUEST_ARTICLES_FAILURE,
  REQUEST_ARTICLES_LOADING,
  REQUEST_ARTICLES_SUCCESS,
} from "./actions";

const initialState = {
  articlesList: [],
  request: {
    status: REQUEST_STATUS.IDLE,
    error: "",
  },
};

export const articlesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_ARTICLES_LOADING:
      return {
        ...state,
        request: {
          ...state.request,
          status: REQUEST_STATUS.LOADING,
        },
      };
    case REQUEST_ARTICLES_SUCCESS:
      return {
        ...state,
        articlesList: payload,
        request: {
          error: "",
          status: REQUEST_STATUS.SUCCESS,
        },
      };
    case REQUEST_ARTICLES_FAILURE:
      return {
        ...state,
        request: {
          error: payload,
          status: REQUEST_STATUS.FAILURE,
        },
      };
    default:
      return state;
  }
};
