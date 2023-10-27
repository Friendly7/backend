package cha.friendly.service;

import cha.friendly.repository.ReviewRepository;
import cha.friendly.domain.Review;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ReviewService {
    private final ReviewRepository reviewRepository;

    public void saveReview(Review review) {
        reviewRepository.save(review);
    }

    public List<Review> findByLoginId(Long memberId) {
        return reviewRepository.findAllById(memberId);
    }

    public List<Review> findReviewByName(String name) {
        return reviewRepository.findAllByName(name);
    }
}
