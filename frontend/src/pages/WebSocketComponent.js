import React, { useEffect } from 'react';
import SockJS from 'sockjs-client';
import Stomp from '@stomp/stompjs';

export default function WebSocketComponent() {
    useEffect(() => {
        // WebSocket 연결 설정
        const socket = new SockJS('http://localhost:8080/ws-stomp');
        const stompClient = Stomp.over(socket);

        stompClient.connect(
            {},
            () => {
                // 연결에 성공하면 실행할 작업
                console.log('WebSocket 연결 성공!');

                // 구독할 대상 및 메시지 처리
                stompClient.subscribe('/sub/chat', (message) => {
                    const chatMessage = JSON.parse(message.body);
                    console.log('받은 메시지:', chatMessage);

                    // 여기에서 메시지를 화면에 표시하거나 상태를 업데이트할 수 있습니다.
                });

                // 메시지 전송 예시
                const message = {
                    username: '사용자 이름',
                    content: '메시지 내용',
                };
                stompClient.send('/pub/chat', {}, JSON.stringify(message));
            },
            (error) => {
                // 연결 중 오류 발생 시 실행할 작업
                console.error('WebSocket 오류:', error);
            }
        );

        // 컴포넌트 언마운트 시 WebSocket 연결 종료
        return () => {
            stompClient.disconnect();
            console.log('WebSocket 연결 종료');
        };
    }, []);

    return (
        <div>
            {/* 채팅 내용을 표시할 부분 */}
        </div>
    );
}
