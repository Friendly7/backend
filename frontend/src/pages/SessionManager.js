import { useEffect, useState } from 'react';
import axios from 'axios';

function SessionManager() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // 페이지 로드 시 세션 상태 확인
        axios.get('/checkSession')
            .then((response) => {
                if (response.data === 'authenticated') {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return { isLoggedIn, setIsLoggedIn };
}

export default SessionManager;