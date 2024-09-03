import { configureStore } from '@reduxjs/toolkit';
import orderManagementSlice from './features/OrdersManagement/orderManagementSlice';
import uiSlice from './ui/uiSlice';
import customerSlice from './features/customers/customerSlice';

const store = configureStore({
  reducer: {
    order: orderManagementSlice,
    ui: uiSlice,
    customer: customerSlice,
  },
});

export default store;
