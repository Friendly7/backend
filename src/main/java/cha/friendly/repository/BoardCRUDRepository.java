package cha.friendly.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import cha.friendly.domain.Board;

public interface BoardCRUDRepository extends JpaRepository<Board, Long> {
    @Query(value = "select * from board where id = :id", nativeQuery = true)
    Board findByContent(Long id);
}
