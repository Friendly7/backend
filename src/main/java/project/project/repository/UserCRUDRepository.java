package project.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import project.project.domain.User;

public interface UserCRUDRepository extends JpaRepository<User, Long> {
    @Query(value = "select * from user where id = :id", nativeQuery = true)
    User findByUser(Long id);

    @Query(value = "select * from user where user_id = :id", nativeQuery = true)
    User overlapCheckId(String id);
    @Query(value = "select * from user where name = :name", nativeQuery = true)
    User findByNameUser(String name);
}
