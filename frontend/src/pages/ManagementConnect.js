import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams, useNavigate,
} from "react-router-dom";
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

export default function ManagementConnect() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('/matching/success/getList').then(response => {
      console.log(response.data)
      if(response.data!=null && response.data!='') {
        setRows(response.data);
      }
    })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  },[])
  return (
      <div>
        <ScreenWrapper>
          <ManagerHeader />
          <ViewWrapper>
            <ProfileWrapper>
              <ManagerProfile />
            </ProfileWrapper>
            <TableWrapper>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">상담사/멘토</StyledTableCell>
            <StyledTableCell align="center">내담자/멘티</StyledTableCell>
            <StyledTableCell align="center">연결 관리</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.No}>
              <StyledTableCell component="th" scope="row" align="center">
                <Link to={`/ManagementConnectDetail/${row.No}`}>{row.No}</Link>
              </StyledTableCell>
              <StyledTableCell align="center">{row.Username}</StyledTableCell>
              <StyledTableCell align="center">{row.StopDate}</StyledTableCell>
              <StyledTableCell align="center">
                {row.AccountState}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</TableWrapper>
</ViewWrapper>
</ScreenWrapper>
      </div>
  );
}
const ScreenWrapper = sc.div`
margin-left: 260px;
margin-right: 260px;
`;
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
  flex-direction: row;

  width: 1000px;

  padding-top: 100px;
`;
