/* eslint-disable react/prop-types */
import TableRow from './TableRow';

const TableBody = ({ data }) => {
  return (
    <>
      <tbody>
        {data.map((order, index) => (
          <TableRow order={order} key={index} />
        ))}
      </tbody>
    </>
  );
};

export default TableBody;
