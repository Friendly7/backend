package cha.friendly.repository;

import cha.friendly.domain.ChatMessage;
import cha.friendly.domain.ChatRoom;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ChatRepositoryImpl extends MongoRepository<ChatMessage, String> {
}