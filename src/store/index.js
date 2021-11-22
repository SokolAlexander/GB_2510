import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reducer";
import { articlesReducer } from "./articles/reducer";

const ce = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config = {
  key: "gbMsngr",
  storage,
  blacklist: ["profile", "articles"],
};

const persistedReducer = persistReducer(
  config,
  combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
    articles: articlesReducer,
  })
);

export const store = createStore(persistedReducer, ce(applyMiddleware(thunk)));
export const persistor = persistStore(store);
