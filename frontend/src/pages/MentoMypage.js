import * as React from "react";
import {BrowserRouter as Route, Routes, Link, useParams, useNavigate} from "react-router-dom";
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
import {useEffect, useState} from "react";
import axios from "axios";
import Modal from "react-modal";

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
  const [data, setData] = useState([]);
  const reqDate = (date) =>{
    const currentDate = new Date('2023-11-09T15:28:48');
    const formattedDate = currentDate.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit'});
    return formattedDate;
  }
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userChoice, setUserChoice] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleConfirm = (reqForm) => {
    setUserChoice('1');
    const postData = {
      'request_id':reqForm.request_id,
      'popUp':"confirm",
      'matmentorname':reqForm.matmentorname
    }
    axios.post('/mentorwaiting',postData).then(response=>{
        // axios.post('/cash/get',{amount:30000}).then(response=> {
          alert('처리되었습니다.')
    })
    navigate('/MentoMain')
    window.location.reload()
    closeModal();
  };

  const handleCancel = (reqForm) => {
    setUserChoice('0');
    const postData = {
      'request_id':reqForm.request_id,
      'popUp':"cancel",
      'matmentorname':reqForm.matmentorname
    }
    axios.post('/userwaiting',postData).then(response=>{
      navigate('/MentoMain')
      window.location.reload()
    }).catch(err=> {
      console.log(err)
    })
    closeModal();
  };
  const navigate = useNavigate()
  useEffect(() => {
    axios.post('/mentorwaitinglist')
        .then(response => {
          console.log(response.data)
          if(response.data!=null)
            setData(response.data)
        })
        .catch(error => {
          // 오류 처리
          console.error('오류 발생:', error);
        });
  }, []);

  return (
    <div>
    <MyPageHeader>
        마이 페이지
    </MyPageHeader>

      <table id="mypage_table">
        <colgroup>
          <col width="5%" />
          <col width="12%" />
          <col width="30%" />
          <col width="10%" />
          <col width="20%" />
          <col width="10%" />
        </colgroup>
        <thead id="main_thead">
        <tr >
          <th>No.</th>
          <th>신청자 닉네임</th>
          <th>내용</th>
          <th>분류</th>
          <th>신청날짜</th>
          <th>신청 상태</th>
          <th>예정 포인트</th>
        </tr>
        </thead>
        <tbody id="main_tbody">
        {data.map((item, index) => (
            <tr key={item.request_id} style={{ backgroundColor: index % 2 === 1 ? '#F5F8FA' : 'transparent' }}>
              <td>{index+1}</td>
              <td>{item.user_name}</td>
              <td>{item.significant}</td>
              <td>{item.category}</td>
              <td>{reqDate(item.date)}</td>
              <td>{item.matching !== '수락대기' && (
                  <div>
                    <span>{item.matching}</span><br />
                    <button id='gochatroom'>채팅방 가기</button>
                  </div>)}
                {item.matching === '수락대기' && item.mentor_waiting === '대기' && (
                    <div>
                      <button onClick={openModal}>{item.matching}</button>
                      <Modal
                          isOpen={modalIsOpen}
                          onRequestClose={closeModal}
                          contentLabel="Confirm Modal"
                      >
                        <p>버튼을 클릭하여 선택해주세요</p>
                        <button onClick={()=>handleConfirm(item)}>수락</button>
                        <button onClick={()=>handleCancel(item)}>거절</button>
                      </Modal>
                    </div>
                )}
                {item.matching =='수락대기' && item.mentor_waiting =='수락' && (
                    <div>
                      <span>대기 중</span>
                    </div>
                )}
              </td>
              <td>30000</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}


const MyPageHeader = styledC.div`
    font-size: large;
    padding-bottom: 10px;

    border-bottom: 3px solid green;
`;

const TableContainerWrapper = styledC(Container)`
  width: 1000px;
  overflow: auto;
  padding-top: 30px;
`;