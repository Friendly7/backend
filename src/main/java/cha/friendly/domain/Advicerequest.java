package cha.friendly.domain;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
@DynamicInsert
@DynamicUpdate
public class Advicerequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long request_id;
    private Long user_id;
    private String user_name;
    private String advice_time;
    private String onoffline;
    private String category;
    private String professional;

    private String price;
    private String one;
    private String two;
    private String three;

    private Long matmentornum;

    private String matching;

    private String matmentorname;

    private String user_waiting;

    private String mentor_waiting;




    public Long getRequest_id(){return request_id;}
    public void setRequest_id(Long request_id){this.request_id = request_id;}
    public Long getUser_id(){return user_id;}
    public void setUser_id(Long user_id){this.user_id = user_id;}
    public String getUser_name(){return user_name;}
    public void setUser_name(String user_name){this.user_name = user_name;}
    public String getAdvice_time(){return advice_time;}
    public void setAdvice_time(String advice_time){this.advice_time = advice_time;}
    public String getOnoffline(){return onoffline;}
    public void setOnoffline(String onoffline){this.onoffline = onoffline;}
    public String getCategory(){return category;}
    public void setCategory(String category){this.category = category;}
    public String getProfessional(){return professional;}
    public void setProfessional(String professional){this.professional = professional;}
    public String getPrice(){return price;}
    public void setPrice(String price){this.price = price;}
    public String getOne(){return one;}
    public void setOne(String one){this.one = one;}
    public String getTwo(){return two;}
    public void setTwo(String two){this.two = two;}
    public String getThree(){return three;}
    public void setThree(String three){this.three = three;}

    public Long getMatmentornum(){return matmentornum;}
    public void setMatmentornum(Long matmentornum){this.matmentornum = matmentornum;}

    public String getMatching(){return matching;}
    public void setMatching(String matching){this.matching = matching;}

    public String getMatmentorname(){return matmentorname;}
    public void setMatmentorname(String matmentorname){this.matmentorname = matmentorname;}

    public String getUser_waiting(){return user_waiting;}
    public void setUser_waiting(String user_waiting){this.user_waiting = user_waiting;}

    public String getMentor_waiting(){return mentor_waiting;}
    public void setMentor_waiting(String mentor_waiting){this.mentor_waiting = mentor_waiting;}






}
