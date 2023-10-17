package cha.friendly.controller;

import cha.friendly.domain.Review;
import org.springframework.data.annotation.Persistent;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public class ReviewRepository {
    @PersistenceContext
    EntityManager em;

    public void save(Review review) {
        em.persist(review);
    }
}
