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
import axios from 'axios';
import "../css/ManagerMatch.css";

import {useEffect, useState} from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.common.white,
    border: "1px solid rgba(255, 255, 255, 0.12)",
    position: "relative",
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

export default function ManagementMatch() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios.get('/manage/match/list').then(response => {
      if(response.data!==null)
        setRows(response.data);
    })
        .catch(error => {
          // 오류 발생 시 처리
          console.error('Error fetching data:', error);
        });
  },[])

  return (
    <TableContainer component={Paper} id='manageDiv'>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" id='manageTable'>
        <TableHead id='manageHead'>
          <TableRow>
            <StyledTableCell align="center">No.</StyledTableCell>
            <StyledTableCell align="center">분류</StyledTableCell>
            <StyledTableCell align="center">신청상태</StyledTableCell>
            <StyledTableCell align="center">신청자</StyledTableCell>
            <StyledTableCell align="center">신청날짜</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row" align="center">
                <Link to={`/ManagementMatchDetail/${row.request_id}`}>{index+1}</Link>
              </StyledTableCell>
              <StyledTableCell align="center">{row.category}</StyledTableCell>
              <StyledTableCell align="center">{row.matching}</StyledTableCell>
              <StyledTableCell align="center">{row.user_name}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
