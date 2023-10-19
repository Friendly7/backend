package cha.friendly.domain.Dto;

import cha.friendly.domain.enumP.PaymentMethod;
import cha.friendly.domain.enumP.PaymentStatus;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class UpdatePaymentDto {
    private int amount;
    private String buyer;
    private String itemName;
    private String merchantUid;
    private PaymentStatus status;
    private PaymentMethod method;
    private String paidAt;
    private String orderAt;
    private String buyerEmail;
}
