import { useLocation } from 'react-router-dom';
import SessionManager from "./SessionManager";
import React, {useEffect, useState} from "react";
import axios from 'axios';
import WebSocketComponent2 from "./WebSocketComponent2";
import ChatMemoComponent from "./ChatMemoComponent";

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
                    if(response.data.roomName1 ===name)
                        setRoomName(response.data.roomName2)
                    else
                        setRoomName(response.data.roomName1)
                    setLoading(false)
                }).catch((error) => { console.log(error)});
        }
    }, [isLoggedIn, loading])
    return(
        <>
            <h3>{roomName}</h3>
            <div>
            {name && <WebSocketComponent2 roomId={roomId} sender={name}/>}
            </div>
            <ChatMemoComponent />
        </>
    )
}
