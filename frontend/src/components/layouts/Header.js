import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container, { containerClasses } from "@mui/material/Container";
import Button from "@mui/material/Button";
import styled from "styled-components";

const service = () => {};

const exportManager = () => {};

const nonexportManager = () => {};

const friendManager = () => {};

const mentoring = () => {};

const community = () => {};

const username = () => {};

const mypage = () => {};

const logout = () => {};

function Header() {
  return (
    <Containers>
      <ImageWrapper>
        <img width="80" src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </ImageWrapper>

      <BoxWrapper>
        <LogWrapper>
          <username>OOO 님</username>
          <mypage>마이페이지</mypage>
          <logout>로그아웃</logout>
        </LogWrapper>

        <CategoryWrapper>
          <service>서비스 소개</service>
          <exportManager>전문 상담</exportManager>
          <nonexportManager>비전문 상담</nonexportManager>
          <friendManager>친구 상담</friendManager>
          <mentoring>멘토링</mentoring>
          <community>커뮤니티</community>
        </CategoryWrapper>
      </BoxWrapper>
    </Containers>
  );
}
export default Header;

const Containers = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-bottom-width: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px;
  width: 100%;
  border-bottom-width: 10px;
  border-color: black;
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: green;
`;

const LogWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: flex-end;
  size: 100%;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  background-color: white;
  //height: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid #DFEEDA;
  //border-bottom-width: 10px;
  border-color: #DFEEDA;
`;
