package cha.friendly.controller;

import cha.friendly.domain.Address;
import cha.friendly.domain.Role;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Embedded;
import javax.validation.constraints.NotEmpty;

@Getter @Setter
@NotEmpty(message = "모두 입력해야합니다.")
public class MemberForm {
    private String name; //nickname . 중복 불가
    private String email; //계정 id . 중복 불가
    private String password;
    private String phoneNumber; //1인 1번호. 중복 불가
    private Role role; // COUNSELOR, MENTOR, USER
}
