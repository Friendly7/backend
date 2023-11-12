package cha.friendly.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Areaboard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long user_id;
    private String user_name;
    private String board_name;
    private String content;
    private Address address;

    public Long getId(){return id;}
    public void setId(Long id){this.id = id;}

    public Long getUser_id(){return user_id;}
    public void setUser_id(Long user_id){this.user_id = user_id;}
    public String getUser_name(){return user_name;}
    public void setUser_name(String user_name){this.user_name = user_name;}

    public String getBoard_name(){return board_name;}
    public void setBoard_name(String board_name){this.board_name = board_name;}

    public String getContent(){return content;}
    public void setContent(String content){this.content = content;}

    public Address getAddress(){return address;}
    public void setAddress(Address address){this.address = address;}

}
