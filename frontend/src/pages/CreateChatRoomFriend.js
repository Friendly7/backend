import React, {useState} from 'react';
import SessionManager from "./SessionManager";
import ChatRoomModal from "./ChatRoomModal"

export default function CreateChatRoomFriend({onCreateRoomClick}) {
    const {isLoggedIn,name} = SessionManager();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
      <>
          <button onClick={openModal}>방 만들기</button>
          <ChatRoomModal isOpen={isModalOpen} onRequestClose={closeModal} userName={name} onCreateRoomClick={onCreateRoomClick}/>
      </>
    );
}