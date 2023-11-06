import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.light, // 연두색 배경
    color: theme.palette.common.white,
    border: '1px solid rgba(255, 255, 255, 0.12)', // 테두리 설정
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: '1px solid rgba(0, 0, 0, 0.12)', // 테두리 설정
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

}));

function createData(No, Username, StopDate, AccountState) {
  return { No, Username, StopDate, AccountState };
}

const rows = [
  createData('1', 'ESFP', '', '활동중' ),
  createData('2', 'ESFJ', '', '활동중'),
  createData('3', 'ESTP', '2023.09.27', '정지 해제'),
  createData('4', 'ESTJ', '', '활동중', '멘토1'),
  createData('5', 'ENFP', '2023.09.28', '정지 해제'),
];

export default function CustomizedTables() {
  const theme = useTheme(); // 테마 가져오기
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">No.</StyledTableCell>
            <StyledTableCell align="center">상담자/멘티</StyledTableCell>
            <StyledTableCell align="center">정지 시작 날짜</StyledTableCell>
            <StyledTableCell align="center">계정 관리</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.No}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.No}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Username}</StyledTableCell>
              <StyledTableCell align="center">{row.StopDate}</StyledTableCell>
              <StyledTableCell align="center">{row.AccountState}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}