package cha.friendly.service;

import cha.friendly.domain.ChatRoom;
import cha.friendly.repository.ChatRoomRepositoryImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

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
    public ChatRoom createChatRoom(String defaultRoomName) {
        String[] username = defaultRoomName.split(",");
        //생성
        ChatRoom chatRoom = ChatRoom.create(defaultRoomName);
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

    public ConcurrentHashMap<Object, ChatRoom> findRooms(String username) {
        List<ChatRoom> byUsername1 = chatRoomRepository.findByUsername1(username);
        List<ChatRoom> byUsername2 = chatRoomRepository.findByUsername2(username);
        ConcurrentHashMap<Object, ChatRoom> map = new ConcurrentHashMap<>();
        int i =1;
        if(byUsername1!=null) {
            for (ChatRoom room : byUsername1) {
                map.put(i,room);
                i++;
            }
        }
        if (byUsername2 != null) {
            for (ChatRoom room : byUsername2) {
                map.put(i, room);
                i++;
            }
        }
        return map;
    }
    public ConcurrentHashMap<Object, String> findRooms2(String username) {
        List<ChatRoom> byUsername1 = chatRoomRepository.findByUsername1(username);
        List<ChatRoom> byUsername2 = chatRoomRepository.findByUsername2(username);
        ConcurrentHashMap<Object, String> map = new ConcurrentHashMap<>();
        int i =1;
        if(byUsername1!=null) {
            for (ChatRoom room : byUsername1) {
                map.put(i, room.getRoomName1());
                i++;
            }
        }
        for (ChatRoom room : byUsername2) {
            map.put(i, room.getRoomName2());
            i++;
        }
        return map;
    }

    public ChatRoom findByRoomId(String roomId) {
        return chatRoomRepository.findByRoomId(roomId);
    }
}
