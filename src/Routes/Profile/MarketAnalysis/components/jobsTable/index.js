import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { getTableData } from '../../service/tableHandler';
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

const progressBar = () => {
    return <div className="progress">
        <div className="progress-value">

        </div>
    </div>
}

export default function JobsTable() {
  const rows = getTableData();
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
              <StyledTableCell align="right">{ progressBar()}</StyledTableCell>
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
