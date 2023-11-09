import { useEffect, useState } from 'react';
import axios from 'axios';

function SessionManager() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');

    useEffect(() => {
        axios.get('/checkSession')
            .then((response) => {
                if (response.data == 'not_authenticated') {
                    console.log("로그인안함");
                    setIsLoggedIn(false);
                } else {
                    setName(response.data);
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