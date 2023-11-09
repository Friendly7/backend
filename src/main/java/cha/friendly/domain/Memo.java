package cha.friendly.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Memo {
    @Id
    @GeneratedValue
    @Column(name = "momo_id")
    private Long id;
    private Long memberId;
    private String contents;
}
