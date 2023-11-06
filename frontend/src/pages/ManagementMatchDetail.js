import * as React from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { createData, rows } from "./ManagementMatchData";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";
import Button from "@mui/material/Button";

export default function ManagementListDetail(props) {
  const { No } = useParams(); // URL에서 No 매개변수를 가져옴

  // 선택한 No에 해당하는 데이터 찾기
  const selectedRow = rows.find((row) => row.No === No);

  // 선택한 데이터가 없으면 null 반환
  if (!selectedRow) {
    return null;
  }

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
        <Button
          variant="contained"
          sx={{
            backgroundColor: "gray",
            color: "white",
            marginLeft: "200px",
            whiteSpace: "nowrap",
            width: "500px",
            height: "50px",
          }}
        >
          매칭 요청
        </Button>
        <MentiProfile>
          <ProfileImageWrapper>
            <SvgIcon {...props} sx={{ fontSize: 80 }}>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
          </ProfileImageWrapper>
        </MentiProfile>
      </Profile>

      <Ranking>
        <MentoRanking>
          1. 별점 4.7 이상
          <br />
          2. 매칭 소요 시간 3시간
          <br />
          3. 후기 5개 이상
          <br />
        </MentoRanking>
        <MentiRanking>
          1. 별점 4.8
          <br />
          2. 매칭 소요 시간 3.2시간
          <br />
          3. 후기 5개
          <br />
        </MentiRanking>
      </Ranking>
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

const MentoProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 250px;
  padding-left: 100%;
`;

const MentiProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 250px;
  padding-left: 40%;
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

const Ranking = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1000px;
  height: 250px;
`;

const MentoRanking = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 250px;
`;

const MentiRanking = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 250px;
  padding-left: 30%;
`;
