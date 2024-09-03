import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSideMenuOpen: false,
  isMenuOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSideMenu(state) {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    },
  },
});

export const { toggleSideMenu } = uiSlice.actions;
export default uiSlice.reducer;
