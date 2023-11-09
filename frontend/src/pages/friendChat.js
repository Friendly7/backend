import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateChatRoomFriend from "./CreateChatRoomFriend";
import {useNavigate} from "react-router-dom";

function FriendChat() {
    const navigate = useNavigate();
    const [chatRooms, setChatRooms] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(loading) {
            axios.get('/chat/room/friend/ChatRoomList')
                .then((response) => {
                    console.log(response.data)
                    setChatRooms(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching chat rooms:', error);
                });
        }
        setLoading(false)
    }, [loading]);

    const handleCreateRoomClick = () => {
        setLoading(true);
    }
    const enterRoom = (roomId)=> {
        navigate('/Chat',{ state: {id: roomId}})
    }

    return (
        <div>
            <h1>Friend Chat Rooms</h1>
            <CreateChatRoomFriend onCreateRoomClick={handleCreateRoomClick}/>

            <div className="chat-room-list">
                {chatRooms.map((room) => (
                    <button key={room.id} className="chat-room" onClick={() => enterRoom(room.roomId)}>
                        {room.roomName1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default FriendChat;
