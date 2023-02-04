import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {fetchExample} from './example.thinks';
import {RESET_STORE} from '../store/types';
import {SUBMIT} from './example.constants';
import {HYDRATE} from 'next-redux-wrapper';

export const exampleAdapter = createEntityAdapter();

export const exampleSlice = createSlice({
  name: 'example',
  initialState: exampleAdapter.getInitialState(),
  reducers: {
    addMany: exampleAdapter.setAll,
    [SUBMIT]: (state) => {
      return state;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExample.pending, (state) => {})
      .addCase(fetchExample.fulfilled, () => {})
      .addCase(fetchExample.rejected, (state, action) => {})
      .addCase(RESET_STORE, () => {
        return undefined;
      })
      .addCase(HYDRATE, (state, action) => {
        return {
          ...state,
          ...action.payload.example,
        };
      })
  },
})
