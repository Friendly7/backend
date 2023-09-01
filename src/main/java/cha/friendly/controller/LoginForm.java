package cha.friendly.controller;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
@Getter @Setter
public class LoginForm {
    private String loginId;

    private String password;
}
