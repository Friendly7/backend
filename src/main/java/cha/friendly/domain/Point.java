package cha.friendly.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter@Setter
public class Point {
    @Id
    @GeneratedValue
    @Column(name = "point_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member memberId;

    private String history;
    private String status; //충전, 사용, 현금화
}
