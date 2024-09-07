// import { useMemo } from 'react';
import Table from './table/Table';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from './orderManagementSlice';

const AllOrders = () => {
  const dispatch = useDispatch();
  const { query, searchedOrders } = useSelector((state) => state.order);

  const allOrders = searchedOrders.flat();
  // const memoizedOrders = useMemo(() => orders || [], [orders]);
  console.log(allOrders);
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
      <Table orders={allOrders} />
    </div>
  );
};

export default AllOrders;
