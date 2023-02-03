import {exampleSlice} from './example.slice';

const { SUBMIT } = exampleSlice.actions;

export const exampleMiddleware = (store) =>
  (next) =>
    (action) => {
      const { dispatch, getState } = store;
      next(action);
      switch (action) {
        case SUBMIT: {
          break;
        }
        default:
          break;
      }
    }
