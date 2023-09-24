package cha.friendly.controller;

import cha.friendly.domain.Address;
import cha.friendly.domain.Location;
import cha.friendly.domain.Member;
import cha.friendly.service.LocationService;
import cha.friendly.service.MemberService;
import cha.friendly.session.SessionConst;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequiredArgsConstructor
@Slf4j
public class LocationController {
    private final MemberService memberService;

    @GetMapping("/map")
    public String locationAuthForm(Model model,
                                   @RequestParam(value = "location", required = false)String location) {
        model.addAttribute("locationForm", new LocationForm());
        model.addAttribute("location", location);
        return "location/map";
    }

    @PostMapping("/map")
    public String saveLocation(LocationForm form,
                               @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member member,
                               RedirectAttributes redirect) {
        String[] addressDetail = form.getAddress().split(" ");
        Address address = new Address(addressDetail[0], addressDetail[1], addressDetail[2]);
        //위치 저장 로직
        memberService.updateLocation(member.getId(), address);
        //과거 인증 위치 있으면 가져오고 없으면 스킵
        //위치 조회 로직
        try{
            Address location = memberService.getLocation(member.getId());
            log.info("id는"+member.getId()+"  위치는 "+location.getCity());
            if (location == null) {
                redirect.addAttribute("location", "");
            }else {
                String userAddress = location.getCity()+" "+location.getDong()+" "+location.getGu();
                log.info(userAddress);
                redirect.addAttribute("location", userAddress);
            }
        } catch (Exception e) {
            log.info("err : 과거 인증한 위치가 없습니다.");
        }
        return "redirect:/map";
    }
}
