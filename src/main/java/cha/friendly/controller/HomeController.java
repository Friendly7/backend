package cha.friendly.controller;

import cha.friendly.domain.Member;
import cha.friendly.service.LoginService;
import cha.friendly.session.SessionConst;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.SessionAttribute;

@Controller
@RequiredArgsConstructor
public class HomeController {
    private final LoginService loginService;

    @GetMapping("/link")
    public String linkHome(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember
                            ,Model model) {
        //세션이 유지되면 로그인으로 이동
        model.addAttribute("member", loginMember);
        return "link";
    }

    @GetMapping("/")
    public String homeLoginV3Spring(
            @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false)
            Member loginMember,
            Model model) {
        //세션에 회원 데이터가 없으면 home
        if (loginMember == null) {
            return "home";
        }
        //세션이 유지되면 로그인으로 이동
        model.addAttribute("member", loginMember);
        return "loginHome";
    }
}

