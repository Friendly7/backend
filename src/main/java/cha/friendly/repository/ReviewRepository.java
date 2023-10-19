package cha.friendly.repository;

import cha.friendly.domain.Review;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Persistent;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
@RequiredArgsConstructor
public class ReviewRepository {
    @PersistenceContext
    EntityManager em;

    public void save(Review review) {
        em.persist(review);
    }
}
