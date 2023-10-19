import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SessionManager from './SessionManager';

export default function FirstPage() {
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn} = SessionManager(); // 세션 상태를 관리
    // 로그아웃 처리
    const handleLogout = () => {
        axios.post('/logout')
            .then(() => {
                // 세션 상태 업데이트
                setIsLoggedIn(false);
                navigate('/');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            {isLoggedIn ? (
                // 로그인 상태인 경우
                <div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                // 로그아웃 상태인 경우
                <div>
                    <button onClick={() => navigate('/Login')}>Login</button>
                </div>
            )}
            <div>
                <Link to={"/Counsel"}><button onClick={() => navigate('/Counsel')}>상담신청</button></Link>
            </div>
            <div>
                <button onClick={() => navigate('/Location')}>Location </button>
            </div>
            <div>
                <button onClick={() => navigate('/cashConversion')}>현금화 </button>
            </div>
            <div>
                <button onClick={() => navigate('/RatingAndReview')}>후기(별점) </button>
            </div>
        </div>
    );
  }
