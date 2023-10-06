package cha.friendly.service;

import cha.friendly.domain.Address;
import cha.friendly.domain.Member;
import cha.friendly.repository.MemberRepository;
import cha.friendly.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor //lombok에서 memberRepository 생성자 만들어줌
public class MemberService {
    private final MemberRepository memberRepository; //final해놓으면 값세팅 안하면 빨간줄

    //회원 가입
    @Transactional
    public Long join(Member member) {
        //같은 이름의 회원을 받지 않는다
        validateDuplicateMember(member); //중복 회원 검증
        memberRepository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member) {
        List<Member> findMembers = memberRepository.findByName(member.getName());
        if (findMembers.size() > 0) {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }
    @Transactional
    public void updateLocation(Long memberId, Address address) {
        Member findMember = memberRepository.findOne(memberId);
        findMember.setAddress(address);
    }

    //회원 전체 조회
    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    //한 건 조회
    public Member findOne(Long memberId) {
        return memberRepository.findOne(memberId);
    }

    public Address getLocation(Long id) {
        Address address = memberRepository.findOne(id).getAddress();
        return address;
    }
    @Transactional
    public void update(Member member) {
        memberRepository.up
    }
}
