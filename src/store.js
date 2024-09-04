import { configureStore } from '@reduxjs/toolkit';
import orderManagementSlice from './features/OrdersManagement/orderManagementSlice';
import uiSlice from './ui/uiSlice';
import customerSlice from './features/customers/customerSlice';
import productSlice from './features/products/productSlice';

const store = configureStore({
  reducer: {
    order: orderManagementSlice,
    ui: uiSlice,
    customer: customerSlice,
    product: productSlice,
  },
});

export default store;
