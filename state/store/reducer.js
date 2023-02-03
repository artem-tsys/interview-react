import { combineReducers } from "redux";
import {exampleSlice} from '../concepts/example.slice';

const appReducer = combineReducers({
  example: exampleSlice.reducer,
});

export default appReducer;
