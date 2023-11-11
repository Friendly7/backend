import * as React from "react";
import { BrowserRouter as Route, Routes, Link, useParams } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styledC from "styled-components";
import { Container } from "react-bootstrap";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "white",
    color: "black",
    border: "1px solid rgba(0, 0, 0, 0.12)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "1px solid rgba(0, 0, 0, 0.12)",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));


export default function MentoMypage() {
  const theme = useTheme();
  return (
    <div>
    <MyPageHeader>
        마이 페이지
    </MyPageHeader>

    <TableContainerWrapper component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
        <TableRow>
            <TableCell align="left">신청 내역</TableCell>
            </TableRow>
          <TableRow>
            <StyledTableCell align="center">신청자 닉네임</StyledTableCell>
            <StyledTableCell align="center">특이사항</StyledTableCell>
            <StyledTableCell align="center">분류</StyledTableCell>
            <StyledTableCell align="center">신청 날짜</StyledTableCell>
            <StyledTableCell align="center">신청 상태</StyledTableCell>
            <StyledTableCell align="center">획득 예정 포인트</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">홍길동</StyledTableCell>
              <StyledTableCell align="center">우울증이 있어요</StyledTableCell>
              <StyledTableCell align="center">심리</StyledTableCell>
              <StyledTableCell align="center">YYYY.MM.DD</StyledTableCell>
              <StyledTableCell align="center">승인 완료</StyledTableCell>
              <StyledTableCell align="center">20,000</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainerWrapper>
    </div>
  );
}


const MyPageHeader = styledC.div`
    font-size: large;
    padding-bottom: 10px;

    border-bottom: 3px solid green;
`;

const TableContainerWrapper = styledC(Container)`
  width: 1300px;
  overflow: auto;
  padding-top: 30px;
`;