/* eslint-disable react/prop-types */
import TableRow from './TableRow';

const TableBody = ({ users }) => {
  return (
    <>
      <tbody>
        {users.map((user) => (
          <TableRow user={user} key={user.userName} />
        ))}
      </tbody>
    </>
  );
};

export default TableBody;
