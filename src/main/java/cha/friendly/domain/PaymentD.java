package cha.friendly.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class PaymentD {
    @Id
    @GeneratedValue
    @Column(name = "payment_id")
    private Long id;

    private String buyer; // 구매자

    private String receiptId; // PG 사에서 생성한 주문 번호

    private String merchantUid; // 우리가 생성한 주문 번호

    @Embedded
    private PaymentMethod method; // 결제 수단

    private String name; // 결제 상품명

    private int amount; // 결제 금액

    private PaymentStatus status = PaymentStatus.READY; // 상태

    private LocalDateTime createAt = LocalDateTime.now(); // 결제 요청 일시

    private LocalDateTime failedAt; // 결제 실패 일시

    private int cancelledAmount; // 취소된 금액

    private LocalDateTime cancelledAt; // 결제 취소 일시
}
