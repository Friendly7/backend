package cha.friendly.domain;

import lombok.Getter;

@Getter
public enum PaymentMethod {
    CARD,
    TRANS,
    VBANK,
    PHONE
}