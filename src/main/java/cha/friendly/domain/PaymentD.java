package cha.friendly.domain;

import cha.friendly.domain.enumP.PaymentMethod;
import cha.friendly.domain.enumP.PaymentStatus;
import cha.friendly.domain.Dto.UpdatePaymentDto;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.format.annotation.DateTimeFormat;


import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

@Entity
@Slf4j
@Getter
@Setter
public class PaymentD {
    @Id
    @GeneratedValue
    @Column(name = "payment_id")
    private Long id;

    private String buyer; // 구매자
    private String buyerEmail;

    //private String receiptId; // PG 사에서 생성한 주문 번호

    private String merchantUid; // 우리가 생성한 주문 번호

    @Enumerated(EnumType.STRING)
    private PaymentMethod method; // 결제 수단

    private String itemName; // 결제 상품명

    private int amount; // 결제 금액

    @Enumerated(EnumType.STRING)
    private PaymentStatus status = PaymentStatus.READY; // 상태

    @DateTimeFormat(pattern = "yyyy-MM-dd'/'HH:mm:ss")
    private ZonedDateTime orderAt; // 결제 요청 일시
    @DateTimeFormat(pattern = "yyyy-MM-dd'/'HH:mm:ss")
    private ZonedDateTime paidAt;

    private ZonedDateTime failedAt; // 결제 실패 일시

    private int cancel_amount; // 취소된 금액

    private LocalDateTime cancelAt; // 결제 취소 일시

    public void change(UpdatePaymentDto paymentDto) {
        buyer = paymentDto.getBuyer();
        method = paymentDto.getMethod(); // 결제 수단
        itemName = paymentDto.getItemName(); // 결제 상품명
        amount = paymentDto.getAmount(); // 결제 금액
        status = paymentDto.getStatus();
        paidAt = convertDateTime(paymentDto.getPaidAt());
    }

    private ZonedDateTime convertDateTime(String at) {
        String[] timeArray = at.split(" ");//'Mon Sep 18 17:04:17 KST 2023'
        String month = convertMonth(timeArray[1]);
        String paid_date = timeArray[5]+"-"+month+"-"+timeArray[2]+" " + timeArray[3];
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return LocalDateTime.parse(paid_date, formatter).atZone(ZoneId.of("UTC"));
    }

    private String convertMonth(String month) {
        switch (month) {
            case "Jan":
                return "01";
            case "Feb":
                return "02";
            case "Mar":
                return "03";
            case "Apr":
                return "04";
            case "May":
                return "05";
            case "Jun":
                return "06";
            case "Jul":
                return "07";
            case "Aug":
                return "08";
            case "Sep":
                return "09";
            case "Oct":
                return "10";
            case "Nov":
                return "11";
            case "Dec":
                return "12";
        }
        return "";
    }
}
