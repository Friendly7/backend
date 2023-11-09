package cha.friendly.service;

import cha.friendly.domain.Address;
import cha.friendly.domain.Member;
import cha.friendly.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class MemberService {
    private final MemberRepository memberRepository;

    public List<Member> findByName(String name) {
        log.info(name);
        return memberRepository.findByName(name);
    }

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
        memberRepository.save(member);
    }

    @Transactional
    public void ban(Member member) {
        memberRepository.ban(member.getId());
    }

    @Transactional
    public void cancelBan(Member member) {
        memberRepository.cancelBan(member.getId());
    }

    public boolean isEmailUnique(String email) {

        Member existingMember = memberRepository.findByEmail(email);
        // null이면 현재 회원이 아니다.
        return existingMember == null;
    }

    public void SetTempPassword(String to, String authNum) {
        Member member = memberRepository.findByEmail(to);

        if (member != null) {
            // 임시 비밀번호 암호화
//            String encodedTempPassword = passwordEncoder.encode(authNum);

            // 임시 비밀번호 저장
            member.setPassword(authNum);
            memberRepository.save(member);
        } else {
            throw new RuntimeException("사용자를 찾을 수 없음");
        }
    }
}
