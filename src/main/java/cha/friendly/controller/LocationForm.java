package cha.friendly.controller;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LocationForm {
    //@NotEmpty(message = "회원 이름은 필수입니다")
    private String address;
}