package cha.friendly.domain.enumP;

import lombok.Getter;

@Getter
public enum PaymentStatus {
    READY,
    PAID,
    FAILED,
    CANCELLED
}
