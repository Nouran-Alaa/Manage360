import { Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import SideMenu from './SideMenu';
import Dashboard from '../features/dashboard/Dashboard';

import OrderManagement from '../features/OrdersManagement/OrderManagement';
import PendingOrders from '../features/OrdersManagement/PendingOrders';
import ShippedOrders from '../features/OrdersManagement/ShippedOrders';
import DeliveredOrders from '../features/OrdersManagement/DeliveredOrders';
import CancelledOrders from '../features/OrdersManagement/CancelledOrders';
import AllOrders from '../features/OrdersManagement/AllOrders';

import Customers from '../features/customers/Customers';
import AddProduct from '../features/products/AddProduct';
import ProductList from '../features/products/ProductList';
import Profile from '../features/user/Profile';
import SignUp from '../features/auth/sign-up/SignUp';
import SignIn from '../features/auth/sign-in/SignIn';
import { useSelector } from 'react-redux';

const AppLayout = () => {
  const { isSideMenuOpen } = useSelector((state) => state.ui);

  return (
    <>
      <main className="flex h-screen flex-col">
        <div className="flex">
          <SideMenu />
        </div>
        <div
          className={`flex-grow transition-all duration-300 ease-in-out ${
            isSideMenuOpen ? 'ml-64' : 'ml-0'
          }`}
        >
          {/* <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} /> */}
          <Navbar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<OrderManagement />}>
              <Route path="" element={<AllOrders />} />
              <Route path="pending" element={<PendingOrders />} />
              <Route path="shipped" element={<ShippedOrders />} />
              <Route path="delivered" element={<DeliveredOrders />} />
              <Route path="cancelled" element={<CancelledOrders />} />
            </Route>
            <Route path="/add-products" element={<AddProduct />} />
            <Route path="/products-list" element={<ProductList />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default AppLayout;
