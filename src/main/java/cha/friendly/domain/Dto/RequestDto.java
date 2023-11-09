package cha.friendly.domain.Dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.RequestParam;

@Getter
@Setter
public class RequestDto {
    private String name;
    private String time;
    private String onoffline;
    private String category;
    private String dow;
    private String professional;
    private String minPrice;
    private String maxPrice;
    private String expStat;
    private String significant;
    private String one;
    private String two;
    private String three;
}