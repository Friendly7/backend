package cha.friendly.repository;

import cha.friendly.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class MemberRepository {
    @PersistenceContext
    private EntityManager em;

    public void save(Member member) {
        em.persist(member);
    }

    public Member findOne(Long id) {
        return em.find(Member.class, id);
    } //findById

    public List<Member> findAll() {
        return em.createQuery("select m from Member m", Member.class)
                .getResultList();
    }

    public List<Member> findByName(String name) {
        return em.createQuery("select m from Member m where m.name = :name", Member.class)
                .setParameter("name", name)
                .getResultList();
    }

    /**
     *  로그인
     */
    public Optional<Member> findByLoginId(String loginId) { //loginId == email
        return findAll().stream()
                .filter(m -> m.getEmail().equals(loginId))
                .findFirst();
    }

    public void ban(Long userId) {
        em.createQuery("update Member m set m.is_blocked = 1 WHERE m.id = :userId")
                .setParameter("userId", userId)
                .executeUpdate();
    }
    public void cancelBan(Long userId) {
        em.createQuery("update Member m set m.is_blocked = 0 WHERE m.id = :userId")
                .setParameter("userId", userId)
                .executeUpdate();
    }
    public List<Member> banList() {
        return em.createQuery("SELECT m FROM Member m WHERE m.is_blocked = true", Member.class)
                .getResultList();
    }
}