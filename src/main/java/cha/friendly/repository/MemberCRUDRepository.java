package cha.friendly.repository;

import cha.friendly.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MemberCRUDRepository extends JpaRepository<Member, Long> {
    @Query(value = "select * from member where member_id = :id", nativeQuery = true)
    Member findByMember(Long id);

    @Query(value = "select * from user where user_id = :id", nativeQuery = true)
    Member overlapCheckId(String id);
    @Query(value = "select * from member where name = :name", nativeQuery = true)
    Member findByNameMember(String name);


    //매칭
    @Query(value = "select * from member where (role = 'MENTOR' or role = 'COUNSELOR' or role = 'NONCOUNSELOR') and dow = :dow and exp_stat = :exp_stat  and remote = :remote and min_price >= :minPrice and max_price <= :maxPrice and main_cate = :cate and is_blocked != 1 and professional = :professional order by raiting DESC, review_cnt DESC, total_matching_count DESC", nativeQuery = true)
    List<Member> findByMentorListOneIsRaiting1(String dow, int exp_stat, int remote,int minPrice, int maxPrice, String cate, String professional);

    @Query(value = "select * from member where(role = 'MENTOR' or role = 'COUNSELOR' or role = 'NONCOUNSELOR') and dow = :dow and exp_stat = :exp_stat  and remote = :remote and min_price >= :minPrice and max_price <= :maxPrice and main_cate = :cate and is_blocked != 1 and professional = :professional order by raiting DESC, total_matching_count DESC, review_cnt DESC", nativeQuery = true)
    List<Member> findByMentorListOneIsRaiting2(String dow, int exp_stat, int remote,int minPrice, int maxPrice, String cate, String professional);

    @Query(value = "select * from member where (role = 'MENTOR' or role = 'COUNSELOR' or role = 'NONCOUNSELOR') and dow = :dow and exp_stat = :exp_stat  and remote = :remote and min_price >= :minPrice and max_price <= :maxPrice and main_cate = :cate and is_blocked != 1 and professional = :professional order by review_cnt DESC, raiting DESC, total_matching_count DESC", nativeQuery = true)
    List<Member> findByMentorListOneIsReview_cnt1(String dow, int exp_stat, int remote,int minPrice, int maxPrice, String cate, String professional);

    @Query(value = "select * from member where (role = 'MENTOR' or role = 'COUNSELOR' or role = 'NONCOUNSELOR') and dow = :dow and exp_stat = :exp_stat  and remote = :remote and min_price >= :minPrice and max_price <= :maxPrice and main_cate = :cate and is_blocked != 1 and professional = :professional order by review_cnt DESC, total_matching_count DESC, raiting DESC", nativeQuery = true)
    List<Member> findByMentorListOneIsReview_cnt2(String dow, int exp_stat, int remote,int minPrice, int maxPrice, String cate, String professional);

    @Query(value = "select * from member where (role = 'MENTOR' or role = 'COUNSELOR' or role = 'NONCOUNSELOR') and dow = :dow and exp_stat = :exp_stat  and remote = :remote and min_price >= :minPrice and max_price <= :maxPrice and main_cate = :cate and is_blocked != 1 and professional = :professional order by total_matching_count DESC, raiting DESC, review_cnt DESC", nativeQuery = true)
    List<Member> findByMentorListOneIsRes_rate1(String dow, int exp_stat, int remote,int minPrice, int maxPrice, String cate, String professional);

    @Query(value = "select * from member where (role = 'MENTOR' or role = 'COUNSELOR' or role = 'NONCOUNSELOR') and dow = :dow and exp_stat = :exp_stat  and remote = :remote and min_price >= :minPrice and max_price <= :maxPrice and main_cate = :cate and is_blocked != 1 and professional = :professional order by total_matching_count DESC, review_cnt DESC, raiting DESC", nativeQuery = true)
    List<Member> findByMentorListOneIsRes_rate2(String dow, int exp_stat, int remote,int minPrice, int maxPrice, String cate, String professional);


    //재매칭
    @Query(value = "select * from member where (role = 'MENTOR' or role = 'COUNSELOR' or role = 'NONCOUNSELOR') and dow = :dow and exp_stat = :exp_stat  and remote = :remote and min_price >= :minPrice and max_price <= :maxPrice and main_cate = :cate and is_blocked != 1 and recent_matched != :re_matched and professional = :professional order by raiting DESC, review_cnt DESC, total_matching_count DESC", nativeQuery = true)
    List<Member> findByReMentorListOneIsRaiting1(String dow, int exp_stat, int remote,int minPrice, int maxPrice, String cate, String re_matched, String professional);

    @Query(value = "select * from member where(role = 'MENTOR' or role = 'COUNSELOR' or role = 'NONCOUNSELOR') and dow = :dow and exp_stat = :exp_stat  and remote = :remote and min_price >= :minPrice and max_price <= :maxPrice and main_cate = :cate and is_blocked != 1 and recent_matched != :re_matched and professional = :professional order by raiting DESC, total_matching_count DESC, review_cnt DESC", nativeQuery = true)
    List<Member> findByReMentorListOneIsRaiting2(String dow, int exp_stat, int remote,int minPrice, int maxPrice, String cate, String re_matched, String professional);

    @Query(value = "select * from member where (role = 'MENTOR' or role = 'COUNSELOR' or role = 'NONCOUNSELOR') and dow = :dow and exp_stat = :exp_stat  and remote = :remote and min_price >= :minPrice and max_price <= :maxPrice and main_cate = :cate and is_blocked != 1 and recent_matched != :re_matched and professional = :professional order by review_cnt DESC, raiting DESC, total_matching_count DESC", nativeQuery = true)
    List<Member> findByReMentorListOneIsReview_cnt1(String dow, int exp_stat, int remote,int minPrice, int maxPrice, String cate, String re_matched, String professional);

    @Query(value = "select * from member where (role = 'MENTOR' or role = 'COUNSELOR' or role = 'NONCOUNSELOR') and dow = :dow and exp_stat = :exp_stat  and remote = :remote and min_price >= :minPrice and max_price <= :maxPrice and main_cate = :cate and is_blocked != 1 and recent_matched != :re_matched and professional = :professional order by review_cnt DESC, total_matching_count DESC, raiting DESC", nativeQuery = true)
    List<Member> findByReMentorListOneIsReview_cnt2(String dow, int exp_stat, int remote,int minPrice, int maxPrice, String cate, String re_matched, String professional);

    @Query(value = "select * from member where (role = 'MENTOR' or role = 'COUNSELOR' or role = 'NONCOUNSELOR') and dow = :dow and exp_stat = :exp_stat  and remote = :remote and min_price >= :minPrice and max_price <= :maxPrice and main_cate = :cate and is_blocked != 1 and recent_matched != :re_matched and professional = :professional order by total_matching_count DESC, raiting DESC, review_cnt DESC", nativeQuery = true)
    List<Member> findByReMentorListOneIsRes_rate1(String dow, int exp_stat, int remote,int minPrice, int maxPrice, String cate, String re_matched, String professional);

    @Query(value = "select * from member where (role = 'MENTOR' or role = 'COUNSELOR' or role = 'NONCOUNSELOR') and dow = :dow and exp_stat = :exp_stat  and remote = :remote and min_price >= :minPrice and max_price <= :maxPrice and main_cate = :cate and is_blocked != 1 and recent_matched != :re_matched and professional = :professional order by total_matching_count DESC, review_cnt DESC, raiting DESC", nativeQuery = true)
    List<Member> findByReMentorListOneIsRes_rate2(String dow, int exp_stat, int remote,int minPrice, int maxPrice, String cate, String re_matched, String professional);

}
