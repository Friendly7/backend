package cha.friendly.domain.enumP;

import lombok.Getter;

@Getter
public enum Role {
    /**
     * 상담사, 멘토, 사용자(일반 사용자, 관리자)
     * 관리자 구분은 특정 아이디와 비밀번호로 구분한다.
     */
    COUNSELOR("상담사"), NONCOUNSELOR("비상담사"), MENTOR("멘토"), USER("일반 이용자");
    private final String description;

    Role(String description) {
        this.description = description;
    }
}
