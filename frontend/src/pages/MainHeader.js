import * as React from "react";
import '../css/MainHeader.css';
import {useNavigate} from "react-router-dom";
import SessionManager from "./SessionManager";
import axios from 'axios'
import {useEffect, useState} from "react";
import My_Page_main from '../pages/My_Page_main';
import Modal from 'react-modal';
import CommunityCategory from "./CommunityCategory";

export default function MainHeader() {
    const navigate = useNavigate();
    const {isLoggedIn,setIsLoggedIn,name,role} = SessionManager();
    const [userRole, setUserRole] = useState('');
    const logout=()=>{
        axios.post('/logout').then(response => {
            if(response.data=='logout') {
                setIsLoggedIn(false);
                navigate('/')
            }
        })
    }
    useEffect(() => {
        if(role)
            setUserRole(role)
    })
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const MyModal = ({ isOpen, closeModal }) => {
        return (
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="My Modal"
            >
                <p>This is my modal content.</p>
                <button onClick={closeModal}>Close Modal</button>
            </Modal>
        );
    };
    return (
        <>
            <div className='MainHeaderBox'>
                {!isLoggedIn ? (
                    <>
                    <span id='MHperson'></span>

                    <button onClick={()=>navigate('/login')} id='MHlogin'>로그인</button>
                    </>
                        ):(
                        <>
                            {isLoggedIn &&
                                <>
                            <span id='MHperson'>{name}님</span>
                            {role && role=='USER' ? (
                                <button onClick={()=>{navigate('/My_Page_main')}} id='MHmypage'>마이페이지</button>
                            ):(
                                <button onClick={()=>{navigate('/Mentor_page_main')}} id='MHmypage'>마이페이지</button>
                                )}
                            <button onClick={logout} id='MHlogin'>로그아웃</button>
                                </>
                            }
                        </>
                        )}
                    <button id='MHgohome' />
                    <hr id='MHhr' />
                    <button onClick={()=>navigate('/')} id='MHService'>서비스 소개</button>
                    <button onClick={()=>navigate('/ProCounseling')} id='MHCounsel'>전문/비전문 상담</button>
                    <button onClick={()=>navigate('/FriendChat')} id='MHFriend'>친구상담</button>
                    <button onClick={()=>navigate('/Mentoring')} id='MHMentoring'>멘토링</button>
                    <button onClick={openModal} id='MHCommunity'>커뮤니티</button>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="My Modal"
                    style={{
                        content: {
                            width: '15%', // 모달의 가로 크기 조절
                            height: '22%', // 모달의 세로 크기 조절
                            margin: 'auto', // 가운데 정렬
                        },
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                    <CommunityCategory />
                    <button onClick={closeModal}  style={{
                        width: '25%',
                        fontSize: '16px', // 원하는 폰트 크기로 조절
                        padding: '10px 20px', // 원하는 여백으로 조절
                        backgroundColor: 'green', // 원하는 배경색으로 조절
                        color: 'white', // 원하는 글자색으로 조절
                        border: 'none', // 테두리 제거
                        borderRadius: '5px', // 모서리 둥글게 처리
                        cursor: 'pointer', // 커서 스타일 변경
                        margin: '5px' // 포인터 커서
                    }}>닫기</button>
                    </div>
                </Modal>
            </div>
        </>
    )
}
