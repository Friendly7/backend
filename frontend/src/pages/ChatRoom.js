import axios from 'axios';
import React, {useState,useEffect} from 'react';

export default function ChatRoom() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!loading) {
            return;
        }
        const reqName = {
            user1: '관리자',
            user2: '나도사용자'
        };
        axios.post('/chat/room', reqName)
            .then((response) => {
                setLoading(false);
                console.log('방이 생성되었습니다.', response.data);
            })
            .catch((error) => {
                setLoading(false);
                console.error('방 생성 중 오류 발생:', error);
            });
    },[loading]);
}