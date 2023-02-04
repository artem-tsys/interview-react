import {exampleAdapter} from './example.slice';

export const exampleSelector = exampleAdapter.getSelectors();
export const selectAll = (state) => exampleSelector.selectAll(state.example);
