import * as React from "react";
import {BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate} from "react-router-dom";
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

// // ManagementChatDetail 컴포넌트 정의
// function ManagementUserListDetail() {
//   const { id } = useParams(); // URL에서 ID 매개변수를 가져옴
//
//   // 해당 ID와 일치하는 행 찾기
//   const selectedRow = rows.find((row) => row.No === id);
//
//   if (!selectedRow) {
//     return <div>해당 ID에 대한 데이터를 찾을 수 없습니다.</div>;
//   }
//
//   return (
//     <div>
//       <h2>No. {selectedRow.No}에 대한 상세 정보</h2>
//       <p>ID: {selectedRow.ID}</p>
//       <p>PassWord: {selectedRow.PassWord}</p>
//       <p>UserName: {selectedRow.UserName}</p>
//       <p>Email: {selectedRow.Email}</p>
//       <p>Area: {selectedRow.Area}</p>
//       <p>Class: {selectedRow.Class}</p>
//       <p>ReportCount: {selectedRow.ReportCount}</p>
//       <p>StopDate: {selectedRow.StopDate}</p>
//       <p>AccountState: {selectedRow.AccountState}</p>
//       <Link to="/CustomizedTables">테이블로 돌아가기</Link>
//     </div>
//   );
// }

export default function ManagementUserList() {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('/members').then(response => {
            if(response.data!=null) {
                setRows(response.data);
            }
            console.log(response.data)
        })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },[])
    const banCancel = (id) =>{
        axios.post('/members/ban/cancel',{member_id:id})
        navigate('/ManagementUserList')
        window.location.reload()
    }
    const ban = (id) =>{
        axios.post('/members/ban',{member_id:id})
        navigate('/ManagementUserList')
        window.location.reload()
    }
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
            <StyledTableCell align="center">No.</StyledTableCell>
            <StyledTableCell align="center">닉네임</StyledTableCell>
            <StyledTableCell align="center">정지 날짜</StyledTableCell>
            <StyledTableCell align="center">계정 관리</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell component="th" scope="row" align="center">
                <Link to={`/ManagementUserListDetail/${row.id}`}>{idx+1}</Link>
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.banDate}</StyledTableCell>
              <StyledTableCell align="center">
                  {row.is_blocked ? (<button onClick={()=>banCancel(row.id)}
                                             style={{
                                                 border: 'none',
                                                 background: 'none',
                                                 cursor: 'pointer',
                                                 transition: 'color 0.3s ease-in-out, font-size 0.3s ease-in-out',
                                             }}
                                             onMouseEnter={(e) => {
                                                 e.target.style.color = 'red';
                                                 e.target.style.fontSize = '1.2em'; // 예시로 1.2em으로 설정
                                             }}
                                             onMouseLeave={(e) => {
                                                 e.target.style.color = 'black';
                                                 e.target.style.fontSize = '1em'; // 다시 원래 크기로 설정
                                             }}>
                      정지해제</button>):
                      (<button onClick={()=>ban(row.id)}
                               style={{
                                   border: 'none',
                                   background: 'none',
                                   cursor: 'pointer',
                                   transition: 'color 0.3s ease-in-out, font-size 0.3s ease-in-out',
                               }}
                               onMouseEnter={(e) => {
                                   e.target.style.color = 'red';
                                   e.target.style.fontSize = '1.2em'; // 예시로 1.2em으로 설정
                               }}
                               onMouseLeave={(e) => {
                                   e.target.style.color = 'black';
                                   e.target.style.fontSize = '1em'; // 다시 원래 크기로 설정
                               }}>정지</button>)}

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
