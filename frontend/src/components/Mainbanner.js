import React from 'react';
import styled from 'styled-components'
import { Container, Box, CssBaseline } from '@mui/material';



function Mainbanner() {
  return(
      <BannerContainer>

        <BoxWrapper>

        동네친구에게 이야기 하듯
        <br/>부담 없이 여러분의 고민을 들어 드립니다.
        <br/>친구 상담 서비스 사용하기

        </BoxWrapper>

        <BannerWrapper>
            이벤트 배너
        </BannerWrapper>
       


      </BannerContainer>
    
  )
}

export default Mainbanner;


const BannerContainer = styled.div`
display: flex;
flex-direction: row;
background-color: #F6FAF1;
justify-content: space-between;
padding: 36px;

`;
const BoxWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #F6FAF1;
width: 50%;
height: 400px;
`;

const BannerWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: gray;
width: 50%;
height: 400px;

`;
