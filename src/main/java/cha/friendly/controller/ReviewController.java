package cha.friendly.controller;

import cha.friendly.domain.Member;
import cha.friendly.domain.Review;
import cha.friendly.session.SessionConst;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.*;

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
        review.setMember_id(loginMember.getId());
        review.setText(form.getText());
        review.setRating(Integer.parseInt(form.getRaiting()));
        try{
            reviewService.saveReview(review);
            return "save";
        } catch (Exception e) {
            return "fail";
        }
    }
}
