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

    private Long member1Id;
    private Long member2Id; //매칭 멤버 ID

    private String status; //상담 전, 상담완료
}
