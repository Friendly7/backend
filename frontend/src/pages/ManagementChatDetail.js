import * as React from "react";
import {useNavigate, useParams} from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Container } from "react-bootstrap";
import styled, {styled as sc} from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";
import ManagerHeader from "../components/layouts/ManagerHeader";
import ManagerProfile from "./ManagerProfile";
import Button from "@mui/material/Button";

export default function ManagementChatDetail() {
  const { id } = useParams(); // URL에서 No 매개변수를 가져옴
  const [selectedRow, setSelectedRow] = useState([]);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/manage/report/'+id).then(response => {
      if(response.data!=null) {
        console.log(response.data)
        setSelectedRow(response.data);
        setLoad(true)
      }
    })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  }, [id]);

  const reportAccept = () =>{
    let b = window.confirm("경고 처리 하시겠습니까?");
    if(b==true)
      axios.post('/manage/report',{name:selectedRow[0].respondent, report_id:id}).then(response =>{
        if(response.data=='noBan') {
        }else {
          alert(response.data+"님은 경고누적 정지되었습니다.")
        }
        navigate('/ManagementChat');
      }).catch(err=> {console.log(err)})
  }
  const pass = () => {
    axios.post('/manage/report/pass',{name:selectedRow[0].respondent, report_id:id}).then(response =>{
      navigate('/ManagementChat');
    }).catch(err=> {console.log(err)})
  }
  return (
    <div>
      {load &&
      <ScreenWrapper>
        <ManagerHeader />
        <ViewWrapper>
          <ProfileWrapper>
            <ManagerProfile />
          </ProfileWrapper>
          <TableWrapper>
      <Container key={id}>
        <TitleNoWrapper>No.{id}</TitleNoWrapper>
        <TitleWrapper>
          <TitleDateWrapper>작성 날짜 : {selectedRow[0].date}</TitleDateWrapper>
          <TitleSingoWrapper>작성자 : {selectedRow[0].reporter}</TitleSingoWrapper>
        </TitleWrapper>
        <TitlePiSingoWrapper>
          신고 대상자 : {selectedRow[0].respondent}
          <Button onClick={reportAccept}
              sx={{ backgroundColor: 'rgba(207, 35, 0, 0.2)', color: 'rgba(207, 35, 0, 0.73)',
                '&:hover': { backgroundColor: 'rgba(207, 35, 0, 0.2)',color: 'red' },
                fontSize: 15, width: '8vw',borderRadius:'10px', }}>경고 처리</Button>
          <Button onClick={pass}
                  sx={{ backgroundColor: 'rgba(207, 35, 0, 0.2)', color: 'rgba(207, 35, 0, 0.73)',
                    '&:hover': { backgroundColor: 'rgba(207, 35, 0, 0.2)',color: 'red' },
                    fontSize: 15, width: '8vw',borderRadius:'10px', }}>철회</Button>
        </TitlePiSingoWrapper>

        <SingoContentTitleWrapper>
          신고 내용
          <SingoDetailWrapper>{selectedRow[0].context}</SingoDetailWrapper>
        </SingoContentTitleWrapper>
      </Container>
          </TableWrapper>
        </ViewWrapper>
      </ScreenWrapper>}
    </div>
  );
}

const TitleNoWrapper = styled.div`
  font-size: 30px;
  padding-bottom: 30px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 3px solid green;
  padding-bottom: 10px;
`;

const TitleDateWrapper = styled.div`
  padding-right: 30%;
`;

const TitleSingoWrapper = styled.div``;

const TitlePiSingoWrapper = styled.div`
  font-size: 25px;
  padding-top: 30px;
`;

const SingoContentTitleWrapper = styled.div`
  font-size: 25px;
  padding-top: 30px;
`;

const SingoDetailWrapper = styled.div`
  border: 1px solid green;
  font-size: 15px;
  padding: 10px;

  width: 721.6px;
  height: 300px;
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
flex-direction: column;

width: 1000px;
padding-top: 10px;
`;
const ScreenWrapper = sc.div`
margin-left: 260px;
margin-right: 260px;
`;