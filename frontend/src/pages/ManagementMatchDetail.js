import * as React from "react";
import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import PersonIcon from '@mui/icons-material/Person';
import '../css/ManagerMatchDetail.css'
import ManagerHeader from "../components/layouts/ManagerHeader";
import ManagerProfile from "./ManagerProfile";

export default function ManagementMatchDetail(props) {
  const { request_id } = useParams();
  const [data, setData] = useState([]);
  const [reqData, setReqData] = useState([])
    const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
      axios.get('/manage/match/list/'+request_id).then(response => { //신청서데이터
          if(response.data!=null)
              console.log(response.data)
              setReqData(response.data);
      })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
    axios.post('/matchinglist', { request_id:request_id })
        .then((response) => {
          setData(response.data)
        setSelectedItem(response.data[0])
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  }, []);
    const handleSelect = item =>{
        setSelectedItem(item)
        console.log(selectedItem)
    }
    const matchingReq = () => {
        const result = window.confirm("해당 유저를 선택 하시겠습니까?")
        if (result) {
            axios.post('/matchingMentor',{request_id: request_id, mentor_id: selectedItem.id})
                .then(response => {
                    console.log(response.data)
                    navigate('/ManagerMain')
                }).catch(err=>{
                console.log(err)
            })
            alert("선택 되었습니다.");
        }
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
                  <div className="horizontalWrapper">
                      <div>
                          <PersonIcon sx={{ fontSize: 80 }}/>
                      </div>
                  <Button onClick={matchingReq}
                      // variant="contained"
                      //연한거: #rgba(40,125,10,0.5) , #rgba(4,35,11,0.8)
                      sx={{ backgroundColor: 'rgba(40,125,10,0.5)', color: 'rgba(4,35,11,0.8)',
                          '&:hover': { backgroundColor: 'rgba(32,100,8,0.5)',color: 'white' },
                      fontSize: 17, width: '8vw',borderRadius:'10px', }}>
                      매칭 요청
                  </Button>
                  <div>
                      <div>
                          <PersonIcon sx={{ fontSize: 80 }}/>
                      </div>
                  </div>
              </div>
              <div>
                  <>
                      {selectedItem && (
                      <table>
                          <caption></caption>
                          <thead>
                          <th></th>
                          <th>우선 순위</th>
                          <th></th>
                          </thead>
                          <tbody>
                          <tr>
                              <td>1순위</td>
                              <td>{reqData.one}</td>
                              <td colSpan={3}>
                                  {reqData.one === "별점" && selectedItem.raiting}
                                  {reqData.one === "매칭횟수" && selectedItem.totalMatchingCount}
                                  {reqData.one === "리뷰수" && selectedItem.reviewCnt}
                              </td>
                          </tr>
                          <tr>
                              <td>2순위</td>
                              <td>{reqData.two}</td>
                              <td colSpan={3}>
                                  {reqData.two === "별점" && selectedItem.raiting}
                                  {reqData.two === "매칭횟수" && selectedItem.totalMatchingCount}
                                  {reqData.two === "리뷰수" && selectedItem.reviewCnt}
                              </td>
                          </tr>
                          <tr>
                              <td>3순위</td>
                              <td>{reqData.three}</td>
                              <td colSpan={3}>
                                  {reqData.three === "별점" && selectedItem.raiting}
                                  {reqData.three === "매칭횟수" && selectedItem.totalMatchingCount}
                                  {reqData.three === "리뷰수" && selectedItem.reviewCnt}
                              </td>
                          </tr>
                          </tbody>
                      </table>
                      )}
                  </>
              </div>
          <table>
              <caption>신청서 정보</caption>
              <thead>
              <tr>
                  <th>닉네임</th>
                  <th>카테고리</th>
                  <th>최소가격</th>
                  <th>최대가격</th>
                  <th>조건1</th>
                  <th>조건2</th>
                  <th>조건3</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>{reqData.user_name}</td>
                  <td>{reqData.category}</td>
                  <td>{reqData.minPrice}</td>
                  <td>{reqData.maxPrice}</td>
                  <td>{reqData.one}</td>
                  <td>{reqData.two}</td>
                  <td>{reqData.three}</td>
              </tr>
              </tbody>
          </table>
          <table>
              <caption>추천 리스트</caption>
              <thead>
              <tr>
                  <th>번호</th>
                  <th>닉네임</th>
                  <th>세부 카테고리</th>
                  <th>최소가격</th>
                  <th>최대가격</th>
                  <th>소개</th>
                  <th>별점</th>
                  <th>리뷰 개수</th>
                  <th>총 매칭 횟수</th>
              </tr>
              </thead>
              <tbody>
              {data.map((item, idx) => (
                  <tr key={idx} className='c_td'>
                      <td>{idx+1}</td>
                      <td>{item.name}</td>
                      <td>{item.subCate}</td>
                      <td>{item.minPrice}</td>
                      <td>{item.maxPrice}</td>
                      <td>{item.introduce}</td>
                      <td>{item.raiting}</td>
                      <td>{item.reviewCnt}</td>
                      <td>{item.totalMatchingCount}</td>
                      <td>
                          <button onClick={() => handleSelect(item)}>선택</button>
                      </td>
                  </tr>
              ))}
              </tbody>
          </table>
          </TableWrapper>
          </ViewWrapper>
          </ScreenWrapper>
      </div>
  );
}
const ProfileWrapper = styled.div`
width: 380px;
height: 800px;
margin-top: 70px;
`;

const ViewWrapper = styled.div`
display: flex;
flex-direction: row;

padding-top: 10px;
`;

const TableWrapper = styled.div`
display: flex;
flex-direction: column;

width: 1000px;
padding-top: 10px;

.horizontalWrapper {
    display: flex;
    align-items: center;
  }

  .iconWrapper {
    margin-right: 10px;  // 아이콘과 버튼 사이의 간격 조절
  }
`;
const ScreenWrapper = styled.div`
margin-left: 260px;
margin-right: 260px;
`;