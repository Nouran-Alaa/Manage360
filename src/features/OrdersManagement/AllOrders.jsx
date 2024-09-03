import { useMemo } from 'react';
import Table from './table/Table';
import { useSelector } from 'react-redux';

const AllOrders = () => {
  const { orders } = useSelector((state) => state.order);

  // const memoizedOrders = useMemo(() => orders || [], [orders]);

  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by order id"
          className="p-2 border border-gray-300 rounded-md"
        />
        <button className="p-2 border border-gray-300 rounded-md">
          Filter by date range
        </button>
      </div>
      <Table orders={orders} />
    </div>
  );
};

export default AllOrders;
