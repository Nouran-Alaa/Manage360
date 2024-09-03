/* eslint-disable react/prop-types */
import { useState } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TablePagination from './TablePagination';

const Table = ({ users }) => {
  const [page, setPage] = useState(0); // Start from the first page
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalRows = users.length;

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const totalPages = Math.ceil(totalRows / rowsPerPage);
  // Calculate the data to be displayed based on the current page and rowsPerPage

  const paginatedOrders = users.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="overflow-x-scroll w-full">
      <table className="min-w-full bg-white rounded-xl shadow-md">
        <TableHead />
        <TableBody users={paginatedOrders} />
      </table>
      <TablePagination
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Table;
