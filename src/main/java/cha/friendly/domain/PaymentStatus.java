package cha.friendly.domain;

import lombok.Getter;

@Getter
public enum PaymentStatus {
    READY,
    PAID,
    FAILED,
    CANCELLED
}
