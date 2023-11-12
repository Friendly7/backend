import * as React from "react";
import {
  BrowserRouter as Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styledC from "styled-components";
import { Container } from "react-bootstrap";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SessionManager from "./SessionManager";
import {useEffect, useState} from "react";
import axios from "axios";
import {FaArrowDownLong} from "react-icons/fa6";

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

export default function Community_location() {
  const theme = useTheme();
  const [value, setValue] = React.useState(2);

  const [list, setList] = useState([]);
  useEffect(() => {
    axios.post('/moveAreaBoard')
        .then((response) => {
          setList(response.data);
          console.log(list);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  }, []);
  return (
      <div>
        <MyPageHeader>지역 게시판</MyPageHeader>

        <TableContainerWrapper component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <Paper
                      component="form"
                      sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: 200,
                      }}

                  >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="검색"
                        inputProps={{ "aria-label": "search" }}
                    />
                    <IconButton
                        type="button"
                        sx={{ p: "10px" }}
                        aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                  </Paper>
                </TableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="left" width={'10px'}>번호</StyledTableCell>
                <StyledTableCell align="center">제목</StyledTableCell>
                <StyledTableCell align="center">작성자 닉네임</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((list,index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="left">{list.id}</StyledTableCell>
                    <StyledTableCell align="center"><Link to={`/Community_detail/${list.id}`}>{list.board_name}</Link></StyledTableCell>
                    <StyledTableCell align="left">{list.user_name}</StyledTableCell>
                  </StyledTableRow>
              ))}
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