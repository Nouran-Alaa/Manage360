import { useEffect, useMemo } from 'react';
import Table from './tableCustomers/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from './customerSlice';

const Customers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData('http://localhost:8001/0'));
  }, [dispatch]);

  const { users } = useSelector((state) => state.customer);
  console.log(users);
  const memoizedUsers = useMemo(() => users, [users]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by Customer"
          className="p-2 border border-gray-300 rounded-md text-sm"
        />
      </div>
      <Table users={memoizedUsers} />
    </div>
  );
};

export default Customers;
