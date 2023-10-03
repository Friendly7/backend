package cha.friendly.controller;

import cha.friendly.domain.ChatRoom;
import cha.friendly.domain.Member;
import cha.friendly.service.ChatRoomService;
import cha.friendly.session.SessionConst;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@Controller
@RequestMapping("/chat")
@Slf4j
public class ChatRoomController {
    private final ChatRoomService chatRoomService;

    // 채팅 리스트 화면
    @GetMapping("/room")
    public String rooms(Model model, @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
        //세션에 회원 데이터가 없으면 home
        if (loginMember == null) {
            return "home";
        }
        model.addAttribute("member", loginMember);
        //세션이 유지되면 로그인으로 이동
        return "/chat/admin";
    }
    // 채팅방 생성
    @PostMapping("/room")
    @ResponseBody
    public ChatRoom createRoom(@RequestParam String name) {
        ChatRoom chatRoom = chatRoomService.createChatRoom(name);

        return chatRoom;
    }
    //채팅방 삭제
    @PostMapping("/room/delete")
    @ResponseBody
    public int delRoom(@RequestParam String _id) {
        return chatRoomService.delChatRoom(_id);
    }

    // 채팅방 입장 화면
    @GetMapping("/room/enter/{roomId}")
    public String roomDetail(Model model, @PathVariable String roomId) {
        model.addAttribute("roomId", roomId);
        return "/chat/roomDetail";
    }

    // 특정 채팅방 조회
//    @GetMapping("/room/{roomId}")
//    @ResponseBody
//    public ChatRoom roomInfo(@PathVariable String roomId) {
//        return chatRoomService.findRoomById(roomId);
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
}