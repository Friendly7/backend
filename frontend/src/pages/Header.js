import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container, { containerClasses } from "@mui/material/Container";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SessionManager from './SessionManager';
import '../css/Header.css'; // 헤더 컴포넌트에 해당하는 CSS 파일을 불러옵니다.
import logoImage from '../components/img/friendly.PNG';

function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, name} = SessionManager();
  // 로그아웃 처리
  const handleLogout = () => {
    axios.post('/logout')
        .then(() => {
          setIsLoggedIn(false);
          window.location.href = '/'
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  };

  return (
      <>
          <header>
              <div className="header-container">
                  <div className="logo-container">
                      <img src={logoImage} alt="Logo" className="logo" />
                  </div>
                  {isLoggedIn ? (
                      <>
                      <span>프로필 사진</span>
                      <button  className="login-button">마이페이지</button>
                      <button onClick={handleLogout} className="login-button">로그아웃</button>
                      </>
                      ) : (
                      <>
                      <button onClick={()=>navigate('/Login')} className="login-button">로그인</button>
                      <button onClick={()=>navigate('/Login')} className="login-button">회원가입</button>
                      </>
                      )}

              </div>
              <nav>
                  <ul className="nav-links">
                      <li><a href="/">서비스 소개</a></li>
                      <li><a href="/ProCounseling">전문/비전문 상담</a></li>
                      <li><a href="/Mentoring">멘토링</a></li>
                      <li><a href="/non-professional-counseling">커뮤니티</a></li>
                  </ul>
              </nav>
          </header>
      </>
  );
}
export default Header;