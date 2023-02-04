import {exampleMiddleware} from '../concepts/example.middleware';

export const middlewares = getDefaultMiddleware =>
  getDefaultMiddleware().concat([exampleMiddleware]);
