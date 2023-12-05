import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateChatRoomFriend from "./CreateChatRoomFriend";
import {useNavigate} from "react-router-dom";
import '../css/FriendChat.css'
import styled from "styled-components";
import MainHeader from './MainHeader'
import SessionManager from "./SessionManager";
import ChatRoomModal from "./ChatRoomModal";

function FriendChat() {
    const navigate = useNavigate();
    const [chatRooms, setChatRooms] = useState([]);
    const [loading, setLoading] = useState(true)
    const {isLoggedIn,name} = SessionManager();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

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
        <>
        <MainHeader/>
        <ScreenWrapper>
            <h1>친구 상담</h1>
            <p className='fontfont'>방을 만들고 채팅방에서 친구들 기다려보세요!</p>
            <button className="friend_chat-button" onClick={openModal}>방 만들기</button>
            <ChatRoomModal isOpen={isModalOpen} onRequestClose={closeModal} userName={name} onCreateRoomClick={handleCreateRoomClick}/>
            <br/><br/><br/><br/>


            <div className="chat-room-list">
                {chatRooms.map((room) => (
                    <button className="friend_chat-button_list" key={room.id}  onClick={() => navigate('/ChatMain')}>
                        {room.roomName1}
                    </button>
                ))}
            </div>
            </ScreenWrapper>
        </>
    );
}

const ScreenWrapper = styled.div`
margin-left: 20%;
margin-right: 20%;
margin-top:15%;
font-size:25px;
    font-weight:600;
    color:rgba(4, 35, 11,0.8);
    font-family: 'counselname', serif;
`;

export default FriendChat;
