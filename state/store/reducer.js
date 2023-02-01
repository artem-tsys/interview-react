import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import * as conceptsReducers from "../concepts";

import { RESET_STORE } from "./types";

const appReducer = combineReducers({
  ...conceptsReducers,
  isHydrated: (state = false) => state,
});

const mainReducer = (state, action) => {
  switch (action.type) {
    case RESET_STORE:
      return appReducer(undefined, action);
    case HYDRATE:
      // https://github.com/kirill-konshin/next-redux-wrapper/issues/280
      if (state.isHydrated) {
        return state;
      }

      return { ...state, ...action.payload, isHydrated: true };
    default:
      return appReducer(state, action);
  }
};

export default mainReducer;
