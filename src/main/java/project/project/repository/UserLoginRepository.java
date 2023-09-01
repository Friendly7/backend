package project.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import project.project.domain.User;

public interface UserLoginRepository extends JpaRepository<User, Long>{
    @Query(value = "select user_id from user where password = :pw", nativeQuery = true)
    String findByUserID(String pw);
    @Query(value = "select * from user where user_id = :id", nativeQuery = true)
    User findByUser(String id);
}
