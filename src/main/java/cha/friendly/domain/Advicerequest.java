package cha.friendly.domain;

import cha.friendly.domain.Dto.RequestDto;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
@DynamicInsert
@DynamicUpdate
@Getter
@Setter
public class Advicerequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long request_id;
    private Long user_id;
    private String user_name;
    private String category;
    private String significant; //특이사항

    private String onoffline;
    private int expStat; // 체험여부

    private String  DOW; //요일 DaysOfWeek
    private String time;
    private int minPrice;
    private int maxPrice;

    private String one;
    private String two;
    private String three;

    private Long matmentornum;

    private String matching;

    private String matmentorname;

    private String user_waiting;
    private String date;
    private String mentor_waiting;
    private  String professional;

    public static Advicerequest create(RequestDto reqDto, Member member, int expStat) {
        Advicerequest adviceRequest = new Advicerequest();
        adviceRequest.setUser_id(member.getId());
        adviceRequest.setUser_name(reqDto.getName());
        adviceRequest.setDOW(reqDto.getDow());
        adviceRequest.setTime(reqDto.getTime());
        adviceRequest.setOnoffline(reqDto.getOnoffline());
        adviceRequest.setCategory(reqDto.getCategory());
        adviceRequest.setProfessional(reqDto.getProfessional());
        adviceRequest.setMinPrice(Integer.parseInt(reqDto.getMinPrice()));
        adviceRequest.setMaxPrice(Integer.parseInt(reqDto.getMaxPrice()));
        adviceRequest.setExpStat(expStat);
        adviceRequest.setSignificant(reqDto.getSignificant());
        adviceRequest.setOne(reqDto.getOne());
        adviceRequest.setTwo(reqDto.getTwo());
        adviceRequest.setThree(reqDto.getThree());
        adviceRequest.setMatching("요청대기");
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedNow = now.format(formatter);
        adviceRequest.setDate(formattedNow);
        return adviceRequest;
    }
}