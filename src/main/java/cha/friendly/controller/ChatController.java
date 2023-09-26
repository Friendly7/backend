package cha.friendly.controller;

import cha.friendly.handler.ChatRoom;
import cha.friendly.handler.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@Slf4j
public class ChatController {
    private final ChatService chatService;

    @PostMapping("/chat")
    public ChatRoom createRoom(@RequestBody String name) {
        log.info(name);
        return chatService.createRoom(name);
    }

    @GetMapping("/chat")
    public List<ChatRoom> findAllRoom() {
        return chatService.findAllRoom();
    }
}
