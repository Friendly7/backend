import React, { useEffect, useState,useCallback } from 'react';
import { Client, Stomp } from '@stomp/stompjs';
import * as SockJS from "sockjs-client";
import SessionManager from "./SessionManager";

function WebSocketComponent({ roomId, sender }) {
    const [messages, setMessages] = useState([]);
    const [stompClient, setStompClient] = useState(null);
    const [messageText, setMessageText] = useState(''); // 사용자가 입력한 메시지를 상태로 관리

    useEffect(() => {
        try {
            const client = new Client({
                //brokerURL: 'ws://localhost:8080/ws-stomp', // WebSocket 서버 URL
                webSocketFactory: () => new SockJS("/ws-stomp"),
                debug: (str) => {
                    console.log(str);
                },
                reconnectDelay: 5000,
                heartbeatIncoming: 4000,
                heartbeatOutgoing: 4000,
            });
            client.onConnect = () => {
                console.log('Connected to WebSocket'+roomId+sender);
                if(sender) {
                    client.subscribe('/sub/chat/room/' + roomId, (message) => {
                        try {
                            const messageData = JSON.parse(message.body);
                            const s = messageData.type === 'ENTER' ? '[알림]' : messageData.sender;
                            setMessages((prevMessages) => [
                                ...prevMessages,
                                {
                                    "type": messageData.type,
                                    "sender": s,
                                    "message": messageData.message
                                }
                            ]);
                        } catch (error) {
                            console.error('구독 메시지 처리 중 오류 발생:', error);
                        }
                    });
                    setStompClient(client);
                }
            };
            client.activate();

            sendChat()
        } catch (e) {
            console.log(e)
        }

        return () => {
            if (stompClient) {
                stompClient.deactivate();
            }
        };
    }, []);

    const sendChat = () => {
        if (stompClient) {
            stompClient.publish({
                destination: "/pub/chat/message", // 메시지 전송 대상
                body: JSON.stringify({type: "ENTER", sender: sender, roomId: roomId})
            })
        }
    }
    const sendMessage = useCallback(()=> {
        if(stompClient) {
            stompClient.send("/pub/chat/message", {}, JSON.stringify({
                type: 'TALK',
                roomId: roomId,
                sender: sender,
                message: messageText
            }))
        }
        setMessageText('');
    })

    return (
        <>
            <ul>
                {messages.map((message, index) =>
                    <li key={index}>{message.message}</li>
                )}
            </ul>
            <input
                type="text"
                value={messageText}
                onChange={e=> setMessageText(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </>
    );
}

export default WebSocketComponent;
