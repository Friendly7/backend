package cha.friendly.controller;

import cha.friendly.domain.Location;
import cha.friendly.service.LocationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor
public class HomeController {
    private final LocationService locationService;

    @GetMapping("/")
    public String locationAuthForm(Model model) {
        model.addAttribute("locationForm", new LocationForm());
        return "kakaoMap2";
    }

    @PostMapping("/")
    public String locationAuth(LocationForm form) {
        Location location = new Location();
        location.setName(form.getAddress());

        locationService.join(location);
        return "userLocation";
    }
}
