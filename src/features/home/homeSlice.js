import {createSlice} from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    interaction: 'none',
  },
  reducers: {
    routeTo(state, action) {
      state.interaction = action.payload;
    },
  },
});

export const {routeTo} = homeSlice.actions;

export default homeSlice.reducer;
