import { useDispatch, useSelector } from 'react-redux';
import Table from './table/Table';
// import { useMemo } from 'react';
import { setQuery } from './orderManagementSlice';

const DeliveredOrders = () => {
  const dispatch = useDispatch();
  const { query, searchedOrders } = useSelector((state) => state.order);

  const deliveredOrders = searchedOrders.filter(
    (orders) => orders.Status === 'Delivered'
  );
  // const memoizedOrders = useMemo(() => orders || [], [orders]);
  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <input
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          type="text"
          placeholder="Search by order id"
          className="p-2 border border-gray-300 rounded-md"
        />
        <button className="p-2 border border-gray-300 rounded-md">
          Filter by date range
        </button>
      </div>
      <Table orders={deliveredOrders} />
    </div>
  );
};

export default DeliveredOrders;
