package cha.friendly.repository;

import cha.friendly.domain.Advicerequest;
import cha.friendly.domain.MatchingHistory;
import cha.friendly.domain.Report;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MatchHistoryRepository extends JpaRepository<MatchingHistory,Long> {

    List<MatchingHistory> findByUsername(String name);
}
