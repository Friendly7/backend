package project.project.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import project.project.domain.Adviceuser;
import project.project.domain.User;
import project.project.repository.AdviceUserLoginRepository;
import project.project.repository.UserLoginRepository;
@Controller
public class logincontroller {
    @Autowired
    AdviceUserLoginRepository adviceUserLoginRepository;
    @Autowired
    UserLoginRepository userLoginRepository;

    @PostMapping(value = "/login") public String login(@RequestParam(value = "loginID") String id,
                                                       @RequestParam(value = "loginPW") String pw,
                                                       Model model){
        String userLoginResult = userLoginRepository.findByUserID(pw);
        String adviceUserLoginResult = adviceUserLoginRepository.findByAdviceUserID(pw);
        if (id.equals(userLoginResult)) {
            User result = userLoginRepository.findByUser(userLoginResult);
            model.addAttribute("loginData", result);
            if(userLoginResult.equals("admin")) {
                return "/adminPage";
            }
            return "/loginResult";
        }
        if (id.equals(adviceUserLoginResult)) {
            Adviceuser result = adviceUserLoginRepository.findByAdviceUser(adviceUserLoginResult) ;
            model.addAttribute("loginData", result);
            return "/loginResult2";
        }
        return "/main";
    }
}
