package cha.friendly.controller.form;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LocationForm {
    //@NotEmpty(message = "회원 이름은 필수입니다")
    /**
     * city : 도,특별시, 광역시
     * gu : 시,군,구  |Ex|구로구, 남구
     * dong : 읍,면,동
     */
    private String city;
    private String gu;
    private String dong;
}