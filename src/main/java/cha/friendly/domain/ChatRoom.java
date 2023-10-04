package cha.friendly.domain;

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
    /**
     * username1과 username2는 방이 자동으로 생성되면서 default(user1,user2)값으로 설정된다.
     * 만약 변경을 원하는 경우 채팅방 이름 변경을 통해 커스텀 할 수 있다.
     */
    private String user1RoomName;
    private String user2RoomName;
    private String username1;
    private String username2;

    public static ChatRoom create(String name) {
        ChatRoom chatRoom = new ChatRoom();
        chatRoom.roomId = UUID.randomUUID().toString();
        chatRoom.user1RoomName = name;
        chatRoom.user2RoomName = name;
        return chatRoom;
    }
}