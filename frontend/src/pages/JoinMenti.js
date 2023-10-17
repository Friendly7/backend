import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/JoinMenti.css';

export default function JoinMenti() {
  const navigate = useNavigate();

  return (
    <div className="container_join">
      <div className="container_jo_t">
        <div className='join'>
        <form id='join'>
          <div className='join_left'></div>
          <div id='join_il' />
          <div className='join_right'>
            <a onClick={() => navigate('/Explanation')} id='whatis'>"친해지자"란?</a>
            <div className='join_name'>
              <span id='join_content_one'>친해지자(상담자/멘티 회원가입)</span><br/><br/>
              <span id='join_content_two'>고민상담과 멘토링이 필요할땐 우리 언제든 <span id='lg_content_two_name'>친해지자</span></span>
            </div>
            <div className='join_form'>
              <label id='name_lb_join'>이름 <a id='red'>*</a></label><br/>
              <input type="text" id="name_form_join"  /><br/>
              <label id='email_lb_join'>이메일 <a id='red'>*</a></label><br/>
              <input type="email" id="email_form_join"  /><br/>
              <label id='number_lb_join'>전화번호 <a id='red'>*</a></label><br/>
              <input type="email" id="number_form_join"  /><br/>
              <label id='passwd_lb_join'>Password <a id='red'>*</a></label><br/>
              <input type="password" id="passwd_form_join"/><br/>
              <label id='passwdchk_lb_join'>Check Password <a id='red'>*</a></label><br/>
              <input type="password" id="passwdchk_form_join"/><br/>
              <label id='location_lb_join'>지역<a id='red'>*</a></label>
              <button onClick={() => navigate('/Location')} id='location_join'>인증하기</button>
            </div>
            <div className='join_check'>
              <label id='agreement_one'><input type="checkbox" id='agree_one_chk' name="color" value="blue" /> 약관동의</label>
              <label id='agreement_two'><input type="checkbox" id='agree_two_chk' name="color" value="blue" /> 개인정보 제공 동의</label>
            </div>
            <div className='join_btn'>
              <button onClick={() => navigate('/')} id='joincom'>Sign up</button><br/>
              <button onClick={() => navigate('/')} id='kakaojo'>카카오로 회원가입</button>
            </div>
            <div className='footer_join'>
              <span id='footer_join_mento'>전문가 사용자로 가입하기 </span>
              <button id='arrow_join' >   </button>
              <a onClick={() => navigate('/JoinMento')} id='footer_join_menti_up'>Sign up</a>
              <span id='footer_join_no'>이미 계정이 있으신가요? </span>
              <button id='arrow_join' >   </button>
              <a onClick={() => navigate('/LogIn')} id='footer_join_menti_in'>Sign in</a>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}