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
  query: '',
  searchedOrders: [],
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
    setQuery(state, action) {
      state.query = action.payload;
      // Filter all orders based on the query
      const query = action.payload.toLowerCase();
      const filterOrders = (orders) =>
        orders.filter((order) =>
          `${order.orderID} ${order.customerName}`.toLowerCase().includes(query)
        );

      // Filter each order status and combine results
      state.searchedOrders = [
        ...filterOrders(state.orders.pending),
        ...filterOrders(state.orders.shipped),
        ...filterOrders(state.orders.cancelled),
        ...filterOrders(state.orders.delivered),
      ];
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
        state.searchedOrders = [
          ...action.payload.pending,
          ...action.payload.shipped,
          ...action.payload.cancelled,
          ...action.payload.delivered,
        ];
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setActiveTab, setOrderDetailsOpen, setQuery } =
  orderManagementSlice.actions;
export default orderManagementSlice.reducer;
