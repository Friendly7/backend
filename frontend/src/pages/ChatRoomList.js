import axios from 'axios';
import React, {useState,useEffect} from 'react';
import SessionManager from './SessionManager'
import {useNavigate} from "react-router-dom";

export default function ChatRoomList() {
    const { isLoggedIn,name } = SessionManager(); // 세션 상태를 관리
    const [ roomList, setRoomList ] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        if(isLoggedIn && loading) {
            axios.get('/chat/room/user')
                .then((response) => {
                    console.log(response.data)
                    if(Object.keys(response.data).length !== 0){
                        setRoomList(response.data)
                    }
                    setLoading(false)
                })
                .catch((error) => {
                    console.error(error);
                    setLoading(false)
                });
        }
    },[isLoggedIn,loading]);

    const enterRoom = (roomId)=> {
        navigate('/Chat',{ state: {id: roomId}})
    }
    return (
        <>
            {isLoggedIn && roomList != null ? (
                <ul>
                    {Object.keys(roomList).map((key) => (
                        <div key={key} style={{ display: "flex", alignItems: "center" }}>
                            <div>{name === roomList[key].roomName1 ? (
                                <p>Room Name: {roomList[key].roomName2} </p>
                            ) : <p>Room Name: {roomList[key].roomName1} </p>}</div>
                            <button onClick={() => enterRoom(roomList[key].roomId)}>입장</button>
                        </div>
                    ))}
                </ul>
            ) : (
                <div>로그인해</div>
            )}
        </>
    )
}