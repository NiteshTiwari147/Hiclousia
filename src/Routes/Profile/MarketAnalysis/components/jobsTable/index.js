import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './styles.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#0370ff',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(position, no_of_jobs, salaryRange, no_of_companies) {
  return { position, no_of_jobs, salaryRange, no_of_companies};
}

const progressBar = () => {
    return <div className="progress">
        <div className="progress-value">

        </div>
    </div>
}

const rows = [
  createData('SDE-1', '40K', progressBar(), '24K'),
  createData('SDE-2', '60K', progressBar(), '37K'),
  createData('SDE-3', '26K', progressBar(), '14K'),
  createData('Team Lead', '12K', progressBar(), '3.7K'),
  createData('Architect', '5K', progressBar(), '2.8K'),
];

export default function JobsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Position</StyledTableCell>
            <StyledTableCell align="right">No.&nbsp;of&nbsp;jobs</StyledTableCell>
            <StyledTableCell align="right">Salary&nbsp;Range</StyledTableCell>
            <StyledTableCell align="right">No&nbsp;of&nbsp;Companies</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.position}>
              <StyledTableCell component="th" scope="row">
                {row.position}
              </StyledTableCell>
              <StyledTableCell align="right">{row.no_of_jobs}</StyledTableCell>
              <StyledTableCell align="right">{row.salaryRange}</StyledTableCell>
              <StyledTableCell align="right">{row.no_of_companies}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <div className="viewAllTable">
                View All
      </div>
    </TableContainer>
  );
}
