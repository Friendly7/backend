package cha.friendly.repository;

import cha.friendly.domain.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ManageRepository extends JpaRepository<Report,Long> {

    List<Report> findAllById(Long id);

    List<Report> findAllByStatus(String 처리대기);
}
