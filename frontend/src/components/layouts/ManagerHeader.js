import * as React from "react";

import { Navbar, Nav, Button, Container, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";
import ManagementMatch from '../../pages/ManagementMatch';
import ManagementChat from '../../pages/ManagementChat';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
//import Container from "@mui/material/Container";
//import Button from "@mui/material/Button";
import SessionManager from "../../pages/SessionManager";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function ManagerHeader(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {isLoggedIn, setIsLoggedIn} = SessionManager();
  const navigate = useNavigate;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <Containers>
        <Navbar.Brand>
          <Nav.Link href="/ManagerMain">
            <ImageWrapper>
              <img
                width="80"
                src='../로고.png'
              />
            </ImageWrapper>
          </Nav.Link>
        </Navbar.Brand>

        <LogWrapper>
        <Navbar.Brand>
          <Nav.Link href="/ManagerMain">
          <SvgIcon
            {...props}
            sx={{
              fontSize: 40,
              border: 2,
              borderRadius: 3,
              borderColor: "#D9D9D9",
            }}
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
          </Nav.Link>
        </Navbar.Brand>
        </LogWrapper>
      </Containers>
      <BoxWrapper>
        <CategoryWrapper>
          {/* Nav에 justify-content-between 클래스 추가 */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '300px', marginRight: '50px' }}>
              <Nav.Link href="/ManagerMain">매칭 신청 관리</Nav.Link>
              <Nav.Link href="/ManagementChat">신고 관리</Nav.Link>
              <Nav.Link href="/ManagementUserList">회원 목록 관리</Nav.Link>
              <Nav.Link href="/ManagementConnect">회원 연결 관리</Nav.Link>
              <Nav.Link href="/ManagementQnA">문의사항</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </CategoryWrapper>
      </BoxWrapper>
    </div>
  );
}
export default ManagerHeader;

const Containers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;
  border-bottom-width: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px;
`;

const LogWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: flex-end;
  margin-right: 24px;
  size: 100%;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px;
  width: 100%;
  border-bottom-width: 10px;
  border-color: black;
`;

const CategoryWrapper = styled.div`
  /* display: flex; */
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  background-color: white;
  //height: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid #dfeeda;
  //border-bottom-width: 10px;
  border-color: #dfeeda;
  margin-left: 15px;
`;