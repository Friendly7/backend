package cha.friendly.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Coment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long coment_id;
    private Long board_id;
    private Long user_id;
    private String coment;
    private String user_name;


    public Long getComent_id(){return coment_id;}
    public void setComent_id(Long coment_id){this.coment_id = coment_id;}

    public Long getBoard_id(){return board_id;}
    public void setBoard_id(Long board_id){this.board_id = board_id;}

    public Long getUser_id(){return user_id;}
    public void setUser_id(Long user_id){this.user_id = user_id;}

    public String getComent(){return coment;}
    public void setComent(String coment){this.coment = coment;}
    public String getUser_name(){return user_name;}
    public void setUser_name(String user_name){this.user_name = user_name;}



}
