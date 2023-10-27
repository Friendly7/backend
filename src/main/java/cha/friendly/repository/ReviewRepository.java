package cha.friendly.repository;

import cha.friendly.domain.Member;
import cha.friendly.domain.Point;
import cha.friendly.domain.Review;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Persistent;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class ReviewRepository {
    @PersistenceContext
    EntityManager em;

    public void save(Review review) {
        em.persist(review);
    }

    public List<Review> findAllById(Long memberId) {
        return em.createQuery("select r from Review r where r.memberId.id = :memberId", Review.class)
                .setParameter("memberId", memberId)
                .getResultList();
    }

    public List<Review> findAllByName(String name) {
        return em.createQuery("select r from Review r where r.name = :name", Review.class)
                .setParameter("name", name)
                .getResultList();
    }
}
