package project.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import project.project.domain.Adviceuser;
import project.project.domain.User;
import project.project.repository.AdviceUserCRUDRepository;
import project.project.repository.UserCRUDRepository;

@Controller
public class userdelete {
    @Autowired
    UserCRUDRepository userCRUDRepository;
    @Autowired
    AdviceUserCRUDRepository adviceUserCRUDRepository;

    @PostMapping(value = "/delete1")public String delete1(@RequestParam(value = "id")Long id){
        User user = new User();
        user = userCRUDRepository.findByUser(id);
        userCRUDRepository.delete(user);
        return "redirect:/deleteResult";
    }
    @PostMapping(value = "/delete2")public String delete2(@RequestParam(value = "id")Long id){
        Adviceuser user = new Adviceuser();
        user = adviceUserCRUDRepository.findByUser(id);
        adviceUserCRUDRepository.delete(user);
        return "redirect:/deleteResult";
    }
}
