import * as React from "react";
import '../css/MainHeader.css';
import {useNavigate} from "react-router-dom";
import SessionManager from "./SessionManager";
import axios from 'axios'
import {useEffect, useState} from "react";
import My_Page_main from '../pages/My_Page_main';

export default function MainHeader() {
    const navigate = useNavigate();
    const {isLoggedIn,setIsLoggedIn,name,role} = SessionManager();

    const logout=()=>{
        axios.post('/logout').then(response => {
            if(response.data=='logout') {
                setIsLoggedIn(false);
                navigate('/')
            }
        })
    }
    return (
        <>
            <div className='MainHeaderBox'>
                {!isLoggedIn ? (
                    <>
                    <span id='MHperson'></span>

                    <button onClick={()=>navigate('/login')} id='MHlogin'>로그인</button>
                    </>
                        ):(
                        <>
                            {isLoggedIn &&
                                <>
                            <span id='MHperson'>{name}님</span>
                            {role && role=='USER' ? (
                                <button onClick={()=>{navigate('/My_Page_main')}} id='MHmypage'>마이페이지</button>
                            ):(
                                <button onClick={()=>{navigate('/MentoMain')}} id='MHmypage'>마이페이지</button>
                                )}
                            <button onClick={logout} id='MHlogin'>로그아웃</button>
                                </>
                            }
                        </>
                        )}
                    <button id='MHgohome' />
                    <hr id='MHhr' />
                    <button onClick={()=>navigate('/')} id='MHService'>서비스 소개</button>
                    <button onClick={()=>navigate('/ProCounseling')} id='MHCounsel'>전문/비전문 상담</button>
                    <button onClick={()=>navigate('/')} id='MHFriend'>친구상담</button>
                    <button onClick={()=>navigate('/Mentoring')} id='MHMentoring'>멘토링</button>
                    <button onClick={()=>navigate('/')} id='MHCommunity'>커뮤니티</button>
            </div>
        </>
    )
}
