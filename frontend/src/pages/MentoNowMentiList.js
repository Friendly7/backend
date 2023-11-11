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

export default function MentoNowMentiList() {
  const theme = useTheme();
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <MyPageHeader>현재 연결된 내담자</MyPageHeader>

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
              <StyledTableCell align="center" >내담자 닉네임</StyledTableCell>
              <StyledTableCell align="center">상담내용</StyledTableCell>
              <StyledTableCell align="center">분류</StyledTableCell>
              <StyledTableCell align="center">상담 기간</StyledTableCell>
              <StyledTableCell align="center">일정</StyledTableCell>
              <StyledTableCell align="center">과제</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">차준우</StyledTableCell>
              <StyledTableCell align="left">
              학교 생활로 힘들어함<br/>...
              </StyledTableCell>
              <StyledTableCell align="center">친구관계</StyledTableCell>
              <StyledTableCell align="center">
              YYYY.MM.DD ~ 진행 중
              </StyledTableCell>
              <StyledTableCell align="center">05.24(수) 09:00</StyledTableCell>
              <StyledTableCell align="center">미제출</StyledTableCell>
            <StyledTableCell align="center">채팅방 가기</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="center">정영서</StyledTableCell>
              <StyledTableCell align="left">
              진로를 정하지 못한 게 심하게 걱정되어 상담...
              </StyledTableCell>
              <StyledTableCell align="center">진로</StyledTableCell>
              <StyledTableCell align="center">
              YYYY.MM.DD ~ 진행 중
              </StyledTableCell>
              <StyledTableCell align="center">매주 화요일 10:00</StyledTableCell>
              <StyledTableCell align="center">미제출</StyledTableCell>
            <StyledTableCell align="center">채팅방 가기</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="center">리우저이환</StyledTableCell>
              <StyledTableCell align="left">
              MBTI 테스트 완료 분석 대기 중
              </StyledTableCell>
              <StyledTableCell align="center">MBTI</StyledTableCell>
              <StyledTableCell align="center">
              YYYY.MM.DD ~ 진행 중
              </StyledTableCell>
              <StyledTableCell align="center">일정 정하기</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center">채팅방 가기</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="center">이승후</StyledTableCell>
              <StyledTableCell align="left">
              학교에서 친구와의 관계가 심하게 틀어짐<br/>학교 나가는 것에 대한 두려움이 생김<br/>...
              </StyledTableCell>
              <StyledTableCell align="center">학교 생활</StyledTableCell>
              <StyledTableCell align="center">
              YYYY.MM.DD ~ 진행 중
              </StyledTableCell>
              <StyledTableCell align="center">매주 화요일 13:00</StyledTableCell>
              <StyledTableCell align="center">제출 완료</StyledTableCell>
            <StyledTableCell align="center">채팅방 가기</StyledTableCell>
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
