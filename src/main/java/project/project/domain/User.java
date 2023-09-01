package project.project.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String user_id;
    private String password;
    private String name;

    public Long getId(){return id;}
    public void setId(Long id){this.id = id;}
    public String getUser_id(){return user_id;}
    public void setUser_id(String user_id){this.user_id = user_id;}
    public String getPassword(){return password;}
    public void setPassword(String password){this.password = password;}
    public String getName(){return name;}
    public void setName(String name){this.name = name;}

}
