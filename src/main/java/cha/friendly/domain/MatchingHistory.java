package cha.friendly.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
public class MatchingHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MatchingHistory_id")
    private Long id;

    private String username;
    private String matchedname;
    private String status; //진행, 종료
    private String significant;
    private String matchingStartDate;
    private String matchingEndDate;
    private String schedule;
    private String category;
    private String homework;
}
