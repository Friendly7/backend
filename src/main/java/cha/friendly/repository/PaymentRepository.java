package cha.friendly.repository;

import cha.friendly.domain.PaymentD;
import cha.friendly.service.UpdatePaymentDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
@Slf4j
@RequiredArgsConstructor
public class PaymentRepository {
    @PersistenceContext
    private EntityManager em;

    public void saveMerchantUid(PaymentD paymentD) {
        em.persist(paymentD);
    }

    public PaymentD findByMerchantUid(String merchantUid) {
        return em.createQuery("select p from PaymentD p where p.merchantUid = :merchantUid", PaymentD.class)
                .setParameter("merchantUid", merchantUid)
                .getSingleResult();
    }
}
