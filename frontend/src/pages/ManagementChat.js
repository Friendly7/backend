import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ManagerHeader from "../components/layouts/ManagerHeader";
import ManagerProfile from "./ManagerProfile";
import {styled as sc} from "styled-components";
import {useEffect, useState} from "react";
import "../css/ManagerChat.css";
import axios from "axios";

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

export default function ManagementChat() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios.get('/manage/reportList').then(response => {
      if(response.data!=null) {
        setRows(response.data);
      }
      console.log(response.data)
    })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  },[])

  return (
      <ScreenWrapper>
        <ManagerHeader />
        <ViewWrapper>
          <ProfileWrapper>
            <ManagerProfile />
          </ProfileWrapper>
           <TableWrapper>

    <TableContainer component={Paper} id='manageDiv'>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" id='manageTable'>
        <TableHead id='manageHead'>
          <TableRow>
            <StyledTableCell align="center">No.</StyledTableCell>
            <StyledTableCell align="center">신고 내용</StyledTableCell>
            <StyledTableCell align="center">신고인</StyledTableCell>
            <StyledTableCell align="center">피신고인</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,idx) => (
            <StyledTableRow key={row.idx}>
              <StyledTableCell component="th" scope="row" align="center">
                <Link to={`/ManagementChatDetail/${row.id}`}>{idx+1}</Link>
              </StyledTableCell>
              <StyledTableCell align="center">{row.title}</StyledTableCell>
              <StyledTableCell align="center">{row.reporter}</StyledTableCell>
              <StyledTableCell align="center">{row.respondent}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           </TableWrapper>
        </ViewWrapper>
      </ScreenWrapper>

  );
}

const ProfileWrapper = sc.div`
width: 380px;
height: 800px;
margin-top: 70px;
`;

const ViewWrapper = sc.div`
display: flex;
flex-direction: row;

padding-top: 10px;
`;

const TableWrapper = sc.div`
display: flex;
flex-direction: column;

width: 1000px;
padding-top: 10px;
`;
const ScreenWrapper = sc.div`
margin-left: 260px;
margin-right: 260px;
`;