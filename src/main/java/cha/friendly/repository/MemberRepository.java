package cha.friendly.repository;

import cha.friendly.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
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
     *  여기부터는 로그인 관련
     */
    public Optional<Member> findByLoginId(String loginId) { //loginId == email
        return findAll().stream()
                .filter(m -> m.getEmail().equals(loginId))
                .findFirst();
    }

//    public List<Member> loginFindAll() {
//        return em.createQuery("select m from Member m", Member.class)
//                .setParameter("name", name)
//                .getResultList();
//    }


}