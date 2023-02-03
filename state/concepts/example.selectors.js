import {exampleAdapter} from './example.slice';

export const exampleSelector = exampleAdapter.getSelectors();
export const { selectAll, selectById, selectEntities, selectIds, selectTotal } = exampleSelector;
