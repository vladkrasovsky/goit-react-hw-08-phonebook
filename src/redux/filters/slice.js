import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';

const filtersInitialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, () => filtersInitialState);
  },
});

export const { setNameFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
