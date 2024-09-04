/* eslint-disable react/prop-types */
import TableHead from './TableHead';
import TableBody from './TableBody';
import TablePagination from './TablePagination';
import { useState } from 'react';

const Table = ({ orders }) => {
  const [page, setPage] = useState(0); // Start from the first page
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalRows = orders.length;

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const totalPages = Math.ceil(totalRows / rowsPerPage);
  // Calculate the data to be displayed based on the current page and rowsPerPage
  const paginatedOrders = orders.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="overflow-x-scroll">
      <table className="min-w-full bg-white rounded-xl shadow-md">
        <TableHead />
        <TableBody data={paginatedOrders} />
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
