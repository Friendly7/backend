package cha.friendly.service;

import cha.friendly.domain.ChatRoom;
import cha.friendly.repository.ChatRoomRepository;
import cha.friendly.repository.ChatRoomRepositoryImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.*;

@Service
@Slf4j
@RequiredArgsConstructor
public class ChatRoomService {
    private final ChatRoomRepositoryImpl chatRoomRepository;

    public List<ChatRoom> findAllRoom() {
        // 채팅방 생성순서 최근 순으로 반환
        List<ChatRoom> findRooms = chatRoomRepository.findAll();
//        Collections.reverse(findRooms);
        return findRooms;
    }

    //채팅방 생성
    public ChatRoom createChatRoom(String name) {
        //생성
        ChatRoom chatRoom = ChatRoom.create(name);
        //DB저장
        chatRoomRepository.save(chatRoom);
        return chatRoom;
    }

    public int delChatRoom(String _id) {
        try {
            chatRoomRepository.deleteById(_id);
        } catch (Exception e) {
            log.info("방 삭제 실패!!!");
            return 0;
        }
        return 1;
    }

    public void findRooms(String username) {
        chatRoomRepository.findBy(username);
    }
}
