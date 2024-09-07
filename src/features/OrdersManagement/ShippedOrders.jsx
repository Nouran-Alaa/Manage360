import { useDispatch, useSelector } from 'react-redux';
import Table from './table/Table';
// import { useMemo } from 'react';
import { setQuery } from './orderManagementSlice';

const ShippedOrders = () => {
  const dispatch = useDispatch();
  const { query, searchedOrders } = useSelector((state) => state.order);

  const shippedOrders = searchedOrders.filter(
    (orders) => orders.Status === 'Shipped'
  );

  // const memoizedOrders = useMemo(() => orders || [], [orders]);

  console.log(shippedOrders);
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
      </div>
      <Table orders={shippedOrders} />
    </div>
  );
};

export default ShippedOrders;
