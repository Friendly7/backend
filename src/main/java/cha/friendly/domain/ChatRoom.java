package cha.friendly.domain;

import cha.friendly.domain.Dto.ChatReqName;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Getter
@Setter
@Document(collection="room")
public class ChatRoom {
    @Id
    private String id;
    private String roomId;
    private String roomName1; //일반사용자
    private String roomName2; //멘토, 상담사
    private String username1;//일반 사용자
    private String username2;//멘토, 상담사

    public static ChatRoom create(ChatReqName chatReqName) {
        ChatRoom chatRoom = new ChatRoom();
        chatRoom.roomId = UUID.randomUUID().toString();
        chatRoom.username1 = chatReqName.getUser1();
        chatRoom.username2 = chatReqName.getUser2();
        chatRoom.roomName1 = chatRoom.username2;
        chatRoom.roomName2 = chatRoom.username1;
        return chatRoom;
    }
}