package cha.friendly.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Report {
    @Id
    @GeneratedValue
    @Column(name = "report_id")
    private Long id;
    private String title;
    private String context;
    private String reporter;
    private String respondent;//피신고인
    private String date;
    private String status; //'처리대기','처리완료'
}
