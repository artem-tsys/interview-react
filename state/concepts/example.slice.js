import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {fetchExample} from './example.thinks';

export const exampleAdapter = createEntityAdapter();

export const exampleSlice = createSlice({
  name: 'example',
  initialState: exampleAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExample.pending, (state) => {})
      .addCase(fetchExample.fulfilled, (state, action) => {})
      .addCase(fetchExample.rejected, (state, action) => {})
  },
})
