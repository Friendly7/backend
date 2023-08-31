package cha.friendly.repository;

import cha.friendly.domain.Location;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
@RequiredArgsConstructor
public class LocationRepository {
    @PersistenceContext
    private EntityManager em;

    public void save(Location location) {
        em.persist(location);
    }
}
