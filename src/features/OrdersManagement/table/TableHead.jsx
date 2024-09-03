const TableHead = () => {
  return (
    <thead>
      <tr className="text-gray-600">
        <th className="p-4 text-left">ORDER ID</th>
        <th className="p-4 text-left">CREATED</th>
        <th className="p-4 text-left">CUSTOMER</th>
        <th className="p-4 text-left">TOTAL</th>
        <th className="p-4 text-left">PROFIT</th>
        <th className="p-4 text-left">STATUS</th>
        <th className="p-4 text-center"></th>
      </tr>
    </thead>
  );
};

export default TableHead;
