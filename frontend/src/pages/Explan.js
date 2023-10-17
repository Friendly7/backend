import '../css/Explan.css';
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Explanation() {
    const navigate = useNavigate();
  
    return (
      <div className="container_ep">
        <div className='header_ep'>
        <button onClick={() => navigate('/')} id='gohome'></button>
    </div>
        <div className='body_ep'>
            <span id='body_ep_name'>“친해지자”는 해결을 위해 이런 서비스를 제공합니다.</span><br/>
            <div className='body_ep_content'>
            <span id='body_ep_num'>1. 최적의 상담사 / 멘토 매칭 </span><br/>
            <span id='body_ep_con'>원하는 조건을 선택하시면 최적의 상담사 / 멘토를 만나보실 수 있어요.<br/> 
            익명으로 시간과 장소에 구애받지 않고 도움을 받아보세요!</span><br/>
            <span id='body_ep_num'>2. 무료 상담 서비스 </span><br/>
            <span id='body_ep_con'>상담 금액이 부담되신다면 해당 서비스를 이용해보세요.<br/> 
            상담사 준비생들이 상담을 해드립니다.</span><br/>
            <span id='body_ep_num'>3. 친구상담 서비스 </span><br/>
            <span id='body_ep_con'>상담이 꺼려지시나요?<br/> 
            익명의 일반인과 대화하면서 고민을 털어보세요.</span>
            <span id='body_ep_end'>상담해주고 포인트를 받아보세요.</span>
            </div>
        </div>

    </div>
    );
}