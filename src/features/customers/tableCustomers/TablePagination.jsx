/* eslint-disable react/prop-types */

export default function TablePagination({
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  totalPages,
}) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm">Rows per page:</span>
        <select
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
          className="border border-gray-300 rounded p-1"
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleChangePage(page - 1)}
          disabled={page === 0}
          className={`p-2 ${page === 0 ? 'text-gray-400' : 'text-black'}`}
        >
          Previous
        </button>
        <span className="text-sm">
          Page {page + 1} of {totalPages}
        </span>
        <button
          onClick={() => handleChangePage(page + 1)}
          disabled={page >= totalPages - 1}
          className={`p-2 ${page >= totalPages - 1 ? 'text-gray-400' : 'text-black'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
