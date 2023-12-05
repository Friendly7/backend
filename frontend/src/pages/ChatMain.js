import React, {useState,useEffect} from 'react';
import axios from "axios";
import ChatRoomList from './ChatRoomList';
import ChatMemoComponent from "./ChatMemoComponent";
import "../css/ChatMain.css"
import { useCallback } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import SessionManager from './SessionManager'

export default function ChatMain() {
    const [roomId, setRoomId] = useState(null)

    const getRoomId = (roomId) => {
        setRoomId(roomId);
        setMessages([])
        getChatMessages(roomId);
        setIsLoading(true)
        setStompClient(null)
        if (stompClient) {
            stompClient.disconnect();
            console.log('소켓 종료')
        }
    }
    const { isLoggedIn,name } = SessionManager(); // 세션 상태를 관리
    const sender = name;
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);
    const [stompClient, setStompClient] = useState(null);
    const [messageText, setMessageText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [getPrev, setGetPrev] = useState(true)

    const getChatMessages = async (roomId) => {
        try {
            console.log(roomId)
            const response = await axios.get('/chat/prev/messages/'+roomId);
            const prevMessages = Object.values(response.data);
            setMessages(prevMessages)
        } catch (error) {
            console.error('Error fetching chat messages:', error);
        }
    };
    const initializeWebSocket = () => {
        const socket = new SockJS('/ws-stomp');
        const stomp = Stomp.over(socket);

        stomp.connect({}, frame => {
            stomp.subscribe('/sub/chat/room/' + roomId, message => {
                const messageData = JSON.parse(message.body);
                //const s = messageData.type === 'ENTER' ? '[알림]' : messageData.sender;
                setMessages(prevMessages => [
                    ...prevMessages,
                    {
                        type: messageData.type,
                        sender: messageData.sender,
                        timestamp: messageData.timestamp,
                        message: messageData.message,
                    },
                ]);
            });

            setStompClient(stomp);
            setIsLoading(false);
        });

        return () => {
            if (stompClient) {
                stompClient.disconnect();
                console.log('소켓 종료')
            }
        };
    }
    useEffect(() => {
        if (isLoggedIn && roomId) {
            axios.get('/chat/room/' + roomId)
                .then((response) => {
                    if (response.data.type != 'friend') {
                        if (response.data.roomName1 === name)
                            setRoomName(response.data.roomName2)
                        else
                            setRoomName(response.data.roomName1)
                    } else {
                        setRoomName(response.data.roomName1)
                    }
                }).catch((error) => {
                console.log(error)
            });
            //------------------------------------------------------
            if (!stompClient) {
                setIsLoading(true);
                const cleanupWebSocket = initializeWebSocket();
                return cleanupWebSocket;
            }
        }
    }, [isLoggedIn,roomId,stompClient, sender])
    const sendMessage = useCallback(() => {
        stompClient.send('/pub/chat/message', {}, JSON.stringify({
            type: 'TALK',
            roomId: roomId,
            sender: sender,
            message: messageText,
            timestamp:getCurrentTime()
        }));
        setMessageText('');
    }, [stompClient, roomId, sender, messageText]);

    function parseAndFormatTimestamp(timestamp) {
        let date = new Date(timestamp);
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        const res = `${hours}:${minutes}`
        return res
    }
    function getCurrentTime() {
        const now = new Date(); // 현재 시간을 얻습니다.

        const year = now.getFullYear(); // 연도
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 월
        const day = now.getDate().toString().padStart(2, '0'); // 일
        const hours = now.getHours().toString().padStart(2, '0'); // 시간
        const minutes = now.getMinutes().toString().padStart(2, '0'); // 분
        const seconds = now.getSeconds().toString().padStart(2, '0'); // 초

        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    }
    // 날짜 및 시간을 분리하는 함수
    function parseDateAndTime(timestamp) {
        const date = timestamp.slice(0, 10); // 'yyyy-MM-dd' 형태의 날짜 추출
        const time = timestamp.slice(11, 16); // 'hh:mm' 형태의 시간 추출
        return { date, time };
    }
    // 메시지 그룹화 및 시간 출력
    // const groupedMessages = groupMessagesByTime(messages);

    function groupMessagesByTime(messages) {
        const grouped = [];
        let prevDateTime = null;
        messages.forEach((message) => {
            const timestamp = message.timestamp; // 전체 타임스탬프
            const dateTime = timestamp.slice(0, 16); // 'yyyy-MM-ddThh:mm' 형태의 날짜 및 시간 추출
            const formattedTime = parseAndFormatTimestamp(timestamp);

            if (dateTime === prevDateTime) {
                grouped[grouped.length - 1].messages.push({ message, formattedTime });
            } else {
                grouped.push({ dateTime, messages: [{ message, formattedTime }] });
                prevDateTime = dateTime;
            }
        });
        return grouped;
    }
    return(
        // <div id='chatMainBox'>
        //     <ChatRoomList getRoomId={getRoomId} />
        //     <h3>{roomName}</h3>
        //     <div id='ChattingBox'>
        //         {loading && name && <WebSocketComponent2 roomId={roomId} sender={name}/>}
        //     </div>
        //     <ChatMemoComponent />
        // </div>

            <div id='chatMainBox'>
                <ChatRoomList getRoomId={getRoomId} />
                <div id='chatBox'>
                    <div className="container">
                        <h3 id='chatroomname'>{roomName}</h3>
                        {roomId && isLoading ? (
                            <div className="c_chat_loading ">
                                <div className="c_spinner" />
                                <div className='centerSpinner'>
                                <div className="spinner"></div></div>
                            </div>
                        ) : (
                            <>
                            <div id='imsi'>
                                {messages.map((message,index)=> (
                                    name == message.sender ? (
                                        <div key={index} id='chatmsgdiv' style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', float:'right' , paddingBottom:'5px'}}>
                                            <div id='chattime' style={{ marginRight: '10px', paddingTop: '10px', marginLeft:'500px'}}>{parseDateAndTime(message.timestamp).time}</div>
                                            <div id='chatmessage' style={{ fontWeight:'500', fontSize: '25px', color: '#888'}}>{message.message}</div>
                                        </div>
                                    ): (
                                        <div key={index} id='chatmsgdiv' style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', float:'right' , paddingBottom:'5px'}}>
                                            <div id='chatmessage' style={{ fontWeight:'500', fontSize: '25px', color: '#888' }}>{message.message}</div>
                                            <div id='chattime' style={{ marginRight: '850px', paddingTop: '10px', marginLeft:'10px'}}>{parseDateAndTime(message.timestamp).time}</div>
                                        </div>
                                    )))}
                            </div>
                            <input id="chatinput" type="text" value={messageText} onChange={e => setMessageText(e.target.value)} placeholder="메시지를 입력하세요"
                               onKeyDown={e => {
                                   if (e.key === 'Enter') {
                                       sendMessage();
                                   }
                               }}/>
                            <button id="chatsendbtn" onClick={sendMessage}>전송</button>
                            </>
                            )}
                    </div>
                </div>
                <div id='ChattingMemo'>
                    <ChatMemoComponent />
                </div>

        </div>
    )
}