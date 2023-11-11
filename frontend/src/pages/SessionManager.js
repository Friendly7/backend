import { useEffect, useState } from 'react';
import axios from 'axios';

function SessionManager() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [role, setRole] = useState('')

    useEffect(() => {
        axios.get('/checkSession')
            .then((response) => {
                if (response.data ==null) {
                    setIsLoggedIn(false);
                } else if(response.data!="") {
                    setName(response.data.name);
                    setRole(response.data.role)
                    setIsLoggedIn(true);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return { isLoggedIn, setIsLoggedIn, name, role};
}

export default SessionManager;