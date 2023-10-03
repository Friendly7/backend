package cha.friendly.repository;

import cha.friendly.domain.ChatRoom;
import cha.friendly.domain.MongoDBTestModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ChatRoomRepositoryImpl extends MongoRepository<ChatRoom, String> {
    ChatRoom findByRoomId(String roomId);
}
