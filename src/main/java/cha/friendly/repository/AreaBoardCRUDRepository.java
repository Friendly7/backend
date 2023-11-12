package cha.friendly.repository;

import cha.friendly.domain.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import cha.friendly.domain.Areaboard;

import java.util.List;

public interface AreaBoardCRUDRepository extends JpaRepository<Areaboard, Long> {
    @Query(value = "select * from areaboard where id = :id", nativeQuery = true)
    Areaboard findByContent(Long id);

    @Query(value = "select * from areaboard where city = :city and dong = :dong and gu = :gu", nativeQuery = true)
    List<Areaboard> findByAreaBoardList(String city, String dong, String gu);


    @Query(value = "select * from areaboard where id = :id", nativeQuery = true)
    List<Areaboard> findByContents(Long id);
}
