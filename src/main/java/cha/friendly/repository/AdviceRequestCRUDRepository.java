package cha.friendly.repository;

import cha.friendly.domain.Advicerequest;
import cha.friendly.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdviceRequestCRUDRepository extends JpaRepository<Advicerequest, Long> {
    @Query(value = "select * from advicerequest where request_id = :id", nativeQuery = true)
    Advicerequest findByRequest(Long id);

    @Query(value = "select * from advicerequest where request_id = :id", nativeQuery = true)
    Advicerequest findByUserIDRequest(Long id);

    @Query(value = "select * from advicerequest where matmentornum = :id and (matching IS NULL or matching != '매칭완료')", nativeQuery = true)
    List<Advicerequest> findByMentorWaitingList(Long id);

    @Query(value = "select * from advicerequest where user_id = :id and (matching IS NULL or matching != '매칭완료')", nativeQuery = true)
    List<Advicerequest> findByUserWaitingList(Long id);

    @Query(value = "select * from advicerequest where request_id = :id", nativeQuery = true)
    Advicerequest findByUserWaitingList2(Long id);

    @Query(value = "select * from advicerequest where matching = '매칭거절'", nativeQuery = true)
    List<Advicerequest> findByReMatchingList();

    @Query(value = "select * from advicerequest where matching IS NULL or matching != '매칭완료'", nativeQuery = true)
    List<Advicerequest> findByAdviceRequestList();
}