package cha.friendly.domain;

import lombok.Getter;

import javax.persistence.Embeddable;

@Embeddable
@Getter
public class Address {
    /**
     * city : 도,특별시, 광역시
     * gu : 시,군,구  |Ex|구로구, 남구
     * dong : 읍,면,동
     */
    private String city;
    private String gu;
    private String dong;

    public Address() {
    }

    public Address(String city, String gu, String dong) {
        this.city = city;
        this.gu = gu;
        this.dong = dong;
    }
}

