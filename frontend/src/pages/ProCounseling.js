import Header from "./Header";
import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import {useNavigate} from "react-router-dom"
import MainHeader from './MainHeader'

export default function ProCounseling() {
    const navigate = useNavigate();
    const goToWrite1 = () => {
        navigate(`/CounselForm/`,{state: { data: '1급전문'}})
    }
    const goToWrite2 = () => {
        navigate(`/CounselForm2/`,{state: { data: '2급전문'}})
    }
    const goToWriteNonPro = () => {

    }
    return (
        <ScreenWrapper>
        <MainHeader />
            <section id="CounselIntroduction">
                <h2>전문 상담사란?</h2>
                <p> 전문 상담사란 상담에 대한 전문적인 자격을 취득
                    한 뒤  친해지자 사이트에세 해당 자격을 인증을
                    완료 한 전문적인 상담사를 말합니다.
                </p>
            </section>
            <section id="NonCounselIntroduction">
                <h2>비전문 상담이란?</h2>
                <p> 관련 학과 재학생이나 졸업생들이 상담을 진행합니다. 사이트 자체 기준에 부합하는 경우에만 상담 활동이 허용됩니다.
                    전문 상담사와는 다르게 무료로 상담받아보실 수 있습니다.
                </p>
            </section>
            <section id="grade">
                <h2>1급 상담사와 2급 상담사 차이가 있나요?</h2>
                <p>상담사는 직업상담사, 청소년 심리상담사 등 여러가지 분야로 나눌 수 있습니다. </p>
                <p>'친해지자'에서는 보다 전문적인 상담을 위해 상담분야별로 자체 기준을 통해 등급을 나누고 있습니다.</p>
                <button style={buttonStyle}>등급 기준 확인하기</button>
            </section>
            <section id="how-it-works">
                <h2>상담은 어떻게 받나요?</h2>
                <ol>
                    <li>신청서 작성하기 : 아래 '신청하기'버튼을 눌러서 원하시는 조건을 선택 해주세요.</li>
                    <li>매칭 기다리기 : '친해지자'에서 조건에 맞는 상담사를 찾아드립니다. 원하는 상담사가 아닐 경우, 3번까지 재매칭을 요청하실 수 있어요.</li>
                    <li>상담 시작: 매칭이 완료되면 포인트가 사용되고 채팅 방이 만들어집니다. 이제 상담사와 소통하며 도움을 받아보세요!</li>
                </ol>
            </section>

            <button style={buttonStyle}onClick={goToWrite1}>1급 신청하기</button>  <button style={buttonStyle} onClick={goToWrite2}>2급 신청하기</button>  <button style={buttonStyle} onClick={goToWriteNonPro}>비전문 신청하기</button>
        </ScreenWrapper>
    )
}

const ScreenWrapper = styled.div`
margin-left: 20%;
margin-right: 20%;
margin-top:15%;
font-size:25px;
    font-weight:600;
    color:rgba(4, 35, 11,0.8);
    font-family: 'counselname', serif;
`;

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '25px',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    border: '2px solid #4CAF50',
    color: '#4CAF50',
    backgroundColor: '#fff',
    transition: 'background-color 0.3s, color 0.3s',
};