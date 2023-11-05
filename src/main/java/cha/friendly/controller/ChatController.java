package cha.friendly.controller;

import cha.friendly.domain.ChatMessage;
import cha.friendly.service.ChatRoomService;
import cha.friendly.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

@RequiredArgsConstructor
@Controller
public class ChatController {

    private final SimpMessageSendingOperations messagingTemplate;
    private final ChatService chatService;

    @MessageMapping("/chat/message")
    public void message(ChatMessage message) {
        if (ChatMessage.MessageType.ENTER.equals(message.getType()))
            message.setMessage(message.getSender() + "님이 입장하셨습니다.");
        LocalDateTime currentTime = LocalDateTime.now();
        // 한국 시간대 설정
        ZoneId koreaZone = ZoneId.of("Asia/Seoul");

        // 현재 시간을 ISO 8601 문자열로 변환
        DateTimeFormatter isoFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        String isoTimestamp = currentTime.atZone(koreaZone).format(isoFormatter);
        message.setTimestamp(isoTimestamp);
        messagingTemplate.convertAndSend("/sub/chat/room/" + message.getRoomId(), message);
        if(ChatMessage.MessageType.TALK.equals(message.getType())) {
            chatService.saveMsg(message);
        }
    }
    @GetMapping("/chat/prev/messages/{roomId}")
    @ResponseBody
    public List<ChatMessage> prevMessages(@PathVariable String roomId) {
        List<ChatMessage> messages = chatService.getMessages(roomId);
        System.out.println(messages);
        return messages;
    }
}
