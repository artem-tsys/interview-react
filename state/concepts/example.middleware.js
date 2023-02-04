import {exampleSlice} from './example.slice';

const { SUBMIT } = exampleSlice.actions;

export const exampleMiddleware = (store) =>
  (next) =>
    async (action) => {
      const { dispatch, getState } = store;

      next(action);
      switch (action.type) {
        case SUBMIT.type: {
          break;
        }
        default:
          break;
      }
    }
