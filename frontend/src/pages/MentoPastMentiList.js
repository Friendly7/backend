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

export default function MentoPastMentiList() {
  const theme = useTheme();
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <MyPageHeader>과거 내담자</MyPageHeader>

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
              <StyledTableCell align="center">내담자 닉네임</StyledTableCell>
              <StyledTableCell align="center">상담내용</StyledTableCell>
              <StyledTableCell align="center">분류</StyledTableCell>
              <StyledTableCell align="center">상담 기간</StyledTableCell>
              <StyledTableCell align="center">별점</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">궁금한사람</StyledTableCell>
              <StyledTableCell align="left">
                한부모가정
                <br />
                남자 고등학생
                <br />
                13살때 이혼하심. 현재 검정고시 준비중
              </StyledTableCell>
              <StyledTableCell align="center">가족관계</StyledTableCell>
              <StyledTableCell align="center">
                2023.05.05~2023.05.20
              </StyledTableCell>
              <StyledTableCell align="center">미평가</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="center">구나다로</StyledTableCell>
              <StyledTableCell align="left">내담자 비동의</StyledTableCell>
              <StyledTableCell align="center">친구 및 사회생활</StyledTableCell>
              <StyledTableCell align="center">
                2023.05.04~2023.05.14
              </StyledTableCell>
              <StyledTableCell align="center">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Typography component="legend"></Typography>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="center">LaLALA</StyledTableCell>
              <StyledTableCell align="left">
                딸 아이의 중2병으로 인해 상담 요청
                <br />
                관계 : 아버지
                <br />
                점점 틀어지는 관계를 개선하고 싶음...
              </StyledTableCell>
              <StyledTableCell align="center">가족관계</StyledTableCell>
              <StyledTableCell align="center">
                2023.01.04~2023.01.24
              </StyledTableCell>
              <StyledTableCell align="center">미평가</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="center">나는ISTJ다</StyledTableCell>
              <StyledTableCell align="left">
                MBTI 테스트 및 분석 요청
                <br />
                별도의 분석은 원하지 않음. 결과지만 발송
              </StyledTableCell>
              <StyledTableCell align="center">MBTI</StyledTableCell>
              <StyledTableCell align="center">
                2022.12.14~2022.12.27
              </StyledTableCell>
              <StyledTableCell align="center">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Typography component="legend"></Typography>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="center">닉네임뭐로하지</StyledTableCell>
              <StyledTableCell align="left">내담자 비동의</StyledTableCell>
              <StyledTableCell align="center">친구관계</StyledTableCell>
              <StyledTableCell align="center">
                2022.11.11~2022.12.17
              </StyledTableCell>
              <StyledTableCell align="center">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Typography component="legend"></Typography>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
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
