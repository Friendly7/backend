import * as React from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";
import Button from "@mui/material/Button";

export default function ManagementListDetail(props) {
  const { No } = useParams(); // URL에서 No 매개변수를 가져옴

  return (
    <div>
      <Profile>
        <MentoProfile>
          <ProfileImageWrapper>
            <SvgIcon {...props} sx={{ fontSize: 80 }}>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
          </ProfileImageWrapper>
        </MentoProfile>
        <MentiProfile>
          <ProfileImageWrapper>
            <SvgIcon {...props} sx={{ fontSize: 80 }}>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
          </ProfileImageWrapper>
        </MentiProfile>
      </Profile>

      <ContentWrapper>
        연결 날짜 : 2222.22.22~
        <br />
        연결 기간 : 2 개월
        <br />
        신고 수 : 0<br />
      </ContentWrapper>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "red", color: "white" }}
        >
          연결 해제
        </Button>
      </div>
    </div>
  );
}

const Profile = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 250px;
`;

const MentoProfile = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 250px;
  padding-left: 100%;
`;

const MentiProfile = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 250px;
  padding-left: 80%;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;
  margin: 0 auto;

  border: 1px solid green;
  border-radius: 50%;
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

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1000px;
  height: 200px;

  font-size: 25px;
  font-weight: bolder;
`;
