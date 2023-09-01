package project.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class homecontroller {
    @GetMapping(value = "/")
    public  String main () {return "/main";}

    @GetMapping(value = "/userinsert1")
    public  String userinsert1() {return "/userinsert1";}

    @GetMapping(value = "/userinsert2")
    public  String userinsert2() {return "/userinsert2";}

    @GetMapping(value = "/insertResult")
    public  String insert_result() {return "/main";}

    @GetMapping(value = "/loginPage")
    public  String login_page() {return "/loginPage";}

    @GetMapping(value = "/loginResult")
    public  String login_result() {return "/loginResult";}

    @GetMapping(value = "/loginResult2")
    public  String login_result2() {return "/loginResult2";}

    @GetMapping(value = "/adminPage")
    public  String admin_page() {return "/adminPage";}

    @GetMapping(value = "/userDelete1")
    public  String userDelete1() {return "/userDelete1";}

    @GetMapping(value = "/userDelete2")
    public  String userDelete2() {return "/userDelete2";}

    @GetMapping(value = "/userUpdate1")
    public  String userUpdate1() {return "/userUpdate1";}

    @GetMapping(value = "/userUpdate2")
    public  String userUpdate2() {return "/userUpdate2";}

    @GetMapping(value = "/deleteResult")
    public  String deleteResult() {return "/adminPage";}

    @GetMapping(value = "/updateResult")
    public  String updateResult() {return "/adminPage";}

    @GetMapping(value = "/adviceUserList")
    public  String adviceUserList() {return "/adviceUserList";}

    @GetMapping(value = "/userList")
    public  String userList() {return "/userList";}

    @GetMapping(value = "/adviceRequestPage1")
    public  String adviceRequestPage1() {return "/adviceRequestPage1";}

    @GetMapping(value = "/adviceRequestPage2")
    public  String adviceRequestPage2() {return "/adviceRequestPage2";}

}

