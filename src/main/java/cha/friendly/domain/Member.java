package cha.friendly.domain;

import cha.friendly.domain.enumP.Role;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter @Setter
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    private String name; //nickname . 중복 불가
    private String email; //계정 id . 중복 불가
    private String password;

    @Embedded
    private Address Address;

    private String phoneNumber; //1인 1번호. 중복 불가

    @Enumerated(EnumType.STRING)
    private Role role; //1개의 계정은 1개의 역할만 같는다.

    private int is_blocked; //정지유무

    /**
     매칭에 사용되는 데이터
     */
    private String mainCate;
    private String subCate;

    private int minPrice;
    private int maxPrice;

    private String  DOW; //요일 DaysOfWeek

    private String time; //선호 시간
    private int expStat; // 체험여부(멘토용)
    private String introduce; //Biography (자기소개)
    private int remote; //대면가능여부(멘토용)

    private int matchCnt = 0; //매칭된 인원 수(최대 3)
    private String recentMatched; //(최근 매칭된 사람)

    private float raiting; //별점
    private int reviewCnt; //리뷰개수

    private int point;

    private int totalMatchingCount; //총 매칭수
    private  String professional;

//    @OneToMany(mappedBy = "member") //order테이블에 있는 member를 뜻한다.
//    private List<Order> orders = new ArrayList<>();
}
