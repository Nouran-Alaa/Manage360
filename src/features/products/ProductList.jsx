import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useMemo } from 'react';
import EnhancedTableToolbar from './table/EnhancedTableToolbar';
import EnhancedTableHead from './table/EnhancedTableHead';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { fetchProductData } from './productSlice';
import SwitchActive from './Switch';
import {
  setQuery,
  setOrder,
  toggleSelect,
  selectAll,
  clearSelected,
  setPage,
  setRowsPerPage,
} from './productSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const {
    query,
    products,
    status,
    selected,
    order,
    orderBy,
    page,
    rowsPerPage,
  } = useSelector((state) => state.product);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const lowerQuery = query.toLowerCase();
      return (
        product.title?.toLowerCase().includes(lowerQuery) ||
        product.id.toString().includes(lowerQuery)
      );
    });
  }, [products, query]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    dispatch(setOrder({ order: isAsc ? 'desc' : 'asc', orderBy: property }));
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = filteredProducts.map((n) => n.id);
      dispatch(selectAll(newSelected));
      return;
    }
    dispatch(clearSelected());
  };

  const handleClick = (event, id) => {
    dispatch(toggleSelect(id));
  };

  const handleChangePage = (event, newPage) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (event) => {
    dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
    dispatch(setPage(0));
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

  const visibleRows = useMemo(() => {
    return [...filteredProducts]
      .sort((a, b) =>
        order === 'desc' ? b[orderBy] - a[orderBy] : a[orderBy] - b[orderBy]
      )
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [filteredProducts, order, orderBy, page, rowsPerPage]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProductData('https://dummyjson.com/products'));
    }
  }, [dispatch, status]);

  return (
    <Box sx={{ width: '100%', padding: '16px', fontFamily: 'Public Sans' }}>
      <div className="flex justify-between items-center mb-4">
        <input
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          type="text"
          placeholder="Search by product title or ID"
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
      <Paper sx={{ width: '100%', mb: 2, borderRadius: '12px' }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          selected={selected}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={filteredProducts.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      align="left"
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <img
                        src={
                          row.imageUrls?.length >= 2
                            ? row.imageUrls[0]
                            : row.imageUrls || row.thumbnail
                        }
                        alt={row.title}
                        style={{ width: '40px', height: '50px' }}
                      />
                      <Typography
                        sx={{
                          marginLeft: '10px',
                          fontWeight: '600',
                          fontSize: '13px',
                        }}
                      >
                        {row.title}
                      </Typography>
                    </TableCell>

                    <TableCell align="center">{row.price}$</TableCell>
                    <TableCell align="center">
                      {row.discount || row.discountPercentage}%
                    </TableCell>
                    <TableCell align="center">{row.stock}</TableCell>
                    <TableCell align="center">
                      <SwitchActive />
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredProducts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default ProductList;
