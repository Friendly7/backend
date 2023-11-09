package cha.friendly.domain.Dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChatReqFriend {
    private String userName;
    private String roomName;
    private String maximum;
    private String passwd;
}
