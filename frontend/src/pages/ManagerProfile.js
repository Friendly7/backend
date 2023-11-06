import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container, { containerClasses } from "@mui/material/Container";
import Button from "@mui/material/Button";
import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";
import ManagerCategory from "./ManagerCategory";

function ManagerProfile(props) {
  return (
    <div>
      <Profile>
        <ProfileImageWrapper>
          <SvgIcon {...props} sx={{ fontSize: 80 }}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        </ProfileImageWrapper>
        <div
          style={{ fontSize: "20px", textAlign: "center", marginTop: "10px", marginBottom: "10px"}}
        >
          관리자
          <br />
        </div>
        <div style={{ fontSize: "40px", textAlign: "center", marginBottom: "30px" }}>정관리</div>

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