import Header from "./Header";
import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import {useNavigate} from "react-router-dom"

export default function ProCounseling() {
    const navigate = useNavigate();
    const goToWrite1 = () => {
        navigate(`/CounselForm/`,{state: { data: '1급전문'}})
    }
    const goToWrite2 = () => {
        navigate(`/CounselForm2/`,{state: { data: '2급전문'}})
    }
    return (
        <ScreenWrapper>
            <Header/>
            <section id="CounselIntroduction">
                <h2>전문 상담사란?</h2>
                <p> 전문 상담사란 상담에 대한 전문적인 자격을 취득
                    한 뒤  친해지자 사이트에세 해당 자격을 인증을
                    완료 한 전문적인 상담사를 말합니다.
                </p>
            </section>
            <section id="how-it-works">
                <h2>상담은 어떻게 받나요?</h2>
                <ol>
                    <li>신청서 작성하기 : 아래 '신청하기'버튼을 눌러서 원하시는 조건을 선택 해주세요.</li>
                    <li>매칭 기다리기 : '친해지자'에서 조건에 맞는 상담사를 찾아드립니다. 원하는 상담사가 아닐 경우, 3번까지 재매칭을 요청하실 수 있어요.</li>
                    <li>상담 시작: 매칭이 완료되면 포인트가 사용되고 채팅 방이 만들어집니다. 이제 상담사와 소통하며 도움을 받아보세요!</li>
                </ol>
            </section>
            <section id="grade">
                <h2>1급 상담사와 2급 상담사 차이가 있나요?</h2>
                <p>상담사는 직업상담사, 청소년 심리상담사 등 여러가지 분야로 나눌 수 있습니다. </p>
                <p>'친해지자'에서는 보다 전문적인 상담을 위해 상담분야별로 자체 기준을 통해 등급을 나누고 있습니다.</p>
                <button>등급 판단 기준 확인하러 가기</button>
            </section>
            <section id="caution">
                <h2>주의사항</h2>
            <p>전문 상담사는 유료 서비스로 포인트를 소모합니다.</p>
            <p>※ 상담사마다 상담 비용이 다르므로 유의 하시길 바랍니다.</p>
            </section>
            <button onClick={goToWrite1}>1급 신청하기</button> <button onClick={goToWrite2}>2급 신청하기</button>
        </ScreenWrapper>
    )
}

const ScreenWrapper = styled.div`
margin-left: 260px;
margin-right: 260px;
`;