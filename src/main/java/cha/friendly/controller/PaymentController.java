package cha.friendly.controller;

import cha.friendly.domain.PaymentD;
import cha.friendly.service.MemberService;
import com.siot.IamportRestClient.exception.IamportResponseException;
import com.siot.IamportRestClient.response.IamportResponse;
import com.siot.IamportRestClient.response.Payment;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

@Controller
@Slf4j
public class PaymentController {

    private final MemberService memberService;
    private IamportClient api;
    public PaymentController(MemberService memberService) {
        this.memberService = memberService;
        // REST API 키와 REST API secret 를 아래처럼 순서대로 입력한다.
        this.api = new IamportClient("3452420157053319","DXI0XVlgpUwS8B3Hj9cFxozTrGn6CXmfU4fS0B8pvFhDglkzvxe3VNXnukt7hPmcUC4UddkJSCn9XIJt");
    }

    @GetMapping("/pay")
    public String paymentForm() {
        return "payments/payment";
    }

    @PostMapping("/saveMercantUid") //merchantUid db 저장
    public void saveMerUid(@RequestParam Map<String, Object> map) {
        PaymentD paymentD = new PaymentD();
        paymentD.setMerchantUid((String) map.get("merchantUid"));
        memberService.saveUid(paymentD);
    }
    @ResponseBody
    @PostMapping("/verifyiamport/{imp_uid}")
    public IamportResponse<Payment> paymentByImpUid(Model model
            , Locale locale
            , HttpSession session, @PathVariable(value = "imp_uid") String imp_uid) throws IamportResponseException, IOException {

        return api.paymentByImpUid(imp_uid);
    }

    @PostMapping("/payments/prepare")
    @CrossOrigin(origins = "https://api.iamport.kr/payments/prepare")
    public String beforePay(@RequestParam Map<String, Object> map) {
        return "redirect:https://api.iamport.kr/payments/prepare";
    }


    @PostMapping(value="/paySuccess")
    public void paySuccess(String amount,String userEamil, String merchant_uid) {
        int paidAmount = Integer.parseInt(amount);
        Map<String, Object> map = new HashMap<>();
        map.put("email", userEamil);
        map.put("amount", paidAmount);
        memberService.paymentSave(map);
    }
}