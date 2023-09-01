package project.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import project.project.domain.Adviceuser;
import project.project.domain.User;

import java.util.List;

public interface AdviceUserCRUDRepository extends JpaRepository<Adviceuser, Long> {
    @Query(value = "select * from adviceuser where id = :id", nativeQuery = true)
    Adviceuser findByUser(Long id);

    @Query(value = "select * from adviceuser where id = :id", nativeQuery = true)
    List<Adviceuser> findByUserList(Long id);

    @Query(value = "select * from adviceuser where price <= :one and category = 'c언어' and time= :two or professional= :three ", nativeQuery = true)
    List<Adviceuser> findByUserListOneIsPrice1(String one, String two, String three);

    @Query(value = "select * from adviceuser where price <= :one and category = 'c언어' and professional= :two or time= :three", nativeQuery = true)
    List<Adviceuser> findByUserListOneIsPrice2(String one, String two, String three);

    @Query(value = "select * from adviceuser where time = :one and category = 'c언어' and price <= :two or professional= :three ", nativeQuery = true)
    List<Adviceuser> findByUserListOneIsTime1(String one, String two, String three);

    @Query(value = "select * from adviceuser where time = :one and category = 'c언어' and professional= :two or price <= :three", nativeQuery = true)
    List<Adviceuser> findByUserListOneIsTime2(String one, String two, String three);

    @Query(value = "select * from adviceuser where professional= :one and category = 'c언어' and time= :two or price <= :three ", nativeQuery = true)
    List<Adviceuser> findByUserListOneIsPro1(String one, String two, String three);

    @Query(value = "select * from adviceuser where professional= :one and category = 'c언어' and price <= :two or time= :three", nativeQuery = true)
    List<Adviceuser> findByUserListOneIsPro2(String one, String two, String three);

}
