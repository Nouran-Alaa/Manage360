import { useEffect, useMemo } from 'react';
import Table from './tableCustomers/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, searchUsers } from './customerSlice';

const Customers = () => {
  const dispatch = useDispatch();

  const { filteredUsers } = useSelector((state) => state.customer);

  useEffect(() => {
    dispatch(fetchUserData('http://localhost:8001/0'));
  }, [dispatch]);

  const { users } = useSelector((state) => state.customer);

  const memoizedUsers = useMemo(() => users, [users]);

  const handleSearch = (e) => {
    dispatch(searchUsers(e.target.value));
  };
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by Customer"
          className="p-2 border border-gray-300 rounded-md text-sm"
          onChange={handleSearch}
        />
      </div>
      <Table users={filteredUsers} />
    </div>
  );
};

export default Customers;
