package cha.friendly.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import cha.friendly.domain.Areacoment;

import java.util.List;

public interface AreaComentCRUDRepository extends JpaRepository<Areacoment, Long> {
    @Query(value = "select * from areacoment where board_id = :id", nativeQuery = true)
    List<Areacoment> findByComentList(Long id);


    @Query(value = "select * from areacoment where coment_id = :coment_id", nativeQuery = true)
    Areacoment findByComent(Long coment_id);
}
