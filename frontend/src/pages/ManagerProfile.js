import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container, { containerClasses } from "@mui/material/Container";
import Button from "@mui/material/Button";
import styled from "styled-components";
import SvgIcon from '@mui/icons-material/ManageAccounts';
import ManagerCategory from "./ManagerCategory";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import SessionManger from '../pages/SessionManager'

function ManagerProfile(props) {
  const navigate = useNavigate();
  const {isLoggedIn,setIsLoggedIn} = SessionManger();
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
    <div>
      <Profile>
        <ProfileImageWrapper>
          <SvgIcon {...props} sx={{ fontSize: 80 }} />
        </ProfileImageWrapper>
        <div style={{ fontSize: "30px", textAlign: "center", marginTop: "5%", marginBottom: "5%" }}>관리자</div>
        <div style={{ fontSize: "20px", textAlign: "center", marginTop: "5%", marginBottom: "5%"}}>
          <Button onClick={logout}
                  sx={{ backgroundColor: 'rgba(40,125,10,0.5)', color: 'rgba(4,35,11,0.8)',
                    '&:hover': { backgroundColor: 'rgba(32,100,8,0.5)',color: 'white' },
                    fontSize: 15, width: '6vw',borderRadius:'10px'}}>로그아웃</Button></div>

        <ManagerCategory />
      </Profile>

    </div>
  );
}

export default ManagerProfile;

const Profile = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  

  width: 50px;
  height: 500px;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 100px;
  margin: 0 auto;

  border: 1px solid gray;
  border-radius: 55px;
`;

const svg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 100px;
  padding: 5px;

  border: 1px solid gray;
  border-radius: 55px;
`;