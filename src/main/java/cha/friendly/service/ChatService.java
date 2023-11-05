package cha.friendly.service;

import cha.friendly.domain.ChatMessage;
import cha.friendly.repository.ChatRepositoryImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class ChatService {
    private final ChatRepositoryImpl chatRepository;

    public void saveMsg(ChatMessage message) {
        chatRepository.save(message);
    }

    public List<ChatMessage> getMessages(String roomId) {
        System.out.println("roomId = " + roomId);
        return chatRepository.findByRoomId(roomId);
    }
}
