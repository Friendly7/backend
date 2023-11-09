import Header from "./Header";
import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import {useNavigate} from "react-router-dom"

export default function Mentoring() {
    const navigate = useNavigate();
    const goToWrite = () => {
        navigate('/CounselForm')
    }
    return (
        <ScreenWrapper>
            <Header/>
            <section id="MentorIntroduction">
                <h2>멘토링이란?</h2>
                <p>멘토링은 경험이 풍부한 멘토이 경험 부족한 다른 개인(멘티)에게 조언, 지도, 조언을 제공하고 지원하는 과정 또는 활동입니다. 멘토는 멘티의 발전과 성장을 돕기 위해 자신의 경험, 지식, 기술, 통찰력을 공유하고 멘티에게 지원을 제공합니다.</p>
            </section>
            <section id="how-it-works">
                <h2>멘토링은 어떻게 받나요?</h2>
                <ol>
                    <li>신청서 작성하기 : 아래 '신청하기'버튼을 눌러서 원하시는 조건을 선택 해주세요.</li>
                    <li>매칭 기다리기 : '친해지자'에서 조건에 맞는 멘토를 찾아드립니다. 원하는 멘토가 아닐 경우, 3번까지 재매칭을 요청하실 수 있어요.</li>
                    <li>멘토링 시작: 매칭이 완료되면 포인트가 사용되고 채팅 방이 만들어집니다. 이제 멘토와 소통하며 도움을 받아보세요!</li>
                </ol>
            </section>
            <section id="caution">
                <h2>주의사항</h2>
                <p>멘토링은 유료 서비스로 포인트를 소모합니다.</p>
                <p>※ 멘토마다 상담 비용이 다르므로 유의 하시길 바랍니다.</p>
            </section>
                <button onClick={goToWrite}>신청하기</button>
        </ScreenWrapper>
    )
}

const ScreenWrapper = styled.div`
margin-left: 260px;
margin-right: 260px;
`;