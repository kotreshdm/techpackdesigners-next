"use client";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";
import { Provider } from "react-redux";

const ReactReduxProvider = ({ children }: any) => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  );
};

export default ReactReduxProvider;
