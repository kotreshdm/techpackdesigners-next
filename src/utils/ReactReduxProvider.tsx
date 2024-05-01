"use client";

import { store } from "../redux/store";
import { Provider } from "react-redux";

const ReactReduxProvider = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReactReduxProvider;
