import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'data/fetchData',

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
  orders: [],
  activeTab: '1',
  orderDetailsOpen: false,
};

const orderManagementSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setOrderDetailsOpen(state) {
      state.orderDetailsOpen = !state.orderDetailsOpen;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setActiveTab, setOrderDetailsOpen } =
  orderManagementSlice.actions;
export default orderManagementSlice.reducer;
