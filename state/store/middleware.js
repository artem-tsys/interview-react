import {exampleMiddleware} from '../concepts/example.middleware';
import {composeWithDevTools} from 'redux-devtools-extension';

export const middlewares = getDefaultMiddleware =>
  getDefaultMiddleware().concat([composeWithDevTools, exampleMiddleware]);
