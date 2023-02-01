import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "state/store/reducer";

const AllTheProviders = ({ children }) => (
  <Provider store={createStore(rootReducer)}>{children}</Provider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
