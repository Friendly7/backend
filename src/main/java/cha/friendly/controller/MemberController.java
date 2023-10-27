package cha.friendly.controller;

import cha.friendly.controller.form.MemberForm;
import cha.friendly.domain.Member;
import cha.friendly.domain.enumP.Role;
import cha.friendly.service.MemberService;
import cha.friendly.session.SessionConst;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class MemberController {
    private final MemberService memberService;

    @ModelAttribute("roles")
    public Role[] roles() {
        return Role.values(); // 해당 ENUM의 모든 정보를 배열로 반환한다.
    }

//    @GetMapping("/members/new")
//    public String createForm(Model model) {
//        model.addAttribute("memberForm", new MemberForm());
//        return "members/createMemberForm";
//    }

    @PostMapping("/checkEmail")
    public String checkEmail(@RequestBody String email) {
        String data = email.replace("\"", "");
        boolean isEmailUnique = memberService.isEmailUnique(data);
        if (isEmailUnique) {
            return "available";
        } else {
            return "duplicate";
        }
    }

    @GetMapping("/member/findByName")
    public String findByName(@RequestParam(value = "name") String name){
        List<Member> byName = memberService.findByName(name);
        if(byName.size()!=0) {
            return "exist";
        }
        return "available";
    }

    @PostMapping("/members/new")
    public String create(@Valid MemberForm form,//valid를 하면 MemberForm 클래스의 notEmpty를 적용시킨다.
                         BindingResult result) {
        if (result.hasErrors()) {
            return "fail";
        }
        Member member = new Member();
        member.setName(form.getName());
        member.setEmail(form.getEmail());
        member.setPassword(form.getPassword());
        member.setPhoneNumber(form.getPhoneNumber());
        member.setRole(form.getRole());

        //memberService.join(member);
        return "redirect:/";
    }

    @GetMapping("/members")
    public String list(Model model, @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
        //세션에 회원 데이터가 없으면 home
        if (loginMember == null) {
            return "home";
        }
        //세션이 유지되면 로그인으로 이동
        List<Member> members = memberService.findMembers();
        model.addAttribute("members", members);
        model.addAttribute("member", loginMember);
        return "members/memberList";
    }

    @GetMapping("/members/edit")
    public String editForm(Model model, @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
        MemberForm memberForm = new MemberForm();
        memberForm.setName(loginMember.getName());
        memberForm.setEmail(loginMember.getEmail());
        memberForm.setPhoneNumber(loginMember.getPhoneNumber());
        memberForm.setPassword(loginMember.getPassword());
        model.addAttribute("member", loginMember);
        model.addAttribute("memberForm", memberForm);
        return "members/editMemberForm";
    }

    @PostMapping("/members/edit")
    public String edit(@Valid MemberForm form, BindingResult result, @RequestParam String id) {
        if (result.hasErrors()) {
            return "members/editMemberForm";
        }
        Member member = memberService.findOne(Long.valueOf(id));

        member.setName(form.getName());
        member.setEmail(form.getEmail());
        member.setPassword(form.getPassword());
        member.setPhoneNumber(form.getPhoneNumber());
        System.out.println(member.getName());
        memberService.update(member);
        return "redirect:/";
    }

    @PostMapping("/members/ban")
    @ResponseBody
    public String banUser(@RequestBody Member member) {
        memberService.ban(member);
        return member.getName();
    }
    @PostMapping("/members/ban/cancel")
    @ResponseBody
    public String cancelBanUser(@RequestBody Member member) {
        memberService.cancelBan(member);
        return member.getName();
    }
}
