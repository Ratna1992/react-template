import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, Typography
} from '@mui/material';

// Define a type for the table data
interface Offers{
  slug:string,
  name:string,
  url:string
}

// Define the props for the PaginatedTable component
interface PaginatedTableProps {
  rows: Offers[];
  title: string;
}

// PaginatedTable component
const OffersPaginatedTable: React.FC<PaginatedTableProps> = ({ rows, title }) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper style={{ width: '100%', overflow: 'hidden' }}>
      <Typography variant="h6" component="div" style={{ padding: '16px' }}>
        {title}
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Slug</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.slug}>
                <TableCell>{row.slug}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>${row.url}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default OffersPaginatedTable;
