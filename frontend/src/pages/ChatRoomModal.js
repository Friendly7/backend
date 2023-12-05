import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from "axios";
import '../css/FriendModal.css'

const ChatRoomModal = ({ isOpen, onRequestClose, userName, onCreateRoomClick }) => {
    const [roomName, setRoomName] = useState('');
    const [maxParticipants, setMaxParticipants] = useState(10);
    const [isPasswordProtected, setIsPasswordProtected] = useState(false);
    const [password, setPassword] = useState('');

    const onCreateRoom = () => {
        const ChatReqFriend = {
            userName: userName,
            roomName: roomName,
            maximum: maxParticipants,
            passwd: isPasswordProtected ? password : null // 비밀번호 설정 여부에 따라 값 설정
        };
        axios.post('/chat/room/friend', ChatReqFriend)
            .then((response) => {
                if(response.data!='') {
                    console.log('방이 생성되었습니다.', response.data);
                    onRequestClose();
                    onCreateRoomClick()
                } else {
                    setRoomName("")
                    alert("이미 존재하는 방 이름입니다.")
                }
            })
            .catch((error) => {
                console.error('방 생성 중 오류 발생:', error);
                onRequestClose();
            });

    }
    const customModalStyles = {
        content: {
            width: '20%', // 원하는 크기로 조절합니다.
            height: '30%', // 원하는 크기로 조절합니다.
            margin: 'auto', // 가운데 정렬을 위해 margin을 설정합니다.
    fontSize:'35px', fontWeight:600, color:'black', fontFamily: `'counselname', serif`,
        },
    };
    const customModalStyles2 = {
        content: {
            textAlign:'center'
        },
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Chat Room Modal"
            ariaHideApp={false}
            style={customModalStyles}
        >
            <h2 className='toCenter_friend'>채팅방 생성</h2>
            <div className='padding_friend'>
                <label>채팅방 이름:</label>

                <input className='friend_input_name'
                    type="text"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                />
            </div>
            <div>
                <label>인원 제한:</label>
                <input className='friend_input_name'
                    type="number"
                    value={maxParticipants}
                    onChange={(e) => {
                        const value = parseInt(e.target.value, 5);
                        if (!isNaN(value) && value >= 1 && value <= 5) {
                            setMaxParticipants(value);
                        }
                    }}
                />
            </div>
            {/*<div>*/}
            {/*    <label>*/}
            {/*        비밀번호 설정*/}
            {/*        <input*/}
            {/*            type="checkbox"*/}
            {/*            name="passwordSetting"*/}
            {/*            value={isPasswordProtected}*/}
            {/*            onChange={() => setIsPasswordProtected(!isPasswordProtected)}*/}
            {/*        />*/}
            {/*    </label>*/}
            {/*</div>*/}
            {/*{isPasswordProtected && (*/}
            {/*    <div>*/}
            {/*        <label>비밀번호:</label>*/}
            {/*        <input*/}
            {/*            type="password"*/}
            {/*            value={password}*/}
            {/*            onChange={(e) => setPassword(e.target.value)}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*)}*/}
            <div className='toCenter_friend'>
            <button className='button_friend'
                onClick={onCreateRoom}
                disabled={!roomName || (isPasswordProtected && !password)} // 채팅방 이름이 비어 있거나 비밀번호를 설정했는데 비밀번호가 비어 있을 때 버튼 비활성화
            >
                생성
            </button>
            <button className='button_friend_cancel' onClick={onRequestClose}>취소</button>
            </div>
        </Modal>
    );
};

export default ChatRoomModal;
