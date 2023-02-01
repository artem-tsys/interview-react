import { createStore, applyMiddleware } from "redux";
import { createLogicMiddleware } from "redux-logic";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";

import conceptsOperations from "../concepts/operationsRoot";
import rootReducer from "./reducer";

const configureStore = () => {
  const middlewareOperations = createLogicMiddleware([...conceptsOperations]);
  const middlewares = applyMiddleware(middlewareOperations);
  const enhancer = composeWithDevTools(middlewares);

  return createStore(rootReducer, enhancer);
};

export default createWrapper(configureStore);
