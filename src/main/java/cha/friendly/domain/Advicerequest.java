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

    private String mentor_waiting;
    private  String professional;
}