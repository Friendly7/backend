import React, { useEffect, useState,useCallback } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import ChatMemoComponent from "./ChatMemoComponent";

function WebSocketComponent2({ roomId, sender }) {
    const [messages, setMessages] = useState([]);
    const [stompClient, setStompClient] = useState(null);
    const [messageText, setMessageText] = useState(''); // 사용자가 입력한 메시지를 상태로 관리
    const [isLoading, setIsLoading] = useState(true);

    let socket = new SockJS('/ws-stomp');
    let stomp = Stomp.over(socket);
    let reconnect = 0;

    const connect = () => {
        stomp.connect({}, frame => {
            stomp.subscribe('/sub/chat/room/' + roomId, message => {
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
            });
            stomp.send("/pub/chat/message", {}, JSON.stringify({
                type: 'ENTER',
                roomId: roomId,
                sender: sender
            }));
            setStompClient(stomp);
            console.log(stompClient)
            setIsLoading(false)
        }, error => {
            if (reconnect++ <= 5) {
                setTimeout( ()=> {
                    console.log("Connection reconnect");
                    socket = new SockJS("/ws-stomp");
                    stomp = Stomp.over(socket);
                    connect();
                }, 10 * 1000);
            }
        });
    };
    const disconnect = () => {
        if (stompClient) {
            stompClient.disconnect();
            console.log("웹소켓 연결 해제");
        }
    }

    useEffect(() => {
        if(!stompClient) {
            setIsLoading(true)
            connect();
        }
        return () => disconnect();
    }, []);

    const sendMessage = useCallback(()=> {
        stompClient.send("/pub/chat/message", {}, JSON.stringify({type:'TALK', roomId:roomId, sender:sender, message:messageText}));
        setMessageText('');
    }, [stompClient, roomId, sender, messageText]);

    return (
        <>
            {isLoading ? ( // 로딩 중일 때 로딩 애니메이션을 보여줍니다.
                <div className="loading">
                    <div className="spinner"></div>
                    방 입장 중...
                </div>
            ) : (<div>
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}> {message.sender} : {message.message}</li>
                    ))}
                </ul>
            <input
                type="text"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Type your message"
                onKeyDown={(e) => {if (e.key === 'Enter') {sendMessage();}}}
            />
            <button onClick={sendMessage}>Send</button>
            <ChatMemoComponent />
                </div>
                )}
        </>
    );
}

export default WebSocketComponent2;
