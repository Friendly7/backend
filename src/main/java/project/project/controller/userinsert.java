package project.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import project.project.domain.Adviceuser;
import project.project.domain.User;
import project.project.repository.AdviceUserCRUDRepository;
import project.project.repository.UserCRUDRepository;

@Controller
public class userinsert{
    @Autowired
    UserCRUDRepository userCRUDRepository;
    @Autowired
    AdviceUserCRUDRepository adviceUserCRUDRepository;

    @PostMapping(value = "/insert1")public String insert1(@RequestParam(value = "insertid")String id,
                                                          @RequestParam(value = "insertpw")String pw,
                                                          @RequestParam(value = "insertname")String name){
        User user = new User();
        user.setUser_id(id);
        user.setPassword(pw);
        user.setName(name);
        userCRUDRepository.save(user);
        return "redirect:/insertResult";
    }

    @PostMapping(value = "/insert2")public String insert2(@RequestParam(value = "insertid")String id,
                                                          @RequestParam(value = "insertpw")String pw,
                                                          @RequestParam(value = "insertname")String name,
                                                          @RequestParam(value = "insertcategory")String category){
        Adviceuser adviceUser = new Adviceuser();
        adviceUser.setUser_id(id);
        adviceUser.setPassword(pw);
        adviceUser.setName(name);
        adviceUser.setCategory(category);
        adviceUserCRUDRepository.save(adviceUser);
        return "redirect:/insertResult";
    }


}
