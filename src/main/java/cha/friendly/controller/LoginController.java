package cha.friendly.controller;

import cha.friendly.controller.form.LoginForm;
import cha.friendly.domain.Member;
import cha.friendly.service.LoginService;
import cha.friendly.session.SessionConst;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RestController
@Slf4j
@RequiredArgsConstructor
public class LoginController {
    private final LoginService loginService;

    @PostMapping("/login")
    public String loginV3(@RequestBody LoginForm form, HttpServletRequest request) {
        log.info("id:"+ form.getEmail()+ " pw:"+form.getPassword());
        Member loginMember = loginService.login(form.getEmail(), form.getPassword());
        if (loginMember == null) return "fail";
        if (loginMember.getIs_blocked()==1) return "ban";
        //성공. 세션이 있으면 있는 세션 반환, 없으면 신규 세션 생성
        HttpSession session = request.getSession();
        session.setAttribute(SessionConst.LOGIN_MEMBER, loginMember);
        return "success";
    }

    @PostMapping("/logout")
    public String logoutV3(HttpServletRequest request) {
        //세션을 삭제한다.
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        return "logout";
    }

    @GetMapping("/checkSession")
    public String checkSession(HttpSession session) {
        // 세션에 사용자 정보가 있는지 확인하거나 다른 세션 상태 체크 로직을 수행
        if (session.getAttribute(SessionConst.LOGIN_MEMBER) != null) {
            // 사용자가 로그인한 경우
            return "authenticated";
        } else {
            return "not_authenticated";
        }
    }

    private void expireCookie(HttpServletResponse response, String cookieName) {
        Cookie cookie = new Cookie(cookieName, null);
        cookie.setMaxAge(0);
        response.addCookie(cookie);
    }
}


//    @PostMapping("/login")
//    public String login(@Valid @ModelAttribute LoginForm form, BindingResult bindingResult, HttpServletResponse response) {
//        if (bindingResult.hasErrors()) {
//            return "login/loginForm";
//        }
//        Member loginMember = loginService.login(form.getLoginId(),
//                form.getPassword()); log.info("login? {}", loginMember);
//        if (loginMember == null) {
//            bindingResult.reject("loginFail", "아이디 또는 비밀번호가 맞지 않습니다.");
//            return "login/loginForm";
//        }
//        //쿠키 시간 정보를 안주면 세션 쿠키
//        Cookie idCookie = new Cookie("memberId", String.valueOf(loginMember.getId()));
//        response.addCookie(idCookie);
//
//        //로그인 성공 처리 TODO
//        return "redirect:/";
//    }

//    @PostMapping("/logout")
//    public String logout(HttpServletResponse response) {
//        expireCookie(response, "memberId");
//        return "redirect:/";
//    }
