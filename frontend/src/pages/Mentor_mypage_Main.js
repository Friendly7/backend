import {
    BrowserRouter,
    Routes,
    Route, useNavigate,
} from "react-router-dom";
import '../css/My_Page_center.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

export default function Mentor_mypage_Main() {
    const [data,setData] = useState([])
    const [mentorData,setMentorData] = useState([])
    const navigate = useNavigate()
    const handleButtonClick = (id) => {
        console.log(`버튼 클릭 - 데이터 ID: ${id}`);
    };
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
    const reqDate = (date) =>{
        const currentDate = new Date('2023-11-09T15:28:48');
        const formattedDate = currentDate.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit'});
        return formattedDate;
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [userChoice, setUserChoice] = useState(null);
    const [loading, setLoading] = useState(true);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleConfirm = (reqForm) => {
        setUserChoice('1');
        const postData = {
            'request_id': reqForm.request_id,
            'popUp': "confirm",
            'matmentorname': reqForm.matmentorname
        }
        axios.post('/mentorwaiting', postData).then(response => {
            // axios.post('/cash/get',{amount:30000}).then(response=> {
            alert('처리되었습니다.')
        })
        navigate('/Mentor_Page_main')
        window.location.reload()
        closeModal();
    }

    const handleCancel = (reqForm) => {
        // setUserChoice('0');
        // const postData = {
        //     'request_id':reqForm.request_id,
        //     'popUp':"cancel",
        //     'matmentorname':reqForm.matmentorname
        // }
        // axios.post('/userwaiting',postData).then(response=>{
        //     navigate('/My_Page_main')
        //     window.location.reload()
        // }).catch(err=> {
        //     console.log(err)
        // })
        // closeModal();
    };

    return (
        <body>
        <div className='mypage_mypage'>
            <span id='mypage_name'>마이 페이지</span>
            <hr></hr>
            <span id='mypage_name_two'>신청 내역</span>
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
                    <th>멘토, 상담사 닉네임</th>
                    <th>내용</th>
                    <th>분류</th>
                    <th>신청날짜</th>
                    <th>신청 상태</th>
                </tr>
                </thead>
                <tbody id="main_tbody">
                {data.map((item, index) => (
                    <tr key={item.request_id} style={{ backgroundColor: index % 2 === 1 ? '#F5F8FA' : 'transparent' }}>
                        <td>{index+1}</td>
                        <td>{item.matmentorname}</td>
                        <td>{item.significant}</td>
                        <td>{item.category}</td>
                        <td>{reqDate(item.date)}</td>
                        <td>{item.matching !== '수락대기' && (
                            <div>
                            <span>{item.matching}</span><br />
                            <button id='gochatroom' onClick={() => handleButtonClick(item.id)}>채팅방 가기</button>
                        </div>)}
                            {item.matching === '수락대기' && item.mentor_waiting === '대기' && (
                                <div>
                                <button onClick={openModal}>{item.matching}</button>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    contentLabel="Confirm Modal"
                                    style={{
                                        overlay: {
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        },
                                        content: {
                                            width: '45%', // 원하는 너비로 조절
                                            height: '60%',
                                            margin: 'auto', // 화면 중앙에 위치
                                            fontSize: '18px',
                                        },
                                    }}
                                >
                                    <b>신청자 닉네임</b>
                                    <p>{item.user_name}</p>
                                    <b>분류</b>
                                    <p>{item.category}</p>
                                    <b>예상 획득 포인트</b>
                                    <p>30000</p>
                                    <b>선호 요일</b>
                                    <p>{item.dow}</p>
                                    <b>선호 시간대</b>
                                    <p>{item.time}</p>
                                    <b>내용</b>
                                    <p>{item.significant}</p>
                                    <div style={{ textAlign: 'center' }}>
                                    <button onClick={()=>handleConfirm(item)}
                                            style={{
                                                width: '25%',
                                                fontSize: '18px', // 원하는 폰트 크기로 조절
                                                padding: '10px 20px', // 원하는 여백으로 조절
                                                backgroundColor: 'green', // 원하는 배경색으로 조절
                                                color: 'white', // 원하는 글자색으로 조절
                                                border: 'none', // 테두리 제거
                                                borderRadius: '5px', // 모서리 둥글게 처리
                                                cursor: 'pointer', // 커서 스타일 변경
                                                margin: '5px', // 버튼 간격 설정
                                            }}
                                    >수락</button>

                                    <button onClick={()=>handleCancel(item)}
                                            style={{
                                                width: '25%',
                                                fontSize: '18px', // 원하는 폰트 크기로 조절
                                                padding: '10px 20px', // 원하는 여백으로 조절
                                                backgroundColor: '#FFFFFF', // 원하는 배경색으로 조절
                                                color: 'red', // 원하는 글자색으로 조절
                                                border: '1px solid red',
                                                borderRadius: '5px', // 모서리 둥글게 처리
                                                cursor: 'pointer', // 커서 스타일 변경
                                                margin: '5px', // 버튼 간격 설정
                                            }}
                                    >거절</button>
                                    </div>
                                    </Modal>
                                </div>
                            )}
                            {item.matching =='수락대기' && item.mentor_waiting =='수락' && (
                                <div>
                                    <span>대기 중</span>
                                </div>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </body>
    );
}