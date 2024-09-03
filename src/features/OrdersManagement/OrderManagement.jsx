import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { fetchData, setActiveTab } from './orderManagementSlice';

import AllOrders from './AllOrders';
import PendingOrders from './PendingOrders';
import ShippedOrders from './ShippedOrders';
import DeliveredOrders from './DeliveredOrders';
import CancelledOrders from './CancelledOrders';

import { useEffect } from 'react';

const OrderManagement = () => {
  const { activeTab } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const handleTabChange = (value) => {
    dispatch(setActiveTab(value));
  };

  useEffect(() => {
    dispatch(fetchData('http://localhost:8000/0'));
  }, [dispatch]);

  return (
    <div className="p-6">
      <div className="mt-4">
        <div className=" border-gray-300 border-b">
          <div className="flex space-x-4">
            <Link
              to="/orders"
              className={`py-2 px-4 font-semibold  ${
                activeTab === '1'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : ''
              }`}
              onClick={() => handleTabChange('1')}
            >
              All
            </Link>
            <Link
              to="/orders/pending"
              className={`py-2 px-4 font-semibold  ${
                activeTab === '2'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : ''
              }`}
              onClick={() => handleTabChange('2')}
            >
              Pending
            </Link>

            <Link
              to="/orders/shipped"
              className={`py-2 px-4 font-semibold ${
                activeTab === '3'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : ''
              }`}
              onClick={() => handleTabChange('3')}
            >
              Shipped
            </Link>
            <Link
              to="/orders/delivered"
              className={`py-2 px-4 font-semibold ${
                activeTab === '4'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : ''
              }`}
              onClick={() => handleTabChange('4')}
            >
              Delivered
            </Link>
            <Link
              to="/orders/cancelled"
              className={`py-2 px-4 font-semibold ${
                activeTab === '5'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : ''
              }`}
              onClick={() => handleTabChange('5')}
            >
              Cancelled
            </Link>
          </div>
        </div>

        <div className="mt-4">
          {activeTab === '1' && <AllOrders />}
          {activeTab === '2' && <PendingOrders />}
          {activeTab === '3' && <ShippedOrders />}
          {activeTab === '4' && <DeliveredOrders />}
          {activeTab === '5' && <CancelledOrders />}
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
