package cha.friendly.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class Review {
    @Id
    @GeneratedValue
    @Column(name = "review_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member memberId; //작성자 ID

    private String name; //멘토(상담사) 닉네임
    private String text;
    private int rating;
}
