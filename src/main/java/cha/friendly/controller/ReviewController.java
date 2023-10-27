package cha.friendly.controller;

import cha.friendly.controller.form.ReviewForm;
import cha.friendly.domain.Member;
import cha.friendly.domain.Review;
import cha.friendly.service.ReviewService;
import cha.friendly.session.SessionConst;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@Getter
@Setter
@RequestMapping("/review")
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;

    @PostMapping("/save")
    public String save(@RequestBody ReviewForm form,
                       @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
        Review review = new Review();
        review.setMemberId(loginMember);
        review.setName(form.getName());
        review.setText(form.getText());
        review.setRating(Integer.parseInt(form.getRaiting()));
        try{
            reviewService.saveReview(review);
            return "save";
        } catch (Exception e) {
            e.printStackTrace();
            return "fail";
        }
    }

    @GetMapping("/list") //로그인한 사용자의 리뷰 리스트
    public List<Review> reviewListByLogin(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
        List<Review> ReviewListByLogin = reviewService.findByLoginId(loginMember.getId());
        return ReviewListByLogin;
    }

    @GetMapping("/list/mentor") //특정 사용자의 리뷰 리스트(사용자의 멘토 리뷰 조회)
    public List<Review> reviewListByName(@RequestParam("metorName") String name) {
        log.info(name);
        return reviewService.findReviewByName(name);
    }

}
