package cha.friendly.domain;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
@DynamicInsert
@DynamicUpdate
@Getter @Setter
public class Advicerequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long request_id;
    private Long user_id;
    private String user_name;
    private String advice_time;
    private String onoffline;
    private String category;
    private String professional;

    private String minPrice;
    private String maxPrice;
    private String one;
    private String two;
    private String three;

    private Long matmentornum;

    private String matching;

    private String matmentorname;

    private String user_waiting;

    private String mentor_waiting;

    public static Advicerequest create(RequestDto dto) {
        Advicerequest adviceRequest = new Advicerequest();
        adviceRequest.setUser_name(dto.getName());
        adviceRequest.setAdvice_time(dto.getAdviceTime());
        adviceRequest.setOnoffline(dto.getOnoffline());
        adviceRequest.setCategory(dto.getCategory());
        adviceRequest.setProfessional(dto.getProfessional());
        adviceRequest.setMinPrice(dto.getMinPrice());
        adviceRequest.setMaxPrice(dto.getMaxPrice());
        return adviceRequest;
    }
}
