import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../css/JoinMento.css';
import axios from 'axios';
import VerificationCodeInput from './VerificationCodeInput';
import Timer from './Timer';

export default function JoinMento() {
  const navigate = useNavigate();
  // 사용자 정보를 담을 상태 변수들을 정의합니다.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true); // 이메일 중복 확인 여부
  const [isEmailChecked, setIsEmailChecked] = useState(false); // 이메일 중복 확인 버튼 클릭 여부
  const [isNameValid, setIsNameValid] = useState(true); // 이름 중복 확인 여부
  const [isNameChecked, setIsNameChecked] = useState(false); // 이름 중복 확인 버튼 클릭 여부
  const [emailMessage, setEmailMessage] = useState('');
  const [isEmailButtonDisabled, setIsEmailButtonDisabled] = useState(false);
  const [verified, setVerified] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('인증번호 전송');
  const [isRunning, setRunning] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [EmailVerifiedCode, setEmailVerifiedCode] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleVerification = (code) => {
    if(code == EmailVerifiedCode){
      setVerified(true);
      setRunning(false);
      setIsButtonDisabled(true)
    }else{
      alert("인증번호가 틀립니다.")
    }
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

  const checkEmail = async () => {
    if (email.trim() === '') { alert('이메일을 입력하세요.');
    } else if (!isValidEmail(email)) { alert("올바른 이메일 형식이 아닙니다.\n 예)example@email.com");
    } else {
      await axios({
        method: 'post',
        url: '/checkEmail',
        data: email,
        headers: {
          'Content-Type': 'application/json',
        },
      })
          .then((response) => {
            if (response.data === 'available') {
              setIsButtonDisabled(true);
              setRunning(true)
              setButtonLabel('재전송');
              delay(60000).then(() => {
                setRunning(false)
                setIsButtonDisabled(false)
              })
              axios({
                method: 'post',
                url: '/send-mail/email',
                 data: {
                   email: email
                 },
                headers: {
                  'Content-Type': 'application/json',
                },}).then((response) => {
                    setEmailVerifiedCode(response.data.code);
                    setIsEmailButtonDisabled(true);
              }).catch((error)=>{
                console.error('이메일 보내기 오류:', error);
              })
            } else if (response.data === 'duplicate') {
              console.log('중복 이메일')
              setEmailMessage('중복된 이메일입니다.');
              setIsEmailChecked(true)
              setIsEmailButtonDisabled(false);
            }
          }).catch ((error) => {
            console.error('Error:', error);
            setEmailMessage('오류가 발생했습니다.');
            setIsEmailButtonDisabled(false);
          })
    }
  };

  const checkName = async () => {
    if(name==='' || name.length>8) {
      alert("3글자 이상 8글자 이하로만 가능합니다")
      return;
    }
    await axios.get('/member/findByName',{ params: {name: name}})
        .then(response => {
          if(response.data ==="available") {
            alert("사용 가능한 닉네임입니다.")
          } else if(response.data === "exist") {
            alert("이미 존재하는 닉네임입니다.")
          }
        }).catch(error =>{
          console.log(error)
        })
  };

  const signUp = () => {
    // 사용자가 약관 및 개인정보 제공 동의를 한 경우에만 회원가입을 진행합니다.
    if (!agreedToTerms || !agreedToPrivacy) {
      alert('약관 동의 및 개인정보 제공 동의가 필요합니다.');
      return;
    }
    navigate("/");
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordsMatch(newPassword === passwordConfirmation);
  }

  const handlePasswordConfirmationChange = (e) => {
    const newPasswordConfirmation = e.target.value;
    setPasswordConfirmation(newPasswordConfirmation);
    setPasswordsMatch(newPasswordConfirmation === password);
  };

  return (
    <div className="container_join">
      <div className="container_jo_t">
        <div className='join'>
        <div id='join'>
          <div className='join_left'></div>
          <div id='join_il' />
          <div className='join_right'>
            <a onClick={() => navigate('/Explanation')} id='whatis'>"친해지자"란?</a>
            <div className='join_name'>
              <span id='join_content_one'>친해지자(상담사/멘토 회원가입)</span><br/>
              <span id='join_content_two'>고민상담과 멘토링이 필요할땐 우리 언제든 <span id='lg_content_two_name'>친해지자</span></span><br/>
            <span id='join_content_three'>* 회원가입 후 필요 서류를 제출하셔야 인증이 완료됩니다</span>
            </div>
            <div className='join_form'>
              <label id='name_lb_join'>이름 <a id='red'>*</a></label><br/>
              <input type="text" id="name_form_join" value={name} onChange={(e) => setName(e.target.value)} required/>
              <button onClick={checkName} id="check_name">중복 확인</button><br/>

              <label id='email_lb_join'>이메일 <a id='red'>*</a></label><br/>
              <input type="email" id="email_form_join" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              <button onClick={checkEmail} id="check_email" disabled={isButtonDisabled}>{buttonLabel}</button>
              {isRunning && <Timer />}
              <br/><br/>
              <div>
                {verified ? (
                    <p>인증이 완료되었습니다.</p>
                ) : (
                    <div>
                      <VerificationCodeInput onVerify={handleVerification} />
                    </div>
                )}
              </div>
              <label id='number_lb_join'>전화번호 <a id='red'>*</a></label><br/>
              <input type="text" id="number_form_join" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/><br/>
              <label id='passwd_lb_join'>Password <a id='red'>*</a></label><br/>
              <input type="password" id="passwd_form_join" value={password} onChange={handlePasswordChange}
              required/><br/>
              <label id='passwdchk_lb_join'>Check Password <a id='red'>*</a></label><br/>
              <input type="password" id="passwdchk_form_join" value={passwordConfirmation}
                     onChange={handlePasswordConfirmationChange} required/><br/>
              <div>
                {passwordsMatch && password!=''? (
                    <p>비밀번호가 일치합니다.</p>
                ) : passwordConfirmation === '' ? (
                    <p> </p>
                ) : (
                    <p>비밀번호가 일치하지 않습니다.</p>
                )}
              </div>
            </div>
            <div className='join_check'>
              <label id='agreement_one'><input type="checkbox" id='agree_one_chk' name="color" value="blue"
                                               checked={agreedToTerms} onChange={() => setAgreedToTerms(!agreedToTerms)}/> 약관동의</label>
              <label id='agreement_two'><input type="checkbox" id='agree_two_chk' name="color" value="blue"
                                               checked={agreedToPrivacy} onChange={() => setAgreedToPrivacy(!agreedToPrivacy)}/> 개인정보 제공 동의</label>
            </div>
            <div className='join_btn'>
              <button onClick={signUp} id='joincom'>Sign up</button><br/>
              <button onClick={() => navigate('/')} id='kakaojo'>카카오로 회원가입</button>
            </div>
            <div className='footer_join'>
              <span id='footer_join_mento'>일반 사용자로 가입하기 </span>
              <button id='arrow_join' >   </button>
              <a onClick={() => navigate('/JoinMenti')} id='footer_join_mento_up'>Sign up</a>
              <span id='footer_join_no'>이미 계정이 있으신가요? </span>
              <button id='arrow_join' >   </button>
              <a onClick={() => navigate('/LogIn')} id='footer_join_mento_in'>Sign in</a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}