package cha.friendly.controller;

import com.siot.IamportRestClient.exception.IamportResponseException;
import com.siot.IamportRestClient.response.IamportResponse;
import com.siot.IamportRestClient.response.Payment;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/verifyIamport")
public class VerifyController {

    /** Iamport 결제 검증 컨트롤러 **/
    private final IamportClient iamportClient;

    // 생성자를 통해 REST API 와 REST API secret 입력
    public VerifyController(){
        this.iamportClient = new IamportClient("-",
                "-");
    }

    /** 프론트에서 받은 PG사 결괏값을 통해 아임포트 토큰 발행 **/
    @PostMapping("/{imp_uid}")
    public IamportResponse<Payment> paymentByImpUid(@PathVariable String imp_uid) throws IamportResponseException, IOException {
        log.info("paymentByImpUid 진입");
        return iamportClient.paymentByImpUid(imp_uid);
    }

//    @GetMapping("/pay")
//    public String paylogic() {
//        return "payments/payment";
//    }
//
//    @PostMapping("/payment/validate")
//    @ResponseBody
//    public Map chargePoint(@RequestBody ConcurrentHashMap<String, Object> map) {
//        Map result = new HashMap<String, Object>();
//        Object imp_uid = map.get("imp_uid");
//        Object merchant_uid = map.get("merchant_uid");
//        Object amount = map.get("amount");
//        result.put("imp_uid", imp_uid);
//        result.put("merchant_uid", merchant_uid);
//        result.put("amount", amount);
//
//        return result;
//    }
}
//@PathVariable(value = "imp_uid") String imp_uid