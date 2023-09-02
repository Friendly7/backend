package cha.friendly.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class PayController {

    @GetMapping("/pay")
    public String paylogic() {
        return "payments/payment";
    }

    @PostMapping("/userPay")
    @ResponseBody
    public String chargePoint(@RequestBody String imp_uid) {
        System.out.println("imp_uid = " + imp_uid);

        return "user/payment";
    }
}
