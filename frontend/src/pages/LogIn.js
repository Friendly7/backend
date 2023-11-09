import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/Login.css';
import axios from 'axios';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const show=() =>{
    document.getElementById("join_choose").style.visibility="visible";
  }
  const hide=() =>{
    document.getElementById("join_choose").style.visibility = "hidden";
  }

  const signin = () => {
    // 이메일과 패스워드를 객체에 담습니다.
    const data = {
      email: email,
      password: password,
    };
    axios.post('/login', data)
        .then((response) => {
          if (response.data === 'success') {
            window.location.href = '/'
          }
          else if(response.data === 'fail'){
            setLoginMessage('아이디 또는 비밀번호가 맞지 않습니다');
            setPassword('');
          } else if (response.data === 'ban') {
            setLoginMessage('정지된 계정입니다.');
          }
        })
        .catch((error) => {
        });
  };
  const keyPress = e => {
    if (e.key === 'Enter')
      signin();
  }

  return (
      <div className="container_lg">
        <div className="container_lg_t">
          <div className='header_lg'>
            <div className='logo'></div>
          </div>
          <div id='login'>
            <div className='login_left'></div>
            <div id='login_il' />
            <div className='login_right'>
              <a onClick={() => navigate('/Explanation')} id='whatis'>"친해지자"란?</a>
              <div className='login_name'>
                <span id='lg_content_one'>친해지자</span><br/>
                <span id='lg_content_two'>고민상담과 멘토링이 필요할땐 우리 언제든 <span id='lg_content_two_name'>친해지자</span></span>
              </div>
              <div className='login_form'>
                <label id='email_lb'>Email</label><br/>
                <input type="email" name='email' id="email_form" placeholder="example@naver.com" value={email} onKeyDown={keyPress}
                       onChange={(e) => setEmail(e.target.value)} required /><br/><br/>
                <label id='passwd_lb'>Password</label><br/>
                <input type="password" name='passwd' id="passwd_form" value={password} onKeyDown={keyPress}
                       onChange={(e) => setPassword(e.target.value)} required />
              </div>

              {loginMessage && <div>{loginMessage}</div>}

              <div className='login_check'>
                <label id='id_save'><input type="checkbox" id='id_check' name="color" value="blue" /> 아이디 저장</label>
                <a href='' id='forget'>Forgot Password?</a>
              </div>
              <div className='login_btn'>
                <button onClick={signin} id='logincom'>Sign in</button><br/>
              </div>
              <div className='footer_lg'>
                <span id='footer_lg_lb'>아직 계정이 없으신가요 ? </span>
                <a onClick={show} id='footer_lg_up'>Sign up</a>
              </div>
            </div>
            <div id='join_choose'>
              <button onClick={hide} id='join_choose_form'>X</button><br/>
              <button onClick={() => navigate('/JoinMento')} id='join_choose_btn'>멘토 / 상담사용 <br/>회원가입</button>
              <button onClick={() => navigate('/JoinMenti')} id='join_choose_btn'>멘티 / 내담자용 <br/>회원가입</button>
            </div>
          </div>
        </div>
      </div>
  );
}