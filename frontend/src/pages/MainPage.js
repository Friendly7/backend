import Banner from './banner';
import Header from './Header';
import Category from './category';
import Mainbanner from './Mainbanner';
// import Notice from './components/notice';
// import MemberList from './pages/MemberList';
// import { Container } from '@mui/material';
import styled from 'styled-components';
import SessionManager from './SessionManager';
import ManagerMain from "./ManagerMain";
import * as React from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function App() {
    const {isLoggedIn,setIsLoggedIn, name} = SessionManager();
    const navigate = useNavigate();
    const logout = () => {
        axios.post('/logout')
            .then(() => {
                // 세션 상태 업데이트
                setIsLoggedIn(false);
                navigate('/');
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <>
            {(isLoggedIn && (name !=='관리자')) || isLoggedIn===false ? (
                <ScreenWrapper>
                    <Header/>
                    <Mainbanner/>
                    <Banner/>
                    <Category/>
                </ScreenWrapper>)
                :(
                    <ScreenWrapper>
                        <button onClick={logout}>로그아웃</button>
                        <ManagerMain />
                    </ScreenWrapper>
                )}
            }
        </>

    );
}

export default App;

const ScreenWrapper = styled.div`
margin-left: 260px;
margin-right: 260px;
`;