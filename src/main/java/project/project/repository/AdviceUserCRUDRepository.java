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

    @Query(value = "select * from adviceuser where price <= :one and category = :category and (time= :two or professional= :three) ", nativeQuery = true)
    List<Adviceuser> findByUserListOneIsPrice1(String one, String category, String two, String three);

    @Query(value = "select * from adviceuser where price <= :one and category = :category and (professional= :two or time= :three)", nativeQuery = true)
    List<Adviceuser> findByUserListOneIsPrice2(String one, String category, String two, String three);

    @Query(value = "select * from adviceuser where time = :one and category = :category and (price <= :two or professional= :three) ", nativeQuery = true)
    List<Adviceuser> findByUserListOneIsTime1(String one, String category, String two, String three);

    @Query(value = "select * from adviceuser where time = :one and category = :category and (professional= :two or price <= :three)", nativeQuery = true)
    List<Adviceuser> findByUserListOneIsTime2(String one, String category, String two, String three);

    @Query(value = "select * from adviceuser where professional= :one and category = :category and (time= :two or price <= :three) ", nativeQuery = true)
    List<Adviceuser> findByUserListOneIsPro1(String one, String category, String two, String three);

    @Query(value = "select * from adviceuser where professional= :one and category = :category and (price <= :two or time= :three)", nativeQuery = true)
    List<Adviceuser> findByUserListOneIsPro2(String one, String category, String two, String three);



    @Query(value = "select * from adviceuser where latelyuser != :user and price <= :one and category = :category and (time= :two or professional= :three) ", nativeQuery = true)
    List<Adviceuser> findByReUserListOneIsPrice1(String user, String one, String category, String two, String three);

    @Query(value = "select * from adviceuser where latelyuser != :user and price <= :one and category = :category and (professional= :two or time= :three)", nativeQuery = true)
    List<Adviceuser> findByReUserListOneIsPrice2(String user, String one, String category, String two, String three);

    @Query(value = "select * from adviceuser where latelyuser != :user and time = :one and category = :category and (price <= :two or professional= :three) ", nativeQuery = true)
    List<Adviceuser> findByReUserListOneIsTime1(String user, String one, String category, String two, String three);

    @Query(value = "select * from adviceuser where latelyuser != :user and  time = :one and category = :category and (professional= :two or price <= :three)", nativeQuery = true)
    List<Adviceuser> findByReUserListOneIsTime2(String user, String one, String category, String two, String three);

    @Query(value = "select * from adviceuser where latelyuser != :user and professional= :one and category = :category and (time= :two or price <= :three) ", nativeQuery = true)
    List<Adviceuser> findByReUserListOneIsPro1(String user, String one, String category, String two, String three);

    @Query(value = "select * from adviceuser where latelyuser != :user and professional= :one and category = :category and (price <= :two or time= :three)", nativeQuery = true)
    List<Adviceuser> findByReUserListOneIsPro2(String user, String one, String category, String two, String three);

}
