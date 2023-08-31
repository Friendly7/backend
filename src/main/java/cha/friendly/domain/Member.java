package cha.friendly.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Member {
    @Id
    @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    private String name;

//    @OneToMany(mappedBy = "member") //order테이블에 있는 member를 뜻한다.
//    private List<Order> orders = new ArrayList<>();
}
