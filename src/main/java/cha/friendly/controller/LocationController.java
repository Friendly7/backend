package cha.friendly.controller;

import cha.friendly.controller.form.LocationForm;
import cha.friendly.domain.Address;
import cha.friendly.domain.Member;
import cha.friendly.service.MemberService;
import cha.friendly.session.SessionConst;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/map")
public class LocationController {
    private final MemberService memberService;

    @PostMapping("/saveLocation")
    public String saveLocation(@RequestBody LocationForm form,
                               @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member member) {
        if (member == null) {
            return "home";
        }
        //세션이 유지되면
        Address address = new Address(form.getCity(), form.getGu(), form.getDong());
        System.out.println("address = " + address.getCity());
        try{
            memberService.updateLocation(member.getId(), address);
            return "save";
        }catch (Exception e) {
            return "fail";
        }
    }
}

//@GetMapping("/map")
//    public String locationAuthForm(Model model,
//                                   @RequestParam(value = "location", required = false)String location) {
//        model.addAttribute("locationForm", new LocationForm());
//        model.addAttribute("location", location);
//        return "location/map";
//    }
