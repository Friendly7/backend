package cha.friendly.controller;

import cha.friendly.domain.Address;
import cha.friendly.domain.Location;
import cha.friendly.domain.Member;
import cha.friendly.service.LocationService;
import cha.friendly.service.MemberService;
import cha.friendly.session.SessionConst;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttribute;

@Controller
@RequiredArgsConstructor
public class LocationController {
    private final MemberService memberService;

    @GetMapping("/map")
    public String locationAuthForm(Model model) {
        model.addAttribute("locationForm", new LocationForm());
        return "location/map";
    }

    @PostMapping("/map")
    public String locationAuth(LocationForm form,
                               @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member member) {
//        Location location = new Location();
//        location.setName(form.getAddress());
//
//        locationService.saveLocation(location);
        String[] addressDetail = form.getAddress().split(" ");
        Address address = new Address(addressDetail[0], addressDetail[1], addressDetail[2]);

        memberService.updateLocation(member.getId(), address);
        return "redirect:/";
    }
}
