import * as React from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { createData, rows } from "./MemberListData";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";



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
      <TitleWrapper key={selectedRow.No}>
        <ProfileImageWrapper>
        <SvgIcon {...props} sx={{ fontSize: 80 }}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        </ProfileImageWrapper>
        <ProfileTitleWrapper>
          {selectedRow.UserName}<br/>
          정지 날짜 : {selectedRow.StopDate}
        </ProfileTitleWrapper>
      </TitleWrapper>
      <ContentWrapper>
        <UserInfoWrapper>
          닉네임<br/><br/>
          {selectedRow.UserName}<br/><br/><br/>
          휴대폰 번호<br/><br/>
          {selectedRow.PhoneNumber}<br/><br/><br/>
          이메일<br/><br/>
          {selectedRow.Email}<br/><br/><br/>
          가입 날짜<br/><br/>
          {selectedRow.MakeDate}<br/><br/><br/>
        </UserInfoWrapper>
        <UserActiveWrapper>
          최근 활동 내역     XXXX.XX.XX<br/><br/>
          신고 접수 처리 - 계정 정지     XXXX.XX.XX<br/><br/>
          신고 접수     XXXX.XX.XX<br/><br/>
          채팅 시작     XXXX.XX.XX<br/><br/>
          매칭 신청 전송     XXXX.XX.XX<br/><br/>
          서비스 가입     XXXX.XX.XX<br/><br/>
        </UserActiveWrapper>
      </ContentWrapper>

    </div>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  justify-content: row;
  width: 100%;
  height: 100px;
  padding-bottom: 20%;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 50%;
`;

const ProfileTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 700px;
  padding: 5% 15% 0 15%;
  border-top: 1px solid gray;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 30px;
  border-right: 1px solid gray;
`;

const UserActiveWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 50px;
`;