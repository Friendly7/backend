import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from "axios";

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

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Chat Room Modal"
            ariaHideApp={false}
        >
            <h2>채팅방 생성</h2>
            <div>
                <label>채팅방 이름:</label>
                <input
                    type="text"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                />
            </div>
            <div>
                <label>최대 참가자 수 (최대 10명):</label>
                <input
                    type="number"
                    value={maxParticipants}
                    onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        if (!isNaN(value) && value >= 1 && value <= 10) {
                            setMaxParticipants(value);
                        }
                    }}
                />
            </div>
            <div>
                <label>
                    비밀번호 설정
                    <input
                        type="checkbox"
                        name="passwordSetting"
                        value={isPasswordProtected}
                        onChange={() => setIsPasswordProtected(!isPasswordProtected)}
                    />
                </label>
            </div>
            {isPasswordProtected && (
                <div>
                    <label>비밀번호:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            )}
            <button
                onClick={onCreateRoom}
                disabled={!roomName || (isPasswordProtected && !password)} // 채팅방 이름이 비어 있거나 비밀번호를 설정했는데 비밀번호가 비어 있을 때 버튼 비활성화
            >
                생성
            </button>
            <button onClick={onRequestClose}>취소</button>
        </Modal>
    );
};

export default ChatRoomModal;
