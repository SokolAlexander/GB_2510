import { REQUEST_STATUS } from "../../utils/constants";

export const selectArticlesList = (state) => state.articles.articlesList;
export const selectArticlesLoading = (state) =>
  state.articles.request.status === REQUEST_STATUS.LOADING;
export const selectArticlesError = (state) => state.articles.request.error;
