package project.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import project.project.domain.Adviceuser;

public interface AdviceUserLoginRepository extends JpaRepository<Adviceuser, Long>{
    @Query(value = "select user_id from adviceuser where password = :pw", nativeQuery = true)
    String findByAdviceUserID(String pw);

    @Query(value = "select * from adviceuser where user_id = :id", nativeQuery = true)
    Adviceuser findByAdviceUser(String id);


}
