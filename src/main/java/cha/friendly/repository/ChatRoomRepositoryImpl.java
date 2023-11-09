package cha.friendly.repository;

import cha.friendly.domain.ChatRoom;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ChatRoomRepositoryImpl extends MongoRepository<ChatRoom, String> {
    List<ChatRoom> findByUsername1(String username1);
    List<ChatRoom> findByUsername2(String username2);

    ChatRoom findByRoomId(String roomId);
    List<ChatRoom> findByType(String type);

    ChatRoom findByroomName1(String roomName);
}