package project.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import project.project.domain.Advicerequest;
import project.project.domain.User;
import project.project.repository.AdviceRequestCRUDRepository;
import project.project.repository.UserCRUDRepository;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class adviceRequest {
    @Autowired
    UserCRUDRepository userCRUDRepository;
    @Autowired
    AdviceRequestCRUDRepository adviceRequestCRUDRepository;

    @PostMapping(value = "/adviceRequest1")public String adviceRequest1(@RequestParam(value = "name")String name, @RequestParam(value = "adviceTime")String adviceTime, @RequestParam(value = "onoffline")String onoffline, @RequestParam(value = "category")String category, @RequestParam(value = "professional")String professional, @RequestParam(value = "price")String price, Model model){
        User user = userCRUDRepository.findByNameUser(name);
        Advicerequest adviceRequest = new Advicerequest();
        adviceRequest.setUser_id(user.getId());
        adviceRequest.setUser_name(name);
        adviceRequest.setAdvice_time(adviceTime);
        adviceRequest.setOnoffline(onoffline);
        adviceRequest.setCategory(category);
        adviceRequest.setProfessional(professional);
        adviceRequest.setPrice(price);
        adviceRequestCRUDRepository.save(adviceRequest);
        model.addAttribute("id", adviceRequest.getRequest_id());
        return "/adviceRequestPage2";
    }
    @PostMapping(value = "/nextAdviceRequestPage") public  String nextAdviceRequestPage(Model model, Long id) {
        System.out.println(id);
        model.addAttribute("id", id);
        return "/adviceRequestPage2";}

    @PostMapping (value = "/adviceRequest2")public String adviceRequest1(@RequestParam(value = "one")String one, @RequestParam(value = "two")String two, @RequestParam(value = "three")String three, @RequestParam(value = "id")Long request_id){
        System.out.println(request_id);
        Advicerequest adviceRequest = adviceRequestCRUDRepository.findByRequest(request_id);
        adviceRequest.setOne(one);
        adviceRequest.setTwo(two);
        adviceRequest.setThree(three);
        adviceRequestCRUDRepository.save(adviceRequest);

        return "redirect:/loginResult";
    }

    @GetMapping (value = "/AdviceRequestLsit1")public String AdviceRequestLsit1(Model model){
        List<Advicerequest> advicerequest = adviceRequestCRUDRepository.findAll();
        model.addAttribute("requestList", advicerequest);
        return "/adviceRequestList";
    }

}
