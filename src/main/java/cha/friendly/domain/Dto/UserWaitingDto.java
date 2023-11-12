package cha.friendly.domain.Dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.RequestParam;

@Getter
@Setter
public class UserWaitingDto {
    private String request_id;
    private String popUp;
    private String matmentorname;
}