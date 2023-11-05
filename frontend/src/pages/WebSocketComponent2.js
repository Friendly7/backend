import React, { useEffect, useState, useCallback } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import axios from 'axios';

function WebSocketComponent2({ roomId, sender }) {
    const [messages, setMessages] = useState([]);
    const [stompClient, setStompClient] = useState(null);
    const [messageText, setMessageText] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const getChatMessages = async (roomId) => {
        try {
            const response = await axios.get('/chat/prev/messages/'+roomId);
            const prevMessages = Object.values(response.data);
            setMessages(prevMessages)
        } catch (error) {
            console.error('Error fetching chat messages:', error);
        }
    };

    useEffect(() => {
        getChatMessages(roomId)
        const initializeWebSocket = () => {
            const socket = new SockJS('/ws-stomp');
            const stomp = Stomp.over(socket);

            stomp.connect({}, frame => {
                stomp.subscribe('/sub/chat/room/' + roomId, message => {
                    const messageData = JSON.parse(message.body);
                    const s = messageData.type === 'ENTER' ? '[알림]' : messageData.sender;
                    setMessages(prevMessages => [
                        ...prevMessages,
                        {
                            type: messageData.type,
                            sender: s,
                            message: messageData.message,
                        },
                    ]);
                });
                stomp.send('/pub/chat/message', {}, JSON.stringify({
                    type: 'ENTER',
                    roomId: roomId,
                    sender: sender,
                }));
                setStompClient(stomp);
                setIsLoading(false);
            });

            return () => {
                if (stompClient) {
                    stompClient.disconnect();
                }
            };
        };

        if (!stompClient) {
            setIsLoading(true);
            const cleanupWebSocket = initializeWebSocket();
            return cleanupWebSocket;
        }
    }, [stompClient, roomId, sender]);

    const sendMessage = useCallback(() => {
        stompClient.send('/pub/chat/message', {}, JSON.stringify({
            type: 'TALK',
            roomId: roomId,
            sender: sender,
            message: messageText,
        }));
        setMessageText('');
    }, [stompClient, roomId, sender, messageText]);

    function parseAndFormatTimestamp(timestamp) {
        const timePart = timestamp
        return timePart
    }

    return (
        <>
            {isLoading ? (
                <div className="loading">
                    <div className="spinner"></div>
                    방 입장 중...
                </div>
            ) : (
                <div>
                    <ul>
                        {messages.map((message, index) => (
                            <li key={index}>
                                {message.sender} : {message.message} <span>{message.timestamp && parseAndFormatTimestamp(message.timestamp)}</span>
                            </li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        value={messageText}
                        onChange={e => setMessageText(e.target.value)}
                        placeholder="메시지를 입력하세요"
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                sendMessage();
                            }
                        }}
                    />
                    <button onClick={sendMessage}>전송</button>
                </div>
            )}
        </>
    );
}

export default WebSocketComponent2;
