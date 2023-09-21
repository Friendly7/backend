package project.project.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Adviceuser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String user_id;
    private String password;
    private String name;
    private String category;

    private  String professional;

    private  Long price;

    private  String time;

    private String latelyuser;

    public Long getId(){return id;}
    public void setId(Long id){this.id = id;}
    public String getUser_id(){return user_id;}
    public void setUser_id(String user_id){this.user_id = user_id;}
    public String getPassword(){return password;}
    public void setPassword(String password){this.password = password;}
    public String getName(){return name;}
    public void setName(String name){this.name = name;}
    public String getCategory(){return category;}
    public void setCategory(String category){this.category = category;}

    public Long getPrice(){return price;}
    public void setPrice(Long price){this.price = price;}

    public String getProfessional(){return professional;}
    public void setProfessional(String professional){this.professional = professional;}

    public String getTime(){return time;}
    public void setTime(String time){this.time = time;}


    public String getLatelyuser(){return latelyuser;}
    public void setLatelyuser(String latelyuser){this.latelyuser = latelyuser;}



}
