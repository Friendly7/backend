package project.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import project.project.domain.Adviceuser;
import project.project.domain.User;
import project.project.repository.AdviceUserCRUDRepository;
import project.project.repository.UserCRUDRepository;

import java.util.List;

@Controller
public class usercontroller {
    @Autowired
    UserCRUDRepository userCRUDRepository;
    @Autowired
    AdviceUserCRUDRepository adviceUserCRUDRepository;

    @GetMapping(value = "/List1")public String List1(Model model){
        List<User> user = userCRUDRepository.findAll();
        model.addAttribute("userList", user);
        return "/userList";
    }

    @GetMapping(value = "/Lsit2")public String List2(Model model){
        List<Adviceuser> adviceUser = adviceUserCRUDRepository.findAll();
        model.addAttribute("aUserList", adviceUser);
        return "/adviceUserList";
    }

}
