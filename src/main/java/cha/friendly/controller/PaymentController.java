package cha.friendly.controller;

import cha.friendly.domain.PaymentD;
import cha.friendly.domain.PaymentMethod;
import cha.friendly.domain.PaymentStatus;
import cha.friendly.service.MemberService;
import cha.friendly.service.PayService;
import cha.friendly.service.UpdatePaymentDto;
import com.siot.IamportRestClient.exception.IamportResponseException;
import com.siot.IamportRestClient.request.CancelData;
import com.siot.IamportRestClient.request.PrepareData;
import com.siot.IamportRestClient.response.Payment;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import org.hibernate.sql.Update;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.Locale;
import java.util.Map;

@Controller
@Slf4j
@Getter @Setter
public class PaymentController {

    private final MemberService memberService;

    @Autowired
    private PayService payService;
    private IamportClient api;
    public PaymentController(MemberService memberService) {
        this.memberService = memberService;
        // REST API 키와 REST API secret 를 아래처럼 순서대로 입력한다.
        this.api = new IamportClient("1073828412600238","FthThbIht5OQgn0xGP0HuUlnT5Jz2aO6FJa84T7emIuYg3k39AsL8PMD9jQmIvkl3wCLU2pkwWy6LoUC");
    }

    @GetMapping("/pay")
    public String paymentForm() {
        return "payments/payment";
    }

    @PostMapping("/saveMercantUid") //merchantUid db 저장
    public void saveMerUid(@RequestParam Map<String, Object> map) {
        PaymentD paymentD = new PaymentD();
        paymentD.setMerchantUid((String) map.get("merchantUid"));
        payService.saveMerchantUid(paymentD);
    }
    /**
     * 사전검증 데이터 넣기
     */
    @PostMapping("/payments/prepare")
    @ResponseBody
    public int postPrepare(@RequestBody Map<String, Object> map) throws IamportResponseException, IOException {
        BigDecimal amount = new BigDecimal(map.get("amount").toString());
        String merchant_uid = map.get("merchant_uid").toString();
        PrepareData prepareData = new PrepareData(merchant_uid, amount);
        return api.postPrepare(prepareData).getCode();
    }

    /**
     * 사전검증 조회
//     */
//    @GetMapping("/payments/prepare/{merchant_uid}")
//    @ResponseBody
//    public int getPrepare(@PathVariable("merchant_uid") String merchant_uid) throws IamportResponseException, IOException {
//        int code = api.getPrepare(merchant_uid).getCode();
//        log.info(String.valueOf(code));
//        return code;
//    }

    /**
     * 사전검증 조회 (직접)
     */
    @GetMapping("/payments/prepare/{merchant_uid}")
    @ResponseBody
    public JSONObject beforePaySelect(@PathVariable("merchant_uid") String merchant_uid) throws IamportResponseException, IOException, ParseException {
        String token = api.getAuth().getResponse().getToken();
        String result = payService.selectPayment(token, merchant_uid);
        JSONParser parser = new JSONParser();
        JSONObject jsonObject = (JSONObject) parser.parse(result);
        jsonObject = (JSONObject) jsonObject.get("response");
        return jsonObject;
    }

    /**
     * 사후검증
     */
    @ResponseBody
    @PostMapping("/verifyIamport/{imp_uid}")
    public Payment paymentByImpUid(Model model
            , Locale locale
            , HttpSession session, @PathVariable(value = "imp_uid") String imp_uid) throws IamportResponseException, IOException {
        Payment paymentIamportResponse = api.paymentByImpUid(imp_uid).getResponse();
        return paymentIamportResponse;
    }
    /**
     * 결제 내역 DB저장
     */
    @PostMapping("/paySuccess/{imp_uid}")
    public String savePayment(@PathVariable(value="imp_uid") String imp_uid) throws IamportResponseException, IOException {
        log.info("impuid" + imp_uid);
        Payment response = api.paymentByImpUid(imp_uid).getResponse();
        UpdatePaymentDto PaymentDto = new UpdatePaymentDto();
        PaymentDto.setAmount(Integer.parseInt(String.valueOf(response.getAmount())));
        PaymentDto.setBuyer((response.getBuyerName()));
        PaymentDto.setItemName(response.getName());
        PaymentDto.setStatus(PaymentStatus.valueOf(response.getStatus().toUpperCase()));
        PaymentDto.setMerchantUid(response.getMerchantUid());
        PaymentDto.setMethod(PaymentMethod.valueOf(response.getPayMethod().toUpperCase()));
        PaymentDto.setPaidAt(String.valueOf(response.getPaidAt()));
        payService.savePayment(PaymentDto);
        return "payments/paymentList";
    }


    /**
     * 결제 취소
     */
    @ResponseBody
    @PostMapping("/payments/cancel")
    public Payment paymentCancelByImpUid(Model model
            , Locale locale
            , HttpSession session, @PathVariable(value = "merchant_uid") String uid,
                                @PathVariable(value="amount") BigDecimal amount ) throws IamportResponseException, IOException {
        CancelData cancelData = new CancelData(uid, false, amount);
        Payment response = api.cancelPaymentByImpUid(cancelData).getResponse();
        log.info(String.valueOf(response));
        return response;
    }

}





//    /**
//     * 사전검증 데이터 저장
//     */
//    @PostMapping("/payments/prepare")
//    @ResponseBody
//    public void beforePay(@RequestBody Map<String, Object> map) throws IamportResponseException, IOException, SQLException {
//        String token = String.valueOf(api.getAccessToken());
//        String response = payService.verification(token,map.get("merchant_uid").toString(), map.get("amount").toString());
//    }

