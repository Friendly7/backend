package cha.friendly.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import cha.friendly.domain.Coment;

import java.util.List;

public interface ComentCRUDRepository extends JpaRepository<Coment, Long> {
    @Query(value = "select * from coment where board_id = :id", nativeQuery = true)
    List<Coment> findByComentList(Long id);


    @Query(value = "select * from coment where coment_id = :coment_id", nativeQuery = true)
    Coment findByComent(Long coment_id);
}
