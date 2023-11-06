import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createData, rows } from "./MemberListData";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.common.white,
    border: "1px solid rgba(255, 255, 255, 0.12)",
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

// ManagementChatDetail 컴포넌트 정의
function ManagementUserListDetail() {
  const { id } = useParams(); // URL에서 ID 매개변수를 가져옴

  // 해당 ID와 일치하는 행 찾기
  const selectedRow = rows.find((row) => row.No === id);

  if (!selectedRow) {
    return <div>해당 ID에 대한 데이터를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h2>No. {selectedRow.No}에 대한 상세 정보</h2>
      <p>ID: {selectedRow.ID}</p>
      <p>PassWord: {selectedRow.PassWord}</p>
      <p>UserName: {selectedRow.UserName}</p>
      <p>Email: {selectedRow.Email}</p>
      <p>Area: {selectedRow.Area}</p>
      <p>Class: {selectedRow.Class}</p>
      <p>ReportCount: {selectedRow.ReportCount}</p>
      <p>StopDate: {selectedRow.StopDate}</p>
      <p>AccountState: {selectedRow.AccountState}</p>
      <Link to="/CustomizedTables">테이블로 돌아가기</Link>
    </div>
  );
}

export default function ManagementUserList() {
  const theme = useTheme();
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
                <Link to={`/ManagementUserListDetail/${row.No}`}>{row.No}</Link>
              </StyledTableCell>
              <StyledTableCell align="center">{row.UserName}</StyledTableCell>
              <StyledTableCell align="center">{row.StopDate}</StyledTableCell>
              <StyledTableCell align="center">
                {row.AccountState}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
