import { useEffect, useState } from 'react';
import axios from 'axios';

function SessionManager() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    useEffect(() => {
        // 페이지 로드 시 세션 상태 확인
        axios.get('/checkSession')
            .then((response) => {
                if (response.data === 'not_auth') {
                    setIsLoggedIn(false);
                } else {
                    setName(response.data)
                    setIsLoggedIn(true);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return { isLoggedIn, setIsLoggedIn, name };
}

export default SessionManager;