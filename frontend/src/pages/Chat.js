import { useLocation } from 'react-router-dom';
import SessionManager from "./SessionManager";
import React, {useEffect, useState} from "react";
import axios from 'axios';
import WebSocketComponent from "./WebSocketComponent";


export default function Chat() {
    const { isLoggedIn,name } = SessionManager(); // 세션 상태를 관리
    const [loading, setLoading] = useState(true)
    const [roomName, setRoomName] = useState('');
    const location = useLocation();
    const roomId = location.state.id;

    useEffect(() => {
        if (isLoggedIn && loading) {
            axios.get('/chat/room/'+roomId)
                .then((response)=>{
                    console.log(response.data)
                    if(response.data.roomName1 ===name)
                        setRoomName(response.data.roomName2)
                    else
                        setRoomName(response.data.roomName1)
                }).catch((error) => { console.log(error)});
        }
    }, [isLoggedIn, loading])
    return(
        <div>
            <h3>{roomName}</h3>
            <WebSocketComponent />
        </div>
    )
}
