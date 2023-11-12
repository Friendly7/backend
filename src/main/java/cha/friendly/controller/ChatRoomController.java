package cha.friendly.controller;

import cha.friendly.domain.ChatRoom;
import cha.friendly.domain.Dto.ChatReqFriend;
import cha.friendly.domain.Dto.ChatReqName;
import cha.friendly.domain.Member;
import cha.friendly.service.ChatRoomService;
import cha.friendly.session.SessionConst;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

@RequiredArgsConstructor
@RestController
@RequestMapping("/chat")
@Slf4j
public class ChatRoomController {
    private final ChatRoomService chatRoomService;

//    관리자 방 생성(테스트용)
//    @GetMapping("/room")
//    public String rooms(Model model, @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
//        //세션에 회원 데이터가 없으면 home
//        if (loginMember == null) {
//            return "home";
//        }
//        model.addAttribute("member", loginMember);
//        model.addAttribute("user1", "tester1");
//        model.addAttribute("user2", "tester2");
//        //세션이 유지되면 로그인으로 이동
//        return "/chat/admin";
//    }

    // 채팅방 생성
    @PostMapping("/room")
    public ChatRoom createRoom(@RequestBody ChatReqName chatReqName,
                               @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
        ChatRoom chatRoom = chatRoomService.createChatRoom(chatReqName, loginMember.getName());
        return chatRoom;
    }
    // 채팅방 생성
    @PostMapping("/room/friend")
    public ChatRoom createFriendRoom(@RequestBody ChatReqFriend chatReqFriend) {
        ChatRoom friendRoom = chatRoomService.findFriendRoom(chatReqFriend.getRoomName());
        if(friendRoom==null) {
            ChatRoom chatRoom = chatRoomService.createChatFriendRoom(chatReqFriend);
            return chatRoom;
        }
        return null;
    }

    //채팅방 리스트(user) 본인과 연관된 채팅방 리스트를 출력한다.
    @GetMapping("/room/user")
    public ConcurrentHashMap<Object, ChatRoom> userRoomList(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
        //세션에 회원 데이터가 없으면 home
        if (loginMember == null) {
            return null;
        }
        try{
            ConcurrentHashMap<Object, ChatRoom> rooms = chatRoomService.findRooms(loginMember.getName());
            return rooms;
        } catch (Exception e){
            return null;
        }
    }
    @GetMapping("/room/friend/ChatRoomList")
    public List<ChatRoom> friendRoom(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
        //세션에 회원 데이터가 없으면 home
        if (loginMember == null) {
            return null;
        }
        //채팅방 목록
        List<ChatRoom> allFriendRoom = chatRoomService.findAllFriendRoom();
        return allFriendRoom;
    }

    //채팅방 삭제
    @PostMapping("/room/delete")
    public int delRoom(@RequestParam String _id) {
        return chatRoomService.delChatRoom(_id);
    }

    // 채팅방 입장 화면
//    @GetMapping("/room/enter/{roomId}")
//    public String roomDetail(Model model, @PathVariable String roomId,
//                             @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
//        //세션에 회원 데이터가 없으면 home
//        if (loginMember == null) {
//            return "home";
//        }
//        model.addAttribute("member", loginMember);
//        model.addAttribute("roomId", roomId);
//        ChatRoom byRoomId = chatRoomService.findByRoomId(roomId);
//        if (loginMember.getName().equals(byRoomId.getUsername1())) { //이름 같으면
//            model.addAttribute("roomName", byRoomId.getRoomName1());
//        } else {
//            model.addAttribute("roomName", byRoomId.getRoomName2());
//        }
//        return "/chat/roomDetail";
//    }

    // 모든 채팅방 목록 반환
    @GetMapping("/rooms")
    public String room(Model model, @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
        //세션에 회원 데이터가 없으면 home
        if (loginMember == null) {
            return "home";
        }
        model.addAttribute("member", loginMember);
        //채팅방 목록
        List<ChatRoom> allRoom = chatRoomService.findAllRoom();
        model.addAttribute("roomList", allRoom);
        return "/chat/roomList";
    }

    //특정 채팅방 조회
    @GetMapping("/room/{roomId}")
    public ChatRoom roomInfo(@PathVariable String roomId) {
        return chatRoomService.findByRoomId(roomId);
    }
}
