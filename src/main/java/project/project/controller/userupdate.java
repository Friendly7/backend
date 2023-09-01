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
public class userupdate {
    @Autowired
    UserCRUDRepository userCRUDRepository;
    @Autowired
    AdviceUserCRUDRepository adviceUserCRUDRepository;

    @PostMapping(value = "/update1")public String update1(@RequestParam(value = "id")Long id,
                                                          @RequestParam(value = "user_id")String userId,
                                                          @RequestParam(value = "password")String pw,
                                                          @RequestParam(value = "name")String name){
            User user = userCRUDRepository.findByUser(id);
        user.setUser_id(userId);
        user.setPassword(pw);
        user.setName(name);
        userCRUDRepository.save(user);
        return "redirect:/updateResult";
    }
    @PostMapping(value = "/update2")public String update2(@RequestParam(value = "id")Long id,
                                                          @RequestParam(value = "user_id")String userId,
                                                          @RequestParam(value = "password")String pw,
                                                          @RequestParam(value = "name")String name,
                                                          @RequestParam(value = "category")String category){
        Adviceuser user = adviceUserCRUDRepository.findByUser(id);
        user.setUser_id(userId);
        user.setPassword(pw);
        user.setName(name);
        user.setCategory(category);
        adviceUserCRUDRepository.save(user);
        return "redirect:/updateResult";
    }
}
