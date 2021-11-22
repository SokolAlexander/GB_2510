import { CircularProgress } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Router } from "./components/Routes";
import { persistor, store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<CircularProgress />}>
        <Router />
      </PersistGate>
    </Provider>
  );
};
