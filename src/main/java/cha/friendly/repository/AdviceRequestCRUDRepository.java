package cha.friendly.repository;

import cha.friendly.domain.Advicerequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AdviceRequestCRUDRepository extends JpaRepository<Advicerequest, Long> {
    @Query(value = "select * from advicerequest where request_id = :id", nativeQuery = true)
    Advicerequest findByRequest(Long id);

    @Query(value = "select * from advicerequest where request_id = :id", nativeQuery = true)
    Advicerequest findByUserIDRequest(Long id);

    @Query(value = "select * from advicerequest where matmentornum = :id and matching != '매칭완료' and matching != '매칭거절'", nativeQuery = true)
    List<Advicerequest> findByMentorWaitingList(Long id);

    @Query(value = "select * from advicerequest where user_id = :id and matching != '매칭완료' and matching != '매칭거절'", nativeQuery = true)
    List<Advicerequest> findByUserWaitingList(Long id);

    @Query(value = "select * from advicerequest where request_id = :id", nativeQuery = true)
    Advicerequest findByUserWaitingList2(Long id);

    @Query(value = "select * from advicerequest where matching = '매칭거절'", nativeQuery = true)
    List<Advicerequest> findByReMatchingList();

    @Query(value = "select * from advicerequest where matching != '매칭완료' and matching != '매칭거절' and matching != '수락대기'", nativeQuery = true)
    List<Advicerequest> findByAdviceRequestList();

    @Query(value = "select * from advicerequest where request_id = :id and matching ='요청대기'", nativeQuery = true)
    Advicerequest findByRequest_id(Long id);
}
