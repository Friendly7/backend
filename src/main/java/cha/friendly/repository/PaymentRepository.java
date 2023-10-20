package cha.friendly.repository;

import cha.friendly.domain.Member;
import cha.friendly.domain.PaymentD;
import cha.friendly.domain.Point;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Optional;

@Repository
@Slf4j
@RequiredArgsConstructor
public class PaymentRepository {
    @PersistenceContext
    private EntityManager em;

    private PaymentD pd;
//    public void saveMerchantUid(PaymentD paymentD) {
//        em.persist(paymentD);
//    }

    public List<PaymentD> findAll() {
        return em.createQuery("select p from PaymentD p", PaymentD.class)
                .getResultList();
    }

    public PaymentD savePayment(PaymentD paymentD) {
        em.persist(paymentD);
        return paymentD;
    }

    public PaymentD findPaymentDObject() {
        return pd;
    }

    /**
     * controller의 prepare부분에서 merchantuid와 orderAt를 임시저장하는 메서드
     *
     * @param paymentD
     */
    public void saveUid_date(PaymentD paymentD) {
        pd = paymentD;
    }

//    public PaymentD findByMerchantUid(String merchantUid) {
//        return em.createQuery("select p from PaymentD p where p.merchantUid = :merchantUid", PaymentD.class)
//                .setParameter("merchantUid", merchantUid)
//                .getSingleResult();
//    }
    public Optional<PaymentD> findByMerchantUid(String merchantUid) {
        List<PaymentD> payments = em.createQuery("select p from PaymentD p where p.merchantUid = :merchantUid", PaymentD.class)
                .setParameter("merchantUid", merchantUid)
                .getResultList();

        return payments.stream().findAny();
    }

    public List<Point> findByMemberId(Long memberId) {
        return em.createQuery("select t from Point t where t.memberId.id = :memberId", Point.class)
                .setParameter("memberId", memberId)
                .getResultList();
    }

    public void saveUsePoint(Point point) {
        em.persist(point);
    }
}
