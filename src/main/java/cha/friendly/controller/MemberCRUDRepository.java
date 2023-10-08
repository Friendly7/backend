package cha.friendly.controller;



import cha.friendly.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MemberCRUDRepository extends JpaRepository<Member, Long> {
    @Query(value = "select * from member where id = :id", nativeQuery = true)
    Member findByUser(Long id);

    @Query(value = "select * from member where id = :id", nativeQuery = true)
    List<Member> findByUserList(Long id);

    @Query(value = "select * from member where price <= :one and category = :category and (time= :two or professional= :three) and matchCnt < 3 order by price", nativeQuery = true)
    List<Member> findByUserListOneIsPrice1(String one, String category, String two, String three);

    @Query(value = "select * from member where price <= :one and category = :category and (professional= :two or time= :three)", nativeQuery = true)
    List<Member> findByUserListOneIsPrice2(String one, String category, String two, String three);

    @Query(value = "select * from member where time = :one and category = :category and (price <= :two or professional= :three) ", nativeQuery = true)
    List<Member> findByUserListOneIsTime1(String one, String category, String two, String three);

    @Query(value = "select * from member where time = :one and category = :category and (professional= :two or price <= :three)", nativeQuery = true)
    List<Member> findByUserListOneIsTime2(String one, String category, String two, String three);

    @Query(value = "select * from member where professional= :one and category = :category and (time= :two or price <= :three) ", nativeQuery = true)
    List<Member> findByUserListOneIsPro1(String one, String category, String two, String three);

    @Query(value = "select * from member where professional= :one and category = :category and (price <= :two or time= :three)", nativeQuery = true)
    List<Member> findByUserListOneIsPro2(String one, String category, String two, String three);



    @Query(value = "select * from member where latelyuser != :user and price <= :one and category = :category and (time= :two or professional= :three) ", nativeQuery = true)
    List<Member> findByReUserListOneIsPrice1(String user, String one, String category, String two, String three);

    @Query(value = "select * from member where latelyuser != :user and price <= :one and category = :category and (professional= :two or time= :three)", nativeQuery = true)
    List<Member> findByReUserListOneIsPrice2(String user, String one, String category, String two, String three);

    @Query(value = "select * from member where latelyuser != :user and time = :one and category = :category and (price <= :two or professional= :three) ", nativeQuery = true)
    List<Member> findByReUserListOneIsTime1(String user, String one, String category, String two, String three);

    @Query(value = "select * from member where latelyuser != :user and  time = :one and category = :category and (professional= :two or price <= :three)", nativeQuery = true)
    List<Member> findByReUserListOneIsTime2(String user, String one, String category, String two, String three);

    @Query(value = "select * from member where latelyuser != :user and professional= :one and category = :category and (time= :two or price <= :three) ", nativeQuery = true)
    List<Member> findByReUserListOneIsPro1(String user, String one, String category, String two, String three);

    @Query(value = "select * from member where latelyuser != :user and professional= :one and category = :category and (price <= :two or time= :three)", nativeQuery = true)
    List<Member> findByReUserListOneIsPro2(String user, String one, String category, String two, String three);

}

