package cha.friendly.service;

import cha.friendly.domain.Dto.UpdatePaymentDto;
import cha.friendly.domain.PaymentD;
import cha.friendly.domain.Point;
import cha.friendly.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.reactive.function.client.WebClient;

import javax.annotation.PostConstruct;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class PayService {
    private final PaymentRepository paymentRepository; //f
    private WebClient webClient;

    @Transactional(readOnly = true)
    public List<Point> findByMemberId(Long memberId) {
        return paymentRepository.findByMemberId(memberId);
    }

    @PostConstruct
    public void initWebClient() {
        webClient = WebClient.create("http://localhost:8080");
    }

    @PostMapping("/payments/prepare")
    public String verification(String token, String merchant_uid, String amount) throws SQLException {
        HashMap<String, String> map = new HashMap<>();
        map.put("merchant_uid", merchant_uid);
        map.put("amount", amount);

        String response =  webClient.post()
                .uri("https://api.iamport.kr/payments/prepare")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, token)
                .bodyValue(map)
                .retrieve()
                .bodyToMono(String.class)
                .block();
        return response;
    }

    @GetMapping("/payments/prepare/{merchant_uid}")
    public String selectPayment(String token, @PathVariable("merchant_uid") String merchant_uid) {
        return webClient.get()
                .uri("https://api.iamport.kr/payments/prepare/{uid}", merchant_uid)
                .header(HttpHeaders.AUTHORIZATION, token)
               // .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    //merchant_uid 저장 . 결제전
//    @Transactional
//    public void saveMerchantUid(PaymentD paymentD) {
//        paymentRepository.saveMerchantUid(paymentD);
//    }
    @Transactional
    public PaymentD savePayment(UpdatePaymentDto dto) {
        PaymentD findPaymentD = paymentRepository.findPaymentDObject();
        findPaymentD.change(dto);
        return paymentRepository.savePayment(findPaymentD);
    }
    public List<PaymentD> findPayments() {
        return paymentRepository.findAll();
    }
    public Optional<PaymentD> findPaymentOne(String merchantUid) {
        return paymentRepository.findByMerchantUid(merchantUid);
    }
    public void saveUid(PaymentD paymentD) {
        paymentRepository.saveUid_date(paymentD);
    }

    @Transactional
    public void saveUsePoint(Point point) {
        paymentRepository.saveUsePoint(point);
    }

//    public PaymentD findOne(String merchantUid) {
//        return paymentRepository.findOne(merchantUid);
//    }
}
