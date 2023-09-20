package cha.friendly.service;

import cha.friendly.domain.PaymentMethod;
import cha.friendly.domain.PaymentStatus;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter
public class UpdatePaymentDto {
    private int amount;
    private String buyer;
    private String itemName;
    private String merchantUid;
    private PaymentStatus status;
    private PaymentMethod method;
    private String paidAt;
}
