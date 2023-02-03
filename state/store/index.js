import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducer";
import {middlewares} from './middleware';
import {configureStore} from '@reduxjs/toolkit';

const createStore = (initState = {}) => (
  configureStore({
    reducer: rootReducer,
    preloadedState: initState,
    middleware: middlewares
  })
);

export default createWrapper(createStore);
