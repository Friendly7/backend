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

    private Map<String, ChatRoom> chatRoomMap;

    @PostConstruct
    private void init() {
        chatRoomMap = new LinkedHashMap<>();
    }

//    public String findRoom(String name) {
//        ObjectMapper objectMapper = new ObjectMapper();
//        try {
//            if (chatRoomRepository.findAll() == null) {
//                log.info("[Service] user name : not exist!!");
//                return String.format("user name :  not exist!!");
//            } else {
//                return objectMapper.writeValueAsString(chatRoomRepository.findAll());
//            }
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();
//            return "ERROR";
//        }
//    }

    public List<ChatRoom> findAllRoom() {
        // 채팅방 생성순서 최근 순으로 반환
        List chatRooms = new ArrayList<>(chatRoomMap.values());
        Collections.reverse(chatRooms);
        return chatRooms;
    }

    public ChatRoom findRoomById(String id) {
        return chatRoomMap.get(id);
    }

    //채팅방 생성
    public ChatRoom createChatRoom(String name) {
        //생성
        ChatRoom chatRoom = ChatRoom.create(name);
        chatRoomMap.put(chatRoom.getRoomId(), chatRoom);
        //DB저장
        chatRoomRepository.save(chatRoom);
        return chatRoom;
    }
}
