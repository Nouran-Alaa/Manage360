import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUserData = createAsyncThunk(
  'data/fetchUserData',

  async (endpoint) => {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data;
  }
);
const initialState = {
  users: [],
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default customerSlice.reducer;
