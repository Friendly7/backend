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
import TableContainer from "@mui/material/TableContainer";
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
              <StyledTableCell align="center">작성자 닉네임</StyledTableCell>
              <StyledTableCell align="center">제목</StyledTableCell>
              <StyledTableCell align="center">등록일</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
            <StyledTableCell align="left">
              1
              </StyledTableCell>
              <StyledTableCell align="center">차준우</StyledTableCell>
              <StyledTableCell align="left">
              아 시험기간인데 왤케 시험공부하기 싫지
              </StyledTableCell>
              <StyledTableCell align="center">
              YYYY.MM.DD
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
            <StyledTableCell align="left">
              2
              </StyledTableCell>
              <StyledTableCell align="center">이승후</StyledTableCell>
              <StyledTableCell align="left">
              같이 게임할 사람 구함
              </StyledTableCell>
              <StyledTableCell align="center">
              YYYY.MM.DD
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
            <StyledTableCell align="left">
              3
              </StyledTableCell>
              <StyledTableCell align="center">류재환</StyledTableCell>
              <StyledTableCell align="left">
              요새 다이어트 중인데 자꾸 먹고싶어 꿀팁있을까?
              </StyledTableCell>
              <StyledTableCell align="center">
              YYYY.MM.DD
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
            <StyledTableCell align="left">
              4
              </StyledTableCell>
              <StyledTableCell align="center">정영서</StyledTableCell>
              <StyledTableCell align="left">
              웹 개발자가 되고 싶은데 어떻게 준비해야될까요?
              </StyledTableCell>
              <StyledTableCell align="center">
              YYYY.MM.DD
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
            <StyledTableCell align="left">
              5
              </StyledTableCell>
              <StyledTableCell align="center">김동양</StyledTableCell>
              <StyledTableCell align="left">
              우리 여름방학 언제부터야?
              </StyledTableCell>
              <StyledTableCell align="center">
              YYYY.MM.DD
              </StyledTableCell>
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
