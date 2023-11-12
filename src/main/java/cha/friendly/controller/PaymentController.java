package cha.friendly.controller;

import cha.friendly.controller.form.IamportClient;
import cha.friendly.domain.*;
import cha.friendly.domain.enumP.PaymentMethod;
import cha.friendly.domain.enumP.PaymentStatus;
import cha.friendly.service.MemberService;
import cha.friendly.service.PayService;
import cha.friendly.domain.Dto.UpdatePaymentDto;
import cha.friendly.session.SessionConst;
import com.siot.IamportRestClient.exception.IamportResponseException;
import com.siot.IamportRestClient.request.CancelData;
import com.siot.IamportRestClient.request.PrepareData;
import com.siot.IamportRestClient.response.Payment;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.math.BigDecimal;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.*;

@RestController
@Slf4j
@Getter @Setter
public class PaymentController {
    private PayService payService;
    private IamportClient api;

    private MemberService memberService;

    public PaymentController(PayService payService) {
        this.payService = payService;
        // REST API 키와 REST API secret 를 아래처럼 순서대로 입력한다.
        this.api = new IamportClient("1073828412600238", "FthThbIht5OQgn0xGP0HuUlnT5Jz2aO6FJa84T7emIuYg3k39AsL8PMD9jQmIvkl3wCLU2pkwWy6LoUC");
    }

    @GetMapping("/pay")
    public String payment(Model model, @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
        //세션에 회원 데이터가 없으면 home
        if (loginMember == null) {
            return "home";
        }
        //세션이 유지되면 로그인으로 이동
        String email = loginMember.getEmail();
        String name = loginMember.getName();
        String phoneNumber = loginMember.getPhoneNumber();
        log.info(email + " " + name + " " + phoneNumber);
        model.addAttribute("name", name);
        model.addAttribute("email", email);
        model.addAttribute("phoneNumber", phoneNumber);
        model.addAttribute("member", loginMember);
        return "payments/payment";
    }

//    @PostMapping("/saveMercantUid") //merchantUid db 저장
//    public void saveMerUid(@RequestParam Map<String, Object> map) {
//        PaymentD paymentD = new PaymentD();
//        paymentD.setMerchantUid((String) map.get("merchantUid"));
//        payService.saveMerchantUid(paymentD);
//    }

    /**
     * 사전검증 데이터 넣기
     */
    @PostMapping("/payments/prepare")
    @ResponseBody
    public int postPrepare(@RequestBody Map<String, Object> map) throws IamportResponseException, IOException {
        BigDecimal amount = new BigDecimal(map.get("amount").toString());
        String merchant_uid = map.get("merchant_uid").toString();
        PrepareData prepareData = new PrepareData(merchant_uid, amount);
        PaymentD paymentD = new PaymentD();
        paymentD.setMerchantUid(merchant_uid);
        paymentD.setOrderAt(ZonedDateTime.now(ZoneId.of("UTC")));
        payService.saveUid(paymentD);
        return api.postPrepare(prepareData).getCode();
    }

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
    @ResponseBody
    public String savePayment(@PathVariable("imp_uid") String imp_uid,
                              Model model,
                              RedirectAttributes redirect,
                              @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) throws IamportResponseException, IOException {
        log.info("impuid" + imp_uid);
        //uid로 조회한결제내역을 api에서 받아온 후 paymentD객체에 저장
        Payment response = api.paymentByImpUid(imp_uid).getResponse();
        PaymentD paymentD = makeUpdatePaymentDto(response);
        //저장한 paymentD객체를 읽어와서
        redirect.addAttribute("payment", paymentD.getMerchantUid());
        log.info("redirect에 전달하는 데이터(uid): " + paymentD.getMerchantUid());
        return paymentD.getMerchantUid();
    }

    @GetMapping("/payments/paymentDetail")
    public String payDetail(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember,
                            Model model, @RequestParam(value = "payment") String uid) {
        log.info("받은 데이터(uid): " + uid);
        Optional<PaymentD> findPayment = payService.findPaymentOne(uid);
        PaymentD payment = findPayment.orElseThrow(() -> new NoSuchElementException("findPayment is null!!"));

        //세션에 회원 데이터가 없으면 home
        if (loginMember == null) {
            return "home";
        }
        //세션이 유지되면 로그인으로 이동
        model.addAttribute("member", loginMember);
        model.addAttribute("payments", payment);
        return "payments/paymentDetail";
    }

    private PaymentD makeUpdatePaymentDto(Payment response) {
        UpdatePaymentDto PaymentDto = new UpdatePaymentDto();
        PaymentDto.setAmount(Integer.parseInt(String.valueOf(response.getAmount())));
        PaymentDto.setBuyer((response.getBuyerName()));
        PaymentDto.setItemName(response.getName());
        PaymentDto.setStatus(PaymentStatus.valueOf(response.getStatus().toUpperCase()));
        PaymentDto.setMerchantUid(response.getMerchantUid());
        PaymentDto.setMethod(PaymentMethod.valueOf(response.getPayMethod().toUpperCase()));
        PaymentDto.setBuyerEmail(response.getBuyerEmail());
        PaymentDto.setPaidAt(String.valueOf(response.getPaidAt()));
        return payService.savePayment(PaymentDto);
    }

    /**
     * 결제 취소
     */
    @ResponseBody
    @PostMapping("/payments/cancel")
    public Payment paymentCancelByImpUid(Model model
            , Locale locale
            , HttpSession session, @PathVariable(value = "merchant_uid") String uid,
                                         @PathVariable(value = "amount") BigDecimal amount) throws IamportResponseException, IOException {
        CancelData cancelData = new CancelData(uid, false, amount);
        Payment response = api.cancelPaymentByImpUid(cancelData).getResponse();
        log.info(String.valueOf(response));
        return response;
    }

    @PostMapping("/cash/convert")
    public String cashConvert(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember,
                              @RequestBody String amount) {
        loginMember.setPoint(loginMember.getPoint() - Integer.parseInt(amount.replace("=","")));

        Point point = new Point();
        point.setStatus("현금화");
        point.setHistory("-"+amount.replace("=",""));
        point.setMemberId(loginMember);
        payService.saveUsePoint(point);
        return String.valueOf(loginMember.getPoint());
    }

    @GetMapping("/point")
    public String getPoint(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
        if (loginMember == null) {
            return "home";
        }
        return String.valueOf(loginMember.getPoint());
    }

    @GetMapping("/cash/convertList")
    public List<Point> cashConvertList(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
        List<Point> points = payService.findByMemberId(loginMember.getId());
        Collections.reverse(points);
        return points;
    }
    @PostMapping("/cash/use")
    public String usePoint(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember,
                              @RequestBody String amount) {
        loginMember.setPoint(loginMember.getPoint() - Integer.parseInt(amount.replace("=","")));

        Point point = new Point();
        point.setStatus("사용");
        point.setHistory("-"+amount.replace("=",""));
        point.setMemberId(loginMember);
        payService.saveUsePoint(point);
        return String.valueOf(loginMember.getPoint());
    }
}
    //---------------------------------------------------------------------------//
//    @GetMapping("/members/new")
//    public String createForm(Model model) {
//        model.addAttribute("memberForm", new MemberForm());
//        return "members/createMemberForm";
//    }
////    @ModelAttribute("roles")
////    public Role[] roles() {
////        return Role.values(); // 해당 ENUM의 모든 정보를 배열로 반환한다.
////    }
//
//    @PostMapping("/members/new")
//    public String create(@Valid MemberForm form,//valid를 하면 MemberForm 클래스의 notEmpty를 적용시킨다.
//                         BindingResult result) {
//        if (result.hasErrors()) {
//            return "members/createMemberForm";
//        }
//
//        Member member = new Member();
//        member.setName(form.getName());
//        member.setEmail(form.getEmail());
//        member.setPassword(form.getPassword());
//        member.setPhoneNumber(form.getPhoneNumber());
//        member.setRole(form.getRole());
//
//        memberService.join(member);
//        return "redirect:/";
//    }


//    /**
//     * 사전검증 데이터 저장
//     */
//    @PostMapping("/payments/prepare")
//    @ResponseBody
//    public void beforePay(@RequestBody Map<String, Object> map) throws IamportResponseException, IOException, SQLException {
//        String token = String.valueOf(api.getAccessToken());
//        String response = payService.verification(token,map.get("merchant_uid").toString(), map.get("amount").toString());
//    }
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
//    @GetMapping("/payments/paymentDetail")
//    public String payDetail(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember,
//                            Model model, @RequestParam("payment") String uid) {
//        log.info("받은 데이터(uid): " + uid);
//        PaymentD findPayment = payService.findPaymentOne(uid);
//        //세션에 회원 데이터가 없으면 home
//        if (loginMember == null) {
//            return "home";
//        }
//        //세션이 유지되면 로그인으로 이동
//        model.addAttribute("member", loginMember);
//        model.addAttribute("payments", findPayment);
//        log.info("진입");
//        return "payments/paymentDetail";
//    }
//    @GetMapping("payments/paymentDetail")
//    public String a() {
//        log.info("진입합니다");
//
//        return "payments/paymentDetail";
//    }

